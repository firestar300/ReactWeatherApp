var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This a little React Weather Application</p>
      <ul>
        <li>
          <Link to="https://facebook.github.io/react/">React</Link>
        </li>
        <li>
          <Link to="https://github.com/firestar300/ReactWeatherApp">React Weather App on Github</Link>
        </li>
        <li>
          <Link to="http://openweathermap.org/">Open Weather Map API</Link>
        </li>
      </ul>
      <p><small>Milan Ricoul &copy; 2017</small></p>
    </div>
  )
}

module.exports = About;
