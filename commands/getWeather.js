import chalk from 'chalk';

import apiService from '../services/api.service.js';
import storageService from '../services/storage.service.js';
import logService from '../services/log.service.js';

export const getWeather = async () => {
  const token = await storageService.getKeyValue('token');
  const city = await storageService.getKeyValue('city');

  if (!token) {
    throw new Error('Token not specified, to set it use command -t [API_KEY]');
  }

  if (!city) {
    throw new Error('City not specified, to set it use command -c [CiTY]');
  }

  try {
    const data = await apiService.getWeather(token, city);
    const {
      weather: [{ description, icon }],
      main: { temp, pressure, humidity, feels_like },
      name,
    } = data;

    console.log(`
${chalk.magenta(`Weather in ${name} today:`)}
${apiService.getIconEmoji(icon)} ${temp}°C, ${description}

${chalk.cyanBright(`Feels like: ${feels_like}°C
Humidity: ${humidity}%
Pressure: ${pressure}`)}
    `);
  } catch (error) {
    if (error?.response?.status == 404) {
      logService.printError('City is set incorrectly');
    } else if (error?.response?.status == 401) {
      logService.printError('Token is set incorrectly');
    } else {
      logService.printError(error.message);
    }
  }
};
