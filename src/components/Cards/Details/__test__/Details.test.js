import React from 'react';

import { shallow } from 'enzyme';
import { default as CardDetails } from '../Details';


describe('Details', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <CardDetails icon="icon-ic-location-24">
            Bengaluru, Delhi, Hyderabad
      </CardDetails>,
    );
    expect(component).toMatchSnapshot();
  });
});
