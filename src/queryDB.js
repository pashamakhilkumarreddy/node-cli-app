import fs from 'fs';
import util from 'util';
import { fileExists } from './dbFileCheck.js';

const queryDB = async (filePath, func) => {
  try {
    console.info('Reading file data');
    let data = null;
    if (!fileExists(filePath)) {
      throw new Error(
        `File does not exist at the requested location ${filePath}`,
      );
    }
    const promisifiedRead = util.promisify(fs.readFile);
    data = await promisifiedRead(filePath, {
      encoding: 'utf-8',
    });
    const parsedData = JSON.parse(data);
    if (func) {
      await func(filePath, parsedData);
    }
    console.info('File Data: ');
    console.table(parsedData);
  } catch (err) {
    throw err;
  }
};

export { queryDB };
