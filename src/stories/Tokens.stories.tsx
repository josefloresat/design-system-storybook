import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  PrimitiveColors,
  SemanticColorsDark,
  SemanticColorsLight,
  Tokens,
  Typography,
  Units,
} from './Tokens';

const meta = {
  title: 'Foundations/Design Tokens',
  component: Tokens,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Tokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

export const PrimitiveColor: Story = { render: () => <PrimitiveColors /> };

export const SemanticColorLight: Story = { render: () => <SemanticColorsLight /> };

export const SemanticColorDark: Story = { render: () => <SemanticColorsDark /> };

export const TypographyScale: Story = { render: () => <Typography /> };

export const UnitsScale: Story = {
  name: 'Units',
  render: () => <Units />,
};
