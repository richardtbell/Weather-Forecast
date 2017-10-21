import React from 'react';
import Fetch from 'react-fetch'
import { Forecast } from './forecast'

class Index extends React.Component {

  render() {
    return (
      <Fetch url="http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&units=metric&appid=3b71a26d714eecf3282be5ac92491fec">
        <Forecast/>
      </Fetch>
    )
  }
}

export { Index }