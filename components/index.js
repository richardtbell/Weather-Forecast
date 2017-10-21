import React from 'react';
import Fetch from 'react-fetch'
import PropTypes from 'prop-types';

class ForecastRow extends React.Component{
  render() {
    return (
      <div>
        <h2>{this.props.item.dt_txt}</h2>
        <div className='weather-type'>{this.props.item.weather[0].description}</div>
        <img
          src={'http://openweathermap.org/img/w/' + this.props.item.weather[0].icon + '.png'}
          alt={this.props.item.weather[0].description}/>
        <div className='temp'>{this.props.item.main.temp}</div>
      </div>

    )
  }
}


class Forecast extends React.Component{
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Weather forecast for {this.props.city.name}</h1>
        { this.props.list.map(forecastRow => {
          return <ForecastRow key={forecastRow.dt} item={forecastRow} />
        }) }

      </div>
    )
  }

}

Forecast.propTypes = {
  city: PropTypes.object,
  list: PropTypes.array
};

Forecast.defaultProps = {
  city: { name: ''},
  list: []
};

class Index extends React.Component {

  render() {
    return (
      <Fetch url="http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&appid=3b71a26d714eecf3282be5ac92491fec">
        <Forecast/>
      </Fetch>
    )
  }
}

export {Index, Forecast, ForecastRow}