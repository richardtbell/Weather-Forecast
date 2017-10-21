import React from 'react';
import { ForecastRow, getDay, getTime } from './forecastRow';
import { shallow } from 'enzyme';

describe('ForecastRow', () => {
  let props;
  let forecastRow;

  beforeEach(() => {
    props = {
      item: {
        clouds: {all: 92},
        dt: 1508608800,
        dt_txt: "2017-10-21 18:00:00",
        main: {
          grnd_level: 974.26,
          humidity: 97,
          pressure: 974.26,
          sea_level: 999.01,
          temp: 285.37,
          temp_kf: 2.22,
          temp_max: 285.37,
          temp_min: 283.156
        },
        rain: {'3h': 1.905},
        sys: {pod: "n"},
        weather: [
          {
            description: "light rain",
            icon: "10n",
            id: 500,
            main: "Rain",
          },
        ],
        wind: {
          deg: 117.004,
          speed: 2.91
        }
      }
    }
    forecastRow = React.createElement(ForecastRow, props);
  })

  it('should display the day', () => {
    expect(shallow(forecastRow).find('.day')).to.have.length(1);
    expect(shallow(forecastRow).find('.day').at(0).text()).to.equal('Sat');
  })

  it('should display the time', () => {
    expect(shallow(forecastRow).find('.time')).to.have.length(1);
    expect(shallow(forecastRow).find('.time').at(0).text()).to.equal('18:00');
  })

  it('should display the weather description', () => {
    expect(shallow(forecastRow).find('.weather-type')).to.have.length(1);
    expect(shallow(forecastRow).find('.weather-type').at(0).text()).to.equal('light rain');
  })

  it('should display the weather icon', () => {
    expect(shallow(forecastRow).find('img')).to.have.length(1);
    expect(shallow(forecastRow).find('img').at(0).props()).to.have.property(
      'src', 'http://openweathermap.org/img/w/10n.png'
      );
    expect(shallow(forecastRow).find('img').at(0).props()).to.have.property(
      'alt', 'light rain'
      );
  })

  it('should display the temperature', () => {
    expect(shallow(forecastRow).find('.temp')).to.have.length(1);
    expect(shallow(forecastRow).find('.temp').at(0).text()).to.equal('285°C');
  })
})

describe('getDay', () => {
  it('should handle sunday', () => {
    expect(getDay(1508695200)).to.equal('Sun')
  })

  it('should handle midnight', () => {
    expect(getDay(1508630399)).to.equal('Sat')
    expect(getDay(1508630400)).to.equal('Sun')
  })
})

describe('getTime', () => {
  it('should handle midnight', () => {
    expect(getTime(1508630400)).to.equal('00:00')
  })

  it('should pad single digit times', () => {
    expect(getTime(1508644800)).to.equal('04:00')
  })

  it('should not pad double digit times', () => {
    expect(getTime(1508666400)).to.equal('10:00')
  })
})