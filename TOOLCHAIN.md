# DollarDine Toolchain

## Core stack
- Vite for local development and production builds
- Vanilla HTML, CSS, and JavaScript for the UI and app logic
- Firebase Auth and Firestore for sign-in and persistent user data
- Capacitor for wrapping the app for Android

## Development tools
- Browser with DevTools
  - Chrome, Edge, or Firefox
  - Use Console, Elements, and Network panels for debugging
- VS Code for editing and local development

## Package management
- npm
  - Install dependencies and run the app scripts

## Recommended commands
- Start the dev server:
  - `npm run dev`
- Build for production:
  - `npm run build`
- Run the Android app locally after building:
  - `npx cap run android`

## Notes
- Keep UI markup, styling, and app behavior separated across the HTML, CSS, and JavaScript files.
- Use version control to review each functional change.
- Firestore is the main persistence layer for profile and meal data, while the local user registry remains available for lightweight local state fallback.
