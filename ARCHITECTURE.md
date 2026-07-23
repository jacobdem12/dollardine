# DollarDine Architecture

## Project Purpose

**DollarDine** is a student-focused dining dollar tracker that helps university users monitor meal plan spending, manage meal swipes, make budget decisions, and keep meal history in a lightweight browser app.

### Goals
- Track meal plan balance and spending in one place
- Support dining dollars and meal swipes
- Provide quick insights into average spend, safe daily budget, and top locations
- Persist per-user settings and meals across sessions using Firebase
- Support realtime sync and future meal coordination features

## High-Level Architecture

DollarDine is a single-page browser application built with HTML, CSS, and vanilla JavaScript. It integrates Firebase Authentication for auth and Firestore for cloud persistence. The app also maintains in-memory state exposed globally via `window.state` so the UI and debugging tools can inspect the current user session.

### Core Modules

1. **UI / Presentation**
   - File: `index.html`
   - Contains the auth page, setup page, and main dashboard views
   - Uses CSS classes to show/hide views and keep the app a single-page experience
   - Includes authorization controls, setup form, dashboard, meal log, history, and settings

2. **Styling**
   - File: `styles.css`
   - Defines layout, responsive behavior, form styling, cards, buttons, and visualization elements
   - Controls hidden/active page states and consistent theme styling

3. **App Controller**
   - File: `app.js`
   - Primary runtime controller for state, view routing, event binding, and rendering
   - Responsibilities:
     - initialize the app and attach UI event listeners
     - manage auth flow and route between auth/setup/main pages
     - handle meal logging, swipe actions, editing, deletion, and history rendering
     - compute dashboard metrics, spending insights, and top locations
     - coordinate Firestore snapshot listeners for live app state updates
     - persist local state and save user settings

4. **Authentication**
   - File: `auth.js`
   - Uses Firebase Authentication for signup/login/logout
   - Also manages a local user registry in `localStorage` for demo state
   - Functions:
     - `signup(email, password)` creates Firebase accounts and local user records
     - `login(email, password)` signs in with Firebase and caches the current user
     - `logout()` signs out of Firebase and clears local session state
     - helper functions manage stored users, saved app state, and current user lookup

5. **Persistence**
   - File: `storage.js`
   - Provides Firestore helper functions for saving meals and user setup state
   - Functions include `saveMealToCloud()`, `saveUserSetupToCloud()`, and `loadUserAppStateFromCloud()`
   - Manages cloud persistence and couples local state to authenticated user data

6. **Static Data**
   - File: `data.js`
   - Contains school metadata and dining location configurations
   - Provides meal pricing conventions and location sections for each supported school

7. **Utilities**
   - File: `utils.js`
   - Shared helper utilities for formatting currency, dates, and parsing values
   - Includes `formatCurrency()`, `formatDisplayDate()`, `getTodayISO()`, and related helpers

8. **Firebase Configuration**
   - File: `firebase-config.js`
   - Initializes Firebase and exports `auth` and `db`
   - Used by `auth.js`, `storage.js`, and `app.js`

## Runtime Flow

1. App boots and calls `init()` in `app.js`.
2. `initUI()` attaches event listeners and sets the default auth page visible.
3. Firebase `onAuthStateChanged` determines whether a user is signed in.
4. If a user is signed in:
   - the app attaches Firestore realtime listeners for profile and meals
   - state is synchronized from Firestore into `window.state`
   - dashboard and history views are rendered
5. If no user is signed in, the auth page remains active.
6. New users complete onboarding/setup and then begin logging meals.
7. Meal entries are written to Firestore and rendered by the realtime snapshot listener.
8. The app uses the realtime Firestore listener as the source of truth for saved entries, while local state is kept in sync.

## Current Functional Components

- **Authentication flow**
  - Firebase-backed signup/login
  - Client-side auth message feedback
  - Local user registry in `localStorage` for app state caching

- **Setup flow**
  - User selects school, balance, days remaining, and swipes
  - Setup data persists in Firestore under the user profile

- **Meal logging**
  - Supports dollar purchases and swipe-based entries
  - Stores type, location, amount, note, date, and sort key
  - Uses Firestore to persist entries and sync across sessions

- **Dashboard**
  - Calculates total spent, remaining balance, daily average, and recommended safe spend
  - Renders top spending locations

- **History**
  - Displays meal entries chronologically
  - Supports editing and deletion of entries

- **State management**
  - `window.state` exposes app state globally
  - `app.js` updates state entries and app metadata in-memory
  - Firestore snapshot listeners update state in real time

## File Structure

```
DollarDine/
├── index.html             # Single-page UI with auth, setup, dashboard, log, history, and settings
├── app.js                 # Main app controller: state, event handling, rendering, and Firestore sync
├── auth.js                # Firebase auth and local user session management
├── data.js                # Static school and dining location data
├── storage.js             # Firestore persistence helpers for meals and user setup
├── utils.js               # Formatting and date helper utilities
├── styles.css             # Visual styling and responsive layout
├── firebase-config.js     # Firebase initialization for auth and Firestore
├── ARCHITECTURE.md        # Architecture documentation
├── USER_AUTH.md           # Authentication design notes and details
└── TOOLCHAIN.md           # Build/development tooling notes
```

## Technology Stack

- HTML5, CSS3, JavaScript (ES6 modules)
- Firebase Authentication
- Firebase Firestore
- Browser `localStorage`
- Vanilla JavaScript UI with state-driven view toggling

## Roadmap

For the current project plan, see `ROADMAP.md`.
