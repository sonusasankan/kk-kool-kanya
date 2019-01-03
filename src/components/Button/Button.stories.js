import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';
import { FiArrowRight } from 'react-icons/fi';
import { withNotes } from '../../docs-addon';

import { Button } from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('Primary', () => (
    <Button
      label={text('label', 'Primary button')}
      onClick={action('clicked')}
    />
  ), { notes: JSON.stringify(Button.__docgenInfo, null, 10) })
  .add('Curved', () => (
    <Button
      styleName="curved"
      label={text('label', 'Curved button')}
      onClick={action('clicked')}
    />
  ), { notes: JSON.stringify(Button.__docgenInfo, null, 10) })
  .add('Secondary', () => (
    <Button
      primary={false}
      hasBorder
      label={text('label', 'Secondary button')}
    />
  ))
  .add('Has Icon', () => (
    <Button
      primary={false}
      label={text('label', 'View all')}
      icon={<FiArrowRight className="icon" />}
    />
  ));
