import React from 'react';
import { Index, Forecast, ForecastRow } from './index';
import { shallow } from 'enzyme';

describe('Index', () => {
  it('has fetch component', () => {
    const index = React.createElement(Index);
    expect(shallow(index).find('Fetch')).to.have.length(1);
  })
})

describe('Forecast', () => {
  it('renders title', () => {
    const props = {city: {name: 'fake city'}};
    const forecast = React.createElement(Forecast, props);
    expect(shallow(forecast).find('h1')).to.have.length(1);
    expect(shallow(forecast).find('h1').at(0).text()).to.equal('Weather forecast for fake city');
  })

  it('displays forecast rows', () => {
    const props = {
      list: [
        {dt_txt: '2017-10-21 18:00:00'},
        {dt_txt: '2017-10-22 18:00:00'}
      ]
    }
    const forecast = React.createElement(Forecast, props);
    expect(shallow(forecast).find('ForecastRow')).to.have.length(2);
    expect(shallow(forecast).find('ForecastRow').at(0).props().item).to.equal(props.list[0]);
    expect(shallow(forecast).find('ForecastRow').at(1).props().item).to.equal(props.list[1]);
  })
})

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

  it('should display the date', () => {
    expect(shallow(forecastRow).find('h2')).to.have.length(1);
    expect(shallow(forecastRow).find('h2').at(0).text()).to.equal('2017-10-21 18:00:00');
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
    expect(shallow(forecastRow).find('.temp').at(0).text()).to.equal('285.37');
  })
})