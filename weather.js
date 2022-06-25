#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import commands from './commands/index.js';

const initCLI = () => {
  const args = getArgs(process.argv);

  Object.entries(args).forEach(([key, value]) => {
    key in commands ? commands[key](value) : commands.default(key);
  });
};
initCLI();
