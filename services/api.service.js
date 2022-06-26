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

  getIconEmoji(code) {
    const key = code.slice(0, -1);
    const dictionary = {
      '01': '☀',
      '02': '🌥',
      '03': '☁',
      '04': '☁',
      '09': '🌧',
      10: '🌦',
      11: '🌩',
      13: '🌨',
      50: '❄',
      default: '❓',
    };
    return key in dictionary ? dictionary[key] : dictionary.default;
  }
}

export default new ApiService();
