import React from 'react';
import Fetch from 'react-fetch'
import { Forecast } from './forecast'

const units = {
  metric: {
    symbol: '°C',
    conversion: function(kelvin) {
      return kelvin - 273.15
    }
  },
  imperial: {
    symbol: '°F',
    conversion: function(kelvin) {
      return (kelvin * 9 / 5) - 459.67
    }
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { units: 'metric' };
  }

  handleChange(e) {
    this.setState({
      units: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <div className='unit-selector'>
          <label><input type="radio" name="site_name" value='metric'
                    checked={this.state.units === 'metric'}
                    onChange={this.handleChange.bind(this)} />Celsius</label>
          <label><input
                    type="radio" name="address" value='imperial'
                    checked={this.state.units === 'imperial'}
                    onChange={this.handleChange.bind(this)} />Fahrenheit</label>
        </div>
        <Fetch url='http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&appid=3b71a26d714eecf3282be5ac92491fec'>
          <Forecast units={units[this.state.units]}/>
        </Fetch>
      </div>
    )
  }
}

export { Index }