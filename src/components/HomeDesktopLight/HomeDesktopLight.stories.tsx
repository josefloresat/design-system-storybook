import type { Meta, StoryObj } from '@storybook/react-vite';

import { HomeDesktopLight } from './HomeDesktopLight';

const meta = {
  title: '04 Páginas/HomeDesktopLight',
  component: HomeDesktopLight,
  // Hidden from the sidebar for now; remove this tag to show it again.
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomeDesktopLight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
