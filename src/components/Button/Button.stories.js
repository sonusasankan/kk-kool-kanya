import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { FiArrowRight } from 'react-icons/fi';
import { withNotes } from '../../docs-addon';

import { Button } from './Button';

storiesOf('Button', module)
  .addDecorator(story => <div className="m-4">{story()}</div>)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('Primary', () => (
    <Button
      label={text('label', 'Primary button')}
      click={action('clicked')}
      primary={boolean('primary', true)}
    />
  ), { notes: JSON.stringify(Button.__docgenInfo, null, 10) })
  .add('Primary Curved', () => (
    <Button
      styleName={text('class', 'curved')}
      label={text('label', 'Curved button')}
      hasBorder={boolean('hasBorder', true)}
      onClick={action('clicked')}
    />
  ), { notes: JSON.stringify(Button.__docgenInfo, null, 10) })
  .add('Secondary Curved', () => (
    <Button
      primary={false}
      styleName={text('class', 'curved')}
      hasBorder={boolean('hasBorder', true)}
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
