import { nanoid } from 'nanoid';
import inquirer from 'inquirer';
import { writeToFile } from './utils.js';
import { queryDB } from './queryDB.js';

const addDataToDB = async (filePath, info) => {
  try {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter your name',
      },
      {
        type: 'input',
        name: 'phone',
        message: 'Please enter your phone number',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email id',
      },
    ]);
    const data = {
      id: nanoid(),
      name: answer.name,
      phone: answer.phone,
      email: answer.email,
    };
    info.push(data);
    await writeToFile(filePath, info);
    console.info(`Successfully added the record with id ${data.id}`);
  } catch (err) {
    throw err;
  }
};

const addData = async (filePath) => {
  try {
    await queryDB(filePath, addDataToDB);
  } catch (err) {
    throw err;
  }
};

export { addData };
