import { queryDB } from './queryDB.js';

const retrieveDataFromDB = async (filePath) => {
  try {
    await queryDB(filePath);
    console.info('Successfully retrieved all data!!!');
  } catch (err) {
    throw err;
  }
};

export { retrieveDataFromDB };
