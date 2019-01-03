import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import {
  withKnobs, text, boolean, number,
} from '@storybook/addon-knobs';

import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Normal', () => (
    <Select
      className={text('className', 'myClass')}
      options={text('options', options)}
    />
  ))
  .add('Multi select', () => (
    <Select
      isMulti
      className={text('className', 'myClass')}
      options={text('options', options)}
    />
  ));
