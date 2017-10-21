import React from 'react';
import { Forecast } from './forecast';
import { shallow } from 'enzyme';

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
