// Even though we're using tailwind with vite for the library, Storybook needs this file (postcss.config.js) in order for styles to work.
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
