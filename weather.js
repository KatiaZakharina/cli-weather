#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import commands from './commands/index.js';
import { getWeather } from './commands/getWeather.js';

const initCLI = async () => {
  const args = getArgs(process.argv);

  for (let [key, value] of Object.entries(args)) {
    key in commands ? await commands[key](value) : commands.default(key);
  }

  getWeather();
};
initCLI();
