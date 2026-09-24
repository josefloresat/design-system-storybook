import React from 'react';
import { addons, types } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

import { ThemeSwitch } from './theme-switch';
import { themeLabels, themeParameterKey } from './themes';

const theme = create({
  base: 'light',
  brandTitle: 'Design System Template',
  fontBase: '"Rubik", sans-serif',
  colorPrimary: '#fb3333',
  colorSecondary: '#215fd4',
  appBg: '#f6f7fb',
  appContentBg: '#ffffff',
  appBorderColor: '#e1e4ee',
  barBg: '#ffffff',
});

const addonId = 'sportbook/theme-switch';

addons.register(addonId, () => {
  addons.add(`${addonId}/tool`, {
    type: types.TOOL,
    title: themeLabels.switch,
    paramKey: themeParameterKey,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => <ThemeSwitch />,
  });
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
