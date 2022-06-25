import { help } from './help.js';

export default {
  h: help,
  default: (key) => console.log(`Command ${key} did't found`),
};
