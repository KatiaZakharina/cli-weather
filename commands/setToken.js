import logService from '../services/log.service.js';
import storageService from '../services/storage.service.js';

export const setToken = async (token) => {
  try {
    await storageService.saveKeyValue('token', token);
    logService.printSuccess('Token saved');
  } catch (error) {
    logService.printError(error.message);
  }
};
