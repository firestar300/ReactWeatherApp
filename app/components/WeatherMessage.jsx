var React = require('react');

var WeatherMessage = ({location, temp}) => {

  return(
    <h3 className="text-center">À {location}, il fait {temp}°C</h3>
  );
};

module.exports = WeatherMessage;
