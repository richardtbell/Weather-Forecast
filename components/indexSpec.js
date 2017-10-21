import React from 'react';
import { Index } from './index';
import { shallow } from 'enzyme';

describe('Index', () => {
  it('renders title', () => {
    const index = React.createElement(Index);
    expect(shallow(index).find('h1')).to.have.length(1);
    expect(shallow(index).find('h1').at(0).text()).to.equal('Weather Forecast!');
  })
})