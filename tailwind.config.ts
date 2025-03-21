import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#E7E3F6',
          '100': '#C2B8E7',
          '200': '#9D8DD9',
          '300': '#7861CA',
          '400': '#5336BC',
          '500': '#2E0BAD',
          '600': '#1B0E66',
          '700': '#160551',
          '800': '#0D0333',
          '900': '#050114',
        },
        secondary: {
          '50': '#F0F0FE',
          '100': '#D8D9FC',
          '200': '#C0C2FB',
          '300': '#A8ACF9',
          '400': '#9195F8',
          '500': '#797EF6',
          '600': '#6468CA',
          '700': '#4E519F',
          '800': '#393B73',
          '900': '#232548',
        },
        tertiary: {
          '50': '#F6F7FF',
          '100': '#E7EAFF',
          '200': '#D9DEFF',
          '300': '#CBD1FF',
          '400': '#AEB8FF',
          '500': '#8F97D2',
          '600': '#7077A5',
          '700': '#525678',
          '800': '#33364A',
          '900': '#14151D',
        },
        'brand-coral-pink': {
          '50': '#FEFAF9',
          '100': '#FEF3F3',
          '200': '#FDE0E0',
          '300': '#FBCDCD',
          '400': '#F9B9B9',
          '500': '#F8A8A7',
          '600': '#F79594',
          '700': '#CB7B7A',
          '800': '#A06060',
          '900': '#482C2B',
        },
        'brand-sea-green': {
          '50': '#E2F4EE',
          '100': '#B5E4D4',
          '200': '#87D4BA',
          '300': '#5AC4A0',
          '400': '#2DB386',
          '500': '#00A36C',
          '600': '#008659',
          '700': '#004C33',
          '800': '#003020',
          '900': '#00130C',
        },
        alert: {
          success: '#00A36C',
          warning: '#FFC107',
          error: '#E63946',
        },
        base: {
          black: '#000000',
          'dark-gray': '#666D80',
          'light-gray': '#F3F5F8',
          white: '#FFFFFF',
        },
        solo: {
          subtext: '#8680A7',
          background: '#F5F4FB',
        },
      },
      screens: {
        '3xl': '1600px',
      },
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
