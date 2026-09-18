import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Toast } from './Toast';

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['information', 'success', 'warning', 'error'],
    },
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Information: Story = {
  args: { state: 'information' },
};

export const Success: Story = {
  args: { state: 'success' },
};

export const Warning: Story = {
  args: { state: 'warning' },
};

export const ErrorState: Story = {
  name: 'Error',
  args: { state: 'error' },
};

export const WithoutIcon: Story = {
  args: { showIcon: false },
};

export const WithoutClose: Story = {
  args: { showClose: false },
};

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Toast {...args} state="information" />
      <Toast {...args} state="success" />
      <Toast {...args} state="warning" />
      <Toast {...args} state="error" />
    </div>
  ),
};
