# DollarDine Architecture

## Purpose

DollarDine is a mobile-first app for tracking dining dollars, meal swipes, and spending patterns across a semester. The experience is centered around sign-in, setup, logging meals, reviewing history, and updating budget settings from a single-page interface.

## High-level structure

The app is a single-page experience built with HTML, CSS, and vanilla JavaScript. Firebase Auth handles sign-in and sign-out flows, and Firestore stores each user’s profile and meal history. A global window.state object keeps the active session data available to the UI and runtime logic.

## Core modules

- UI shell: [index.html](index.html)
  - Contains the auth, setup, dashboard, log, history, and settings views.
  - Uses view toggling so the app stays in one page while changing context.

- Styling: [styles.css](styles.css)
  - Controls layout, spacing, cards, buttons, and compact mobile styling.
  - Keeps the dashboard and settings experience readable on phones.

- App controller: [app.js](app.js)
  - Owns view switching, event bindings, rendering, and Firestore sync.
  - Handles meal logging, swipe usage, settings updates, history editing, dashboard calculations, and auth-state changes.
  - Persists the user’s school, balance, days remaining, and swipe count when the Settings form is saved.

- Auth layer: [auth.js](auth.js)
  - Wraps Firebase sign-in, sign-up, and sign-out logic.
  - Maintains a lightweight local user registry for fallback/local persistence.

- Persistence layer: [storage.js](storage.js)
  - Saves profile data to Firestore under the signed-in user document.
  - Saves meal entries to the user’s meals collection.
  - Keeps the app aligned with the authenticated user’s cloud data.

- Static data: [data.js](data.js)
  - Contains school names, dining plan metadata, and dining location details.

- Utilities: [utils.js](utils.js)
  - Formats money and dates and provides shared helpers used by the UI.

- Firebase config: [firebase-config.js](firebase-config.js)
  - Initializes Firebase and exposes the auth and Firestore instances used throughout the app.

## Runtime flow

1. The app boots and initializes the main UI.
2. Firebase auth state determines whether a user is signed in.
3. If a user is signed in, Firestore listeners load profile and meal data into state.
4. The dashboard, history, and settings views update from that state.
5. Saving changes in Settings writes the latest budget/profile values back to Firestore and the local user registry, then returns the user to the dashboard.
6. If the user signs out, the app clears the session state and resets visible form fields so a new account starts cleanly.

## Current behavior

- Users can sign up, sign in, and log meals.
- Setup values for school, balance, days remaining, and meal swipes are stored to Firestore.
- The Settings view can update those values and immediately refresh the dashboard.
- The dashboard calculates remaining balance, spending pace, and safe spend guidance.
- History entries can be viewed and edited.
- Logout clears the in-memory state and form values to avoid leaking previous account data into a new session.

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
