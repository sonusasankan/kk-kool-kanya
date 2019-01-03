import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import {
  withKnobs, text, boolean, number,
} from '@storybook/addon-knobs';

import Input from "../Input";

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Normal', () => (
    <Input
      label={text('label', 'Type here')}
      onChange={action('change')}
      className={text('className', 'input-primary')}
    />
  ))
  .add('Block-level', () => (
    <Input
      label={text('label', 'Type here')}
      onChange={action('change')}
      className={text('className', 'input-primary input-primary--block')}
    />
  ));
