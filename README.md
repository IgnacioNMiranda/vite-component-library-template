# vite-component-library-template

Starter project to build a component library using Vite as the build tool. It also setup some handy features like:

- Components preview using [Storybook](https://storybook.js.org/blog/storybook-for-vite/)
- UI Testing with [Vitest](https://vitest.dev/), the vite-native unit test framework.
- Library bundling and publish to npm registry using Github Actions.

The bundling was possible thanks to the Google [Release Please](https://github.com/googleapis/release-please) package using the Github Action approach.

## Getting Started

1. Install dependencies with `yarn`
2. Run `yarn prepare` command to install [Husky](https://typicode.github.io/husky).
3. That's pretty much it.

## Main Scripts

Always prepending yarn:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint:fix`: Applies linting to the project based on the rules defined in **.eslintrc.js**.
- `format:prettier`: Formats files using the prettier rules defined in **.prettierrc**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.

## Publishing the Library to NPM

- Instructions using Github as the hosting service.

1. Check the `Allow GitHub Actions to create and approve pull requests` box under the Settings>Code and automation>Actions>General repository configuration.
2. Create a repository secret called `NPM_TOKEN` under Settings>Security>Secrets and variables>Actions, this will allow the github actions to publish the library to npm.

With these 2 requirements, Pull Requests raised by release-please will have enough permissions. For more details, please check the [official documentation](https://github.com/google-github-actions/release-please-action).

## Author

[Ignacio Miranda Figueroa](https://www.linkedin.com/in/ignacio-miranda-figueroa/)
