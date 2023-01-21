import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AtButton, AtButtonProps, AT_BUTTON_VARIANT } from '.'
import { objectValuesToControls } from '../../../storybook-utils'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/AtButton',
  component: AtButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    variant: objectValuesToControls(AT_BUTTON_VARIANT),
  },
} as ComponentMeta<typeof AtButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AtButton> = (args: AtButtonProps) => <AtButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  variant: 'PRIMARY',
}

export const Secondary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  label: 'Button',
  variant: 'SECONDARY',
}
