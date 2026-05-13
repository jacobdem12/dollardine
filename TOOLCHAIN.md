# Dining Dollars Tracker Toolchain

## Development Tools
- Browser with DevTools
  - Chrome, Edge, or Firefox
  - Use Console, Elements, and Network panels
- Local development server
  - `Live Server` VS Code extension
  - `python -m http.server`
  - `npx serve`

## Version Control
- `git`
  - Track changes and create commits for refactor stages

## Formatting and Linting
- `Prettier` for HTML/CSS/JS formatting
- `ESLint` for JavaScript quality checks
- `stylelint` for CSS linting

## Package Management
- `npm` or `pnpm`
  - Manage dev dependencies for linting and formatting tools

## Recommended Commands
- Start a local server:
  - `python -m http.server`
  - `npx serve .`
- Format code:
  - `npx prettier --write .`
- Lint code:
  - `npx eslint .`

## Notes
- Keep style and logic separate by using dedicated CSS and JS modules.
- Use version control to commit each refactor step.
- Add a `package.json` only if you want reusable scripts for linting and formatting.
