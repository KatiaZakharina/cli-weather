import chalk from 'chalk';

class Logger {
  printError(error) {
    console.log(chalk.blue.bgRed.bold(`ERROR: ${error}`));
  }
  printSuccess(message) {
    console.log(chalk.blue.bgRed.bold(message));
  }
  printWarning(message) {
    console.log(chalk.bgYellow(message));
  }
}

export default new Logger();
