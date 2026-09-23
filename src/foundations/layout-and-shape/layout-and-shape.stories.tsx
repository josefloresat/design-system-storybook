import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid, IconSize, Radius, Spacing } from '../tokens/tokens';

const meta = {
  title: '02 Foundations/Layout & Shape',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpacingStory: Story = {
  name: 'Spacing',
  render: () => <Spacing />,
};

export const BorderRadius: Story = {
  name: 'Border Radius',
  render: () => <Radius />,
};

export const IconSizeStory: Story = {
  name: 'Icon Size',
  render: () => <IconSize />,
};

export const GridStory: Story = {
  name: 'Grid',
  render: () => <Grid />,
};
