import chalk from 'chalk';

class LogService {
  printError(error) {
    console.log(chalk.blue.bgRed.bold('ERROR:') + ' ' + error);
  }
  printWarning(message) {
    console.log(chalk.bgMagentaBright('WARNING:') + ' ' + message);
  }
  printSuccess(message) {
    console.log(chalk.blue.bgGreenBright.bold('SUCCESS:') + ' ' + message);
  }
  printInfo(message) {
    console.log(chalk.yellow(` ${message} `));
  }
}

export default new LogService();
