import React from 'react';
import { Index } from './index';
import { shallow } from 'enzyme';

describe('Index', () => {
  it('has fetch component', () => {
    const index = React.createElement(Index);
    expect(shallow(index).find('Fetch')).to.have.length(1);
  })
})
