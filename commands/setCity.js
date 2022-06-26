import logService from '../services/log.service.js';
import storageService from '../services/storage.service.js';

export const setCity = async (city) => {
  try {
    if (!city.length) {
      logService.printError('City is empty');
      return;
    }
    await storageService.saveKeyValue('city', city);
    logService.printSuccess('City saved');
  } catch (error) {
    logService.printError(error.message);
  }
};
