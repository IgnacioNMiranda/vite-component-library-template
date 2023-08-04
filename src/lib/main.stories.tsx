import React from 'react'
import { Main } from './main'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Main> = {
  title: 'Form Builder',
  component: Main,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Main> = () => <Main />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
