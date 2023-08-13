import inquirer from 'inquirer';
import { queryDB } from './queryDB.js';
import { writeToFile } from './utils.js';

const deleteDataById = async (filePath, info) => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'recordID',
        message: 'Enter Record ID',
      },
    ]);
    const updatedData = info.filter((ele) => ele.id !== answers.recordID);

    await writeToFile(filePath, updatedData);

    console.info(`Successfully deleted the record with id ${answers.recordID}`);
  } catch (err) {
    throw err;
  }
};

const deleteData = async (filePath) => {
  try {
    await queryDB(filePath, deleteDataById);
  } catch (err) {
    throw err;
  }
};

export { deleteData, deleteDataById };
