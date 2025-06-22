# ⚛️⚡ Vite + React + Typescript Component Library Template

## Features

- ♥️ [Node 22](https://nodejs.org/en/download)
- ⚛️ [React 19](https://reactjs.org/)
- 📚 [Storybook 9](https://storybook.js.org/) - Components preview
- 🖌️ [Tailwind CSS 4](https://tailwindcss.com/)
- ⏩ [Vite](https://vitejs.dev/) - Run and build the project blazingly fast!
- ⚡ [Vitest](https://vitest.dev/) - Components Unit Testing
- 📐 [Biome](https://biomejs.dev/) - Formatting and Linting
- 🌟 [Typescript](https://www.typescriptlang.org/)
- 🐶 [Husky](https://typicode.github.io/husky) & [Lint Staged](https://www.npmjs.com/package/lint-staged) - Pre-commit Hooks
- ⏰ [Release Please](https://github.com/googleapis/release-please) — Generate the changelog with the release-please workflow
- 👷 [Github Actions](https://github.com/features/actions) — Releasing versions to NPM
- Initial components setup using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Getting Started

1. Create a new repository using this one as template
2. Clone your repo
3. Install dependencies with `pnpm i` (first run `corepack enable` to enable pnpm)

## Main Scripts

Always prepending pnpm:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint`: Applies linting based on the rules defined in **biome.json**.
- `format`: Formats files using the biome rules defined in **biome.json**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.

## Blog Post

I created a post explaning how to set up this library and publish it to a package registry! You can read it [here](https://igna.hashnode.dev/vite-react-typescript-component-library-template-setup-explanation).

## Author

[Ignacio Miranda Figueroa](https://www.linkedin.com/in/ignacio-miranda-figueroa/)

## License

[MIT](LICENSE)
