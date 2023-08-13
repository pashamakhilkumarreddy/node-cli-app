import fs from 'fs';
import util from 'util';
import { fileExists } from './dbFileCheck.js';

const writeToFile = async (filePath, info) => {
  try {
    if (!filePath || !fileExists(filePath)) return;
    const promisifiedWrite = util.promisify(fs.writeFile);
    await promisifiedWrite(filePath, JSON.stringify(info), {
      encoding: 'utf-8',
    });
    console.info('Successfully saved the data to the file');
  } catch (err) {
    throw err;
  }
};

export { writeToFile };
