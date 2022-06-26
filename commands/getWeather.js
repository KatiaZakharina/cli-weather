import apiService from '../services/api.service.js';
import storageService from '../services/storage.service.js';

export const getWeather = async () => {
  const token = await storageService.getKeyValue('token');
  const city = await storageService.getKeyValue('city');

  if (!token) {
    throw new Error(
      'Token not specified, to set it use command -t [API_KEY]'
    );
  }

  if (!city) {
    throw new Error(
      'City not specified, to set it use command -c [CiTY]'
    );
  }

  const data = await apiService.getWeather(token, city);
  console.log(data);
};
