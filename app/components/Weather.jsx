var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location)
    .then(function(temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);

      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    // Cette fonction s'execute si une propriété est changée par React
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);

      window.location.hash = '#/';
    }
  },
  render: function() {
    var {isLoading, errorMessage, location, temp} = this.state;

    function renderErrorMessage() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderErrorMessage()}
      </div>
    );
  }
});

module.exports = Weather;
