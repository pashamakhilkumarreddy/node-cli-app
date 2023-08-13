import inquirer from 'inquirer';
import { writeToFile } from './utils.js';
import { queryDB } from './queryDB.js';

const updateDetails = async (filePath, info) => {
  try {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'recordID',
        message: 'Enter Record ID',
      },
    ]);
    const currInfo = info.find((ele) => ele.id === answer.recordID);
    if (!currInfo) {
      throw new Error(
        `No record found with the given record id ${answer.recordID}`,
      );
    }
    const feedback = await inquirer.prompt([
      {
        type: 'input',
        default: currInfo.name,
        name: 'name',
        message: "What's your name?",
      },
      {
        type: 'number',
        default: currInfo.phone,
        name: 'phone',
        message: "What's your phone?",
      },
      {
        type: 'input',
        name: 'email',
        default: currInfo.email,
        message: 'Please enter your email id',
      },
    ]);
    currInfo.name = feedback.name;
    currInfo.phone = feedback.phone;
    currInfo.email = feedback.email;
    const updatedInfo = info.map((ele) => {
      if (ele.id === answer.recordID) {
        return currInfo;
      }
      return ele;
    });
    await writeToFile(filePath, updatedInfo);
    console.info(`Successfully added the record with id ${answer.recordID}`);
  } catch (err) {
    throw err;
  }
};

const updateData = async (filePath) => {
  try {
    await queryDB(filePath, updateDetails);
  } catch (err) {
    throw err;
  }
};

export { updateData };
