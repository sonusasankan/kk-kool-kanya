import React from 'react';
import { shallow } from 'enzyme';

import { default as CardFavButton } from '../FavButton';

import '../../../../assets/icons/style.css';

describe('Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CardFavButton top right />);
    expect(component).toMatchSnapshot();
  });
});
