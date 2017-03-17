var React = require('react');

var WeatherMessage = ({location, temp}) => {

  return(
    <p>À {location}, il fait {temp}°C</p>
  );
};

module.exports = WeatherMessage;
