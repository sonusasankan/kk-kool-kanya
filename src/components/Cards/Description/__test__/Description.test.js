import React from 'react';

import { shallow } from 'enzyme';
import { default as CardDescription } from '../description';


describe('Description', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <CardDescription readMore="https://netbramha.com/">
            this is a long string along with readmore link to limit number
      </CardDescription>,
    );
    expect(component).toMatchSnapshot();
  });
});
