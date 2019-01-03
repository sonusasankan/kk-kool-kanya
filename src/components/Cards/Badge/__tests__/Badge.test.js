import React from 'react';

import { shallow } from 'enzyme';
import { default as CardBadge } from '../Badge';


describe('Badge', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CardBadge numberOfBadges="3" />);
    expect(component).toMatchSnapshot();
  });
});
