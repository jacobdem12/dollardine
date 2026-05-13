# Dining Dollars Tracker Architecture

## Architecture Summary

### 1. Presentation Layer
- `index.html`
  - Main page structure and layout
  - Holds content sections for setup, dashboard, log, history, and settings
  - Loads CSS and JS modules

### 2. Styling Layer
- `styles.css`
  - Theme variables and color palette
  - Component styling for forms, buttons, cards, tables, and views
  - Responsive layout support for the app sections

### 3. Data Layer
- `data.js`
  - School metadata and dining location pricing
  - Central source of static configuration for school branding and menu sections

### 4. Application Logic
- `app.js`
  - Application state management
  - View switching logic for dashboard, log, history, and settings
  - Input handling for meal entries, swipe usage, and settings updates
  - Dashboard calculations and summary rendering
  - History table generation and entry deletion

### 5. Persistence Layer
- `storage.js`
  - `loadState()` reads app state from `localStorage`
  - `saveState()` writes state to `localStorage`
  - `resetState()` clears persisted state

### 6. Utility Layer
- `utils.js`
  - Shared helper functions
  - Currency formatting, date formatting, and current date retrieval
  - Keeps common logic reusable and isolated

## File Breakdown
- `index.html`
- `styles.css`
- `data.js`
- `utils.js`
- `storage.js`
- `app.js`

## Recommended Tasks
1. Separate the original HTML into modular files.
2. Build data and storage modules.
3. Move UI logic into `app.js`.
4. Validate the setup, log, history, and settings flows.
5. Run the app on a local server.
6. Add linting and formatting scripts if desired.
