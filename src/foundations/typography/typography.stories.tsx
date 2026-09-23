import type { Meta, StoryObj } from '@storybook/react-vite';

import { FontFamilies, TypeScale } from '../tokens/tokens';

const meta = {
  title: '02 Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fuentes: Story = {
  name: 'Familias y pesos',
  render: () => <FontFamilies />,
};

export const Escala: Story = {
  name: 'Escala',
  render: () => <TypeScale />,
};
