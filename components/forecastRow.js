import React from 'react';

function getDay(datetime) {
  const date = new Date(datetime * 1000)
  const offsetSeconds = date.getTimezoneOffset() * 60
  const tzdate = new Date((datetime + offsetSeconds) * 1000)
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][tzdate.getDay()]
}

function getTime (datetime) {
  const date = new Date(datetime * 1000)
  const offsetHours = date.getTimezoneOffset() / 60
  let hours = date.getHours() > 0 ? date.getHours() + offsetHours : 23
  hours = hours < 10 ? '0' + hours : hours
  return hours + ':00'
}

class ForecastRow extends React.Component{


  render() {
    const datetime = this.props.item.dt;
    return (
      <li className={getDay(datetime).toLowerCase()}>
        <h2 className='day'>{getDay(datetime)}</h2>
        <h4 className='time'>{getTime(datetime)}</h4>
        <img
          src={'http://openweathermap.org/img/w/' + this.props.item.weather[0].icon + '.png'}
          alt={this.props.item.weather[0].description}/>
        <div className='weather-type'>{this.props.item.weather[0].description}</div>
        <div className='temp'>{Math.round(this.props.item.main.temp) + '°C'}</div>
      </li>

    )
  }
}

export {ForecastRow, getDay, getTime}