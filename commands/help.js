import description from './description.js';
import logService from '../services/log.service.js';

const getAllCommands = () => {
  logService.printWarning(
    '\nThese are common CLI Weather commands used in various situations:\n'
  );
  for (const key in description) {
    const value = description[key];
    console.log(`-${key} : ${value}`);
  }
};

const notFound = (key) => {
  console.log(logService.printError(`Command ${key} did't found`));
  console.log('You can see all commands using weather -h');
};

export const help = (command) => {
  if (command === true) {
    getAllCommands();
    return;
  }

  command in description
    ? console.log(description[command])
    : notFound(command);
};
