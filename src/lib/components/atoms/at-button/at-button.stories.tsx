import type { Meta } from '@storybook/react'
import type { StoryFn } from '@storybook/react'
import { AT_BUTTON_VARIANT, AtButton, type AtButtonProps } from '.'
import { objectValuesToControls } from '../../../storybook-utils'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AtButton> = {
  title: 'Atoms/Button',
  component: AtButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    variant: objectValuesToControls(AT_BUTTON_VARIANT),
    onClick: { action: 'clicked' },
  },
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AtButton> = (args: AtButtonProps) => <AtButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  variant: 'PRIMARY',
  onClick: () => alert('clicking primary'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  variant: 'SECONDARY',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  label: 'Button',
  variant: 'TERTIARY',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  isDisabled: true,
}
