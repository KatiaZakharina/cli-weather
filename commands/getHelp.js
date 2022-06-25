import description from './description.js';
import logService from '../services/log.service.js';

const getAllCommands = () => {
  logService.printInfo(
    '\nThese are common CLI Weather commands used in various situations:'
  );
  for (const key in description) {
    const value = description[key];
    console.log(`-${key} : ${value}`);
  }
  console.log('\n');
};

const notFound = (key) => {
  console.log(logService.printError(`Command ${key} did't found`));
  console.log('You can see all commands using weather -h');
};

export const getHelp = (command) => {
  if (command === true) {
    getAllCommands();
    return;
  }

  command in description
    ? console.log(description[command])
    : notFound(command);
};
