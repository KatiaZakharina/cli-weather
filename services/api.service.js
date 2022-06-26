import axios from 'axios';

class ApiService {
  async getWeather(token, city) {
    const { data } = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: token,
          lang: 'en',
          units: 'metric',
        },
      }
    );

    return data;
  }
}

export default new ApiService();
