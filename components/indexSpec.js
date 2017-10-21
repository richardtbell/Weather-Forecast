import React from 'react';
import { Index } from './index';
import { shallow } from 'enzyme';

describe('Index', () => {
  it('has fetch component', () => {
    const index = React.createElement(Index);
    expect(shallow(index).find('Fetch')).to.have.length(1);
  })

  it('has radio buttons for the units', () => {
    const index = React.createElement(Index);
    const metricButton = shallow(index).find('input[value="metric"]').at(0);
    const imperialButton = shallow(index).find('input[value="imperial"]').at(0);
    expect(metricButton.props()).to.have.property('checked', true);
    expect(imperialButton.props()).to.have.property('checked', false);
  })
})
