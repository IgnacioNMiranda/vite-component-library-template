import type { Preview } from '@storybook/react'
import '../src/lib/tailwind/theme.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [{ name: 'Light', value: '#F5F4FB' }],
      default: 'Light',
    },
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
