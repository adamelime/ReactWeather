var axios = require('axios');

const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=c755c22091a5eaeff5fd2f711b6b1fd9';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${openWeatherMapUrl}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
     },
     function(res) {
       throw new Error('Cannot find city.');   
    });
  }
}
