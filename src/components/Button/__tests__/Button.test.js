import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import { Button } from '../Button';


describe('Button', () => {
  it('should render correctly in "debug" mode', () => {
    const button = renderer.create(<Button label="Primary button" />);

    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onClick();
    // re-rendering
    tree = button.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
