import React from 'react';
import { shallow } from 'enzyme';

import { default as CardTitle } from '../Title';

// import Logo from '../assets/images/godrej.png';

import '../../../../assets/icons/style.css';

describe('Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <CardTitle
        logo="https://loremflickr.com/260/220"
        rating="4.2"
      >
Godrej Consumer Products Ltd
      </CardTitle>,
    );
    expect(component).toMatchSnapshot();
  });
});
