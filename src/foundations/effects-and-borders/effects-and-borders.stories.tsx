import type { Meta, StoryObj } from '@storybook/react-vite';

import { Borders, Shadows } from '../tokens/tokens';
import { foundationsParameters } from '../tokens/foundations-parameters';

const meta = {
  title: '02 Foundations/Effects & Borders',
  parameters: foundationsParameters,
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
