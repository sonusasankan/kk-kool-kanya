import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';


const req = require.context('../src', true, /\.stories\.js$/)

// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Kool Kanya',
  
});

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);