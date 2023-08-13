/* eslint-disable no-await-in-loop */
import path from 'path';
import fs from 'fs';
import { exit } from 'process';
import inquirer from 'inquirer';
import { retrieveDataFromDB } from './retrieveData.js';
import { addData } from './addData.js';
import { updateData } from './updateData.js';
import { deleteData } from './removeData.js';
import {
  RETRIEVE_DATA,
  ADD_DATA,
  UPDATE_DATA,
  DELETE_DATA,
} from './config/index.js';

const FILE_NAME = 'db.json';

const filePath = path.join(process.cwd(), FILE_NAME);

const init = async () => {
  console.info('Starting node cli application');
  if (!fs.existsSync(filePath)) {
    fs.appendFileSync(filePath, '[]', {
      encoding: 'utf-8',
    });
  }
  try {
    for (;;) {
      const input = await inquirer.prompt([
        {
          type: 'rawlist', // list
          default: 0,
          name: 'operationType',
          message: 'Please enter the type of operation you want to perform',
          choices: [RETRIEVE_DATA, ADD_DATA, UPDATE_DATA, DELETE_DATA],
          loop: true,
        },
      ]);
      const { operationType } = input;
      switch (operationType) {
        case RETRIEVE_DATA:
          await retrieveDataFromDB(filePath);
          break;
        case ADD_DATA:
          await addData(filePath);
          break;
        case UPDATE_DATA:
          await updateData(filePath);
          break;
        case DELETE_DATA:
          await deleteData(filePath);
          break;
        default:
          console.info('No proper input found!!!');
      }
    }
  } catch (err) {
    console.error(err);
    exit(1);
  }
};

init().then(() => {});
