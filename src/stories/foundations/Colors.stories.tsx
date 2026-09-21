import type { Meta, StoryObj } from '@storybook/react-vite';

import { PrimitiveColors, SemanticColorsDark, SemanticColorsLight } from '../Tokens';

const meta = {
  title: '02 Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primitivos: Story = {
  render: () => <PrimitiveColors />,
};

export const Semanticos: Story = {
  name: 'Semánticos',
  render: () => (
    <>
      <SemanticColorsLight />
      <SemanticColorsDark />
    </>
  ),
};
