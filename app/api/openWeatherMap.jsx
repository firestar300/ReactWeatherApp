var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=27acef71b656c5e07f58b60c7c517f76';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.cod && res.message) {
        throw new Error(res.message);
      } else {
        return res.data.main.temp
      }
    }, function(err) {
      throw new Error('Enable to fetch weather for that location.');
    });
  }
}
