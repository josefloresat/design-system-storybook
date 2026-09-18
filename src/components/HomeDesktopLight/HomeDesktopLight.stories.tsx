import type { Meta, StoryObj } from '@storybook/react-vite';

import { HomeDesktopLight } from './HomeDesktopLight';

const meta = {
  title: 'Pages/HomeDesktopLight',
  component: HomeDesktopLight,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomeDesktopLight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
