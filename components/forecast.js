import React from 'react';
import { ForecastRow } from './forecastRow'
import PropTypes from 'prop-types';

class Forecast extends React.Component{
  render() {
    return (
      <div>
        <h1>Weather forecast for {this.props.city.name}</h1>
        <ul>
          { this.props.list.map(forecastRow => {
            return <ForecastRow key={forecastRow.dt} item={forecastRow} />
          }) }
        </ul>

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

export {Forecast}