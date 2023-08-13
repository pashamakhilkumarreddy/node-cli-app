import fs from 'fs';
import { exit } from 'process';

const fileExists = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.info("The required file doesn't exist");
      exit(1);
    }
    console.info('File exists');
    return true;
  } catch (err) {
    throw err;
  }
};

export { fileExists };
