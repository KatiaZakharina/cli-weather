import { getHelp } from './getHelp.js';
import { setCity } from './setCity.js';
import { setToken } from './setToken.js';
import { getWeather } from './getWeather.js';

export default {
  h: getHelp,
  c: setCity,
  t: setToken,
  w: getWeather,
  default: (key) => console.log(`Command ${key} did't found`),
};
