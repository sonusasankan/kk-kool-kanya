import React from 'react';
import { shallow } from 'enzyme';

import { default as CardImage } from '../Image';

import '../../../../assets/icons/style.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 260px;
`;

describe('Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Wrapper>
        <CardImage src="https://loremflickr.com/260/220" alt="Alternate text for image" />
      </Wrapper>,
    );
    expect(component).toMatchSnapshot();
  });
});
