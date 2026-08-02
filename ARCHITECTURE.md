# DollarDine Architecture

## Purpose

DollarDine is a lightweight mobile-first app for tracking dining dollars, meal swipes, and spending patterns across a semester. It keeps the experience simple: sign in, complete setup, log meals, and review budget insights from one screen flow.

## High-level structure

The app is a single-page experience built with HTML, CSS, and vanilla JavaScript. Firebase handles authentication and Firestore stores per-user profile data and meal history. A global `window.state` object keeps the active session data available to the UI and debugging tools.

## Core modules

- UI shell: [index.html](index.html)
  - Contains auth, setup, dashboard, log, history, and settings views.
  - Uses simple view toggling so the whole app stays in one page.

- Styling: [styles.css](styles.css)
  - Controls layout, spacing, cards, buttons, and compact mobile behavior.
  - The current focus is keeping the app readable without requiring excessive scrolling.

- App controller: [app.js](app.js)
  - Owns view switching, event binding, rendering, and Firestore sync.
  - Handles meal logging, swipe usage, history editing, dashboard calculations, and auth state changes.
  - Also resets UI and state when the user logs out so a new account starts cleanly.

- Auth layer: [auth.js](auth.js)
  - Wraps Firebase sign-in, sign-up, and sign-out logic.
  - Stores a lightweight local user registry for fallback state.

- Persistence layer: [storage.js](storage.js)
  - Saves meals and setup/profile data to Firestore.
  - Keeps the app aligned with the authenticated user’s cloud data.

- Static data: [data.js](data.js)
  - Contains school names, meal plan metadata, and dining location details.

- Utilities: [utils.js](utils.js)
  - Formats money and dates and provides shared helpers used by the UI.

- Firebase config: [firebase-config.js](firebase-config.js)
  - Initializes Firebase and exposes the auth and Firestore instances used throughout the app.

## Runtime flow

1. The app boots and initializes the main UI.
2. Firebase auth state determines whether a user is signed in.
3. If a user is signed in, Firestore listeners load profile and meal data into state.
4. The dashboard, history, and settings views update from that state.
5. If the user signs out, the app clears the session state and resets the visible form fields so a new account starts fresh.

## Current behavior

- Users can sign up, sign in, and log meals.
- Setup values for school, balance, days remaining, and meal swipes are stored to Firestore.
- The dashboard calculates remaining balance, spending pace, and safe spend guidance.
- History entries can be viewed and edited.
- Logout now clears the in-memory state and form values to avoid leaking previous account data into a new session.

## Project files

- [index.html](index.html)
- [app.js](app.js)
- [auth.js](auth.js)
- [storage.js](storage.js)
- [data.js](data.js)
- [utils.js](utils.js)
- [styles.css](styles.css)
- [firebase-config.js](firebase-config.js)

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the current plan.
