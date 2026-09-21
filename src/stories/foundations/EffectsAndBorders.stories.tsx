import type { Meta, StoryObj } from '@storybook/react-vite';

import { Borders, Shadows } from '../Tokens';

const meta = {
  title: '02 Foundations/Effects & Borders',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShadowsStory: Story = {
  name: 'Shadows',
  render: () => <Shadows />,
};

export const BordersStory: Story = {
  name: 'Borders',
  render: () => <Borders />,
};
