import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

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

addons.setConfig({
  theme,
  sidebar: {
    // Show the numbered top-level groups (01 Introducción, 02 Foundations…) as section headers.
    showRoots: true,
  },
});
