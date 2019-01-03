import React from 'react';
import addons from '@kadira/storybook-addons';

import DocPanel from './DocPanel';

import {ADDON_ID, PANEL_ID} from './constants';

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Docs',
    render: () => {
      return <DocPanel channel={channel} api={api} />;
    },
  });
});