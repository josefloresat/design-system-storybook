import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './button';
import type { ButtonSize, ButtonVariant } from './button';

const meta = {
  title: '03 Componentes/Actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};

export const Link: Story = {
  args: { variant: 'link' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithoutIcons: Story = {
  args: { iconLeft: false, iconRight: false },
};

const SIZES: ButtonSize[] = ['lg', 'md', 'sm', 'xs'];
const VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'link'];
const STATES = [
  { name: 'Enabled', className: undefined, disabled: false },
  { name: 'Pressed', className: 'is-pressed', disabled: false },
  { name: 'Hovered', className: 'is-hovered', disabled: false },
  { name: 'Disabled', className: undefined, disabled: true },
  { name: 'Focused', className: 'is-focused', disabled: false },
];

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <strong style={{ textTransform: 'uppercase' }}>{size}</strong>
          {VARIANTS.map((variant) => (
            <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ width: 96 }}>{variant}</span>
              {STATES.map(({ name, className, disabled }) => (
                <Button
                  key={name}
                  {...args}
                  size={size}
                  variant={variant}
                  className={className}
                  disabled={disabled}
                  aria-label={`${variant} ${size} ${name}`}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
