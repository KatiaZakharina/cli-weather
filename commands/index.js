import { getHelp } from './getHelp.js';
import { setCity } from './setCity.js';
import { setToken } from './setToken.js';

export default {
  h: getHelp,
  c: setCity,
  t: setToken,
  default: (key) => console.log(`Command ${key} did't found`),
};
