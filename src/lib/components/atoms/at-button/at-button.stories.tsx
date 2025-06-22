import type { Meta, StoryObj } from '@storybook/react-vite'
import { AT_BUTTON_VARIANT, AtButton } from '.'
import { objectValuesToControls } from '../../../storybook-utils'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Button',
  component: AtButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    variant: { options: objectValuesToControls(AT_BUTTON_VARIANT).options },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof AtButton>

export default meta
type Story = StoryObj<typeof meta>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'PRIMARY',
    onClick: () => alert('clicking primary'),
  },
}

export const Secondary: Story = {
args: {
  label: 'Button',
  variant: 'SECONDARY',
}}

export const Tertiary: Story = {
  args: {
    label: 'Button',
    variant: 'TERTIARY',
  }
}

export const Disabled: Story = {
args :{
  label: 'Button',
  isDisabled: true,
}
}
