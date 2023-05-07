# ⚛️⚡ Vite + React + Typescript Component Library Template

## Features

- ⚛️ [React 18](https://reactjs.org/)
- 📚 [Storybook 7](https://storybook.js.org/) - Components preview
- 🖌️ [Tailwind CSS 3](https://tailwindcss.com/)
- ⏩ [Vite](https://vitejs.dev/) - Run and build the project blazingly fast!
- ⚡ [Vitest](https://vitest.dev/) - Components Unit Testing
- 📐 [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Formatting and Linting
- 🌟 [Typescript](https://www.typescriptlang.org/)
- 🐶 [Husky](https://typicode.github.io/husky) & [Lint Staged](https://www.npmjs.com/package/lint-staged) - Pre-commit Hooks
- ⏰ [Release Please](https://github.com/googleapis/release-please) — Generate the changelog with the release-please workflow
- 👷 [Github Actions](https://github.com/features/actions) — Releasing versions to NPM
- Initial components setup using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Getting Started

1. Create a new repository using this one as template
2. Clone your repo
3. Install dependencies with `pnpm i` (first run `corepack enable` to enable pnpm)
4. Run `pnpm prepare` command to setup [Husky](https://typicode.github.io/husky) pre-commit hooks.

### Main Scripts

Always prepending pnpm:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint:fix`: Applies linting based on the rules defined in **.eslintrc.js**.
- `format:prettier`: Formats files using the prettier rules defined in **.prettierrc**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.

### Publishing the Library to NPM

**Using Github as the hosting service:**

1. Check the `Allow GitHub Actions to create and approve pull requests` box under the Settings>Code and automation>Actions>General repository configuration. This will allow the release-please workflow to create a PR increasing the version.
2. Create a repository secret called `NPM_TOKEN` under Settings>Security>Secrets and variables>Actions for the github action to be able to publish the library to npm.

With these 2 requirements, Pull Requests raised by release-please will have enough permissions. For more details, check the [official documentation](https://github.com/google-github-actions/release-please-action).

### Versioning

Following [Conventional Commits](https://www.conventionalcommits.org/).

**release-please** will bump a patch version if new commits are only fixes.

It will bump a minor version if new commits include a _feat_.

`feat!`, `fix!`, `refactor!`, etc., which represent a breaking change, will result in a major version.

In order to change the version manually (i.e. force it), a new commit has to be created including `Release-As: X.X.X` as the description.
Example: `git commit -m "chore: v1.2.0" -m "Release-As: 1.2.0"`

## Using the library in a React frontend app

Install the library running `pnpm i <your-library>`.

To import the styles the library needs:

```js
/* _app.tsx */
import '<your-library>/dist/style.css'
// More imports and your App component ...
```

To import library components:

```js
/* pages/index.tsx */
import { AtButton } from '<your-library>'
// More imports and your Page component...
```

## Author

[Ignacio Miranda Figueroa](https://www.linkedin.com/in/ignacio-miranda-figueroa/)

## License

[MIT](LICENSE)
