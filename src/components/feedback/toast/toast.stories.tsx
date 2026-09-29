import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Toast } from './toast';
import type { ToastVariant } from './toast';
import crestMci from './assets/images/crest-mci.png';

const copy = {
  title: 'Título del mensaje',
  description: 'Texto para explicar qué acción ha tomado el usuario.',
  crestAlt: 'Escudo del club',
};

const meta = {
  title: '03 Componentes/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 327 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'club'],
    },
    progress: {
      control: { type: 'range', min: 0, max: 100 },
    },
  },
  args: {
    title: copy.title,
    description: copy.description,
    progress: 46,
    onClose: fn(),
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default' },
};

export const Club: Story = {
  args: { variant: 'club', crestSrc: crestMci, crestAlt: copy.crestAlt },
};

export const WithoutDescription: Story = {
  args: { description: undefined },
};

const VARIANTS: { variant: ToastVariant; crestSrc?: string }[] = [
  { variant: 'default' },
  { variant: 'club', crestSrc: crestMci },
];

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {VARIANTS.map(({ variant, crestSrc }) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Toast {...args} variant={variant} crestSrc={crestSrc} crestAlt={copy.crestAlt} />
          <Toast
            {...args}
            variant={variant}
            crestSrc={crestSrc}
            crestAlt={copy.crestAlt}
            description={undefined}
          />
        </div>
      ))}
    </div>
  ),
};
