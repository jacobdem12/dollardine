# DollarDine Architecture

## Project Purpose

**DollarDine** is a student-focused dining dollar tracker and meal coordination app that helps university users monitor meal plan spending, manage meal swipes, make budget decisions, and coordinate meals with friends through a lightweight browser app.

### Goals
- Track meal plan balance and spending in one place
- Support multiple university dining systems and location-based pricing
- Provide quick insights into average spend, safe daily budget, and top spending locations
- Persist per-user settings and meal history across sessions
- Enable users to broadcast meal plans and invite friends to join via push notifications

## High-Level Architecture

DollarDine is a single-page browser app built with HTML, CSS, and vanilla JavaScript. It uses local storage for user state and integrates Firebase Authentication for signup/login flow.

### Core Modules

1. **UI / Presentation**
   - File: `index.html`
   - Hosts the auth, setup, and main app pages
   - Includes the responsive page layout, navigation controls, dashboard cards, meal log form, history table, and settings panel
   - Loads the main script with `type="module"`

2. **Styling**
   - File: `styles.css`
   - Defines the visual design system, page layout, responsive breakpoints, and component styles
   - Applies consistent brand colors, typography, buttons, cards, and form controls

3. **App Controller**
   - File: `app.js`
   - Manages full application behavior and user interaction flow
   - Responsibilities:
     - initialize the app and determine active page based on authentication state
     - attach event listeners for login/signup, school selection, meal logging, history actions, and settings
     - switch between views (`dashboard`, `log`, `history`, `edit`)
     - build location menus dynamically from school data
     - compute dashboard metrics and render spending insights
     - support week-based history grouping, entry editing, and deletion
     - export/import user records

4. **Authentication**
   - File: `auth.js`
   - Uses Firebase Authentication for sign-up / sign-in
   - Also stores user data locally in `localStorage` under `diningUsers`
   - Functions:
     - `signup(email, password)` creates Firebase accounts and local user records
     - `login(email, password)` authenticates with Firebase and saves current user locally
     - `logout()` clears the current user session
     - `getCurrentUser()`, `getUsers()`, `saveUsers()`, `getUserState()`, `saveUserState()` manage local user records and per-user app state

5. **Static Data**
   - File: `data.js`
   - Contains the school catalog with metadata and dining locations
   - Each school includes sections, location names, and pricing for breakfast, lunch, dinner, and snacks
   - Serves as the app’s configuration source for location selection and pricing guidance

6. **Persistence**
   - File: `storage.js`
   - Provides a simple localStorage wrapper for app state under `STORAGE_KEY`
   - Includes `loadState()`, `saveState()`, and `resetState()` helpers
   - In practice, the app stores per-user state in the authenticated user object and saves via `auth.js`

7. **Utilities**
   - File: `utils.js`
   - Reusable helper utilities for formatting and date handling
   - Includes `formatCurrency()`, `formatDisplayDate()`, `getTodayISO()`, and `safeParseNumber()`

8. **Push Notifications System**
   - File: `notifications.js` (future)
   - Enables users to broadcast meal plans to friends
   - Sends push notifications with meal details: user name, meal type, location, and time
   - Uses Firebase Cloud Messaging (FCM) for browser-based push delivery
   - Integrates with Service Workers for background notification handling
   - Stores device tokens and friend connections in Firestore
   - Notifications appear on recipients' devices even when app is not open

## Runtime Flow

1. App boots in `app.js` and checks the current authenticated user.
2. If a user is signed in, the app loads that user’s saved state and shows the main dashboard.
3. If no user is present, the auth page is displayed for sign in or sign up.
4. After initial setup, users select a school, enter balance/days/swipes, and start tracking.
5. Meal entries are logged with location, meal type, price/swipe, date, and optional note.
6. Dashboard calculations update in real time, showing remaining balance, average spend, safe daily budget, and budget status.
7. User entries are saved to Firestore per user and can be edited or deleted later.
8. History can be viewed chronologically or grouped by week.
9. **New: When a user logs a meal, they can optionally broadcast an invitation to friends:**
   - User clicks "Share meal" or similar action
   - App constructs a notification payload with: user name, meal type (breakfast/lunch/dinner), location, and time
   - Notification is sent via Firebase Cloud Messaging to all friends who have subscribed
   - Friends receive a push notification on their registered devices: **"[Name] is going to [Meal Type] at [Location] at [Time]. Join them?"**
   - Friends can click the notification to open the app and see the meal details or accept the invitation
10. Cloud state syncs across sessions so meal broadcasts and history persist.

## Key Functional Components

- **Authentication flow**
  - Firebase-backed credentials with local user state store
  - Current user persisted in localStorage via `CURRENT_USER_KEY`

- **School and location selection**
  - Dynamic location list built from `data.js`
  - Meal pricing auto-populated for the chosen meal type and location

- **Meal logging**
  - Supports dollar purchases and swipe-based entries
  - Stores entries with display date, sort key, type, location, amount, and note

- **Dashboard insights**
  - Calculates spent amount, remaining balance, average spend, safe spend, and budget status
  - Renders top spending locations and progress ring visuals

- **Settings and persistence**
  - Users can update school, balance, days remaining, and swipe count
  - Changes persist across reloads for each signed-in user

- **Push Notifications & Meal Coordination**
  - Users can share meal plans with friends by broadcasting notifications
  - System collects device tokens (FCM tokens) on first login
  - Notification payload includes: sender name, meal type, location, and scheduled time
  - Recipients receive browser push notifications even when app is closed
  - Click-to-action: tapping notification opens app and shows meal details
  - Service Worker handles background notification delivery
  - Friend connections stored in Firestore under user's contact list

## File Structure

```
DollarDine/
├── index.html             # Single-page UI with auth, setup, dashboard, log, history, and settings
├── app.js                 # App controller: state, routing, event handling, dashboard, history, and persistence
├── auth.js                # Firebase authentication and per-user local state management
├── data.js                # Static school and dining location metadata
├── storage.js             # Firestore and localStorage helper functions for meals and state
├── utils.js               # Formatting and date helper utilities
├── notifications.js       # Push notification system: sending invites and managing tokens (future)
├── service-worker.js      # Service worker for background notification handling (future)
├── styles.css             # Styling and responsive layout definitions
├── firebase-config.js     # Firebase initialization for auth, Firestore, and Cloud Messaging
├── ARCHITECTURE.md        # Architecture documentation
├── USER_AUTH.md           # Authentication design notes and details
└── TOOLCHAIN.md           # Build/development tooling notes
```

## Technology Stack

- HTML5, CSS3, JavaScript (ES6 modules)
- Firebase Authentication for user login/signup
- Firebase Firestore for cloud data persistence (meals, settings, friend contacts)
- Firebase Cloud Messaging (FCM) for push notifications
- Browser `localStorage` for local caching and session state
- Service Workers for background notification handling
- No build tool dependencies required for runtime

## Limitations & Notes

- Push notifications require users to grant browser permission and register a device token.
- Friend discovery currently requires manual contact list management; no in-app friend search yet.
- Service Workers may have limited support on older browsers or non-HTTPS origins.
- Firestore is used for meals and settings; authentication is primary responsibility of Firebase Auth.

## Data Model

### Firestore Collections

```
users/
  {uid}/
    - email: string
    - school: string
    - balance: number
    - daysLeft: number
    - swipes: number | "Unlimited"
    - createdAt: timestamp
    - lastLogin: timestamp
    
  {uid}/meals/
    {mealId}/
      - type: "breakfast" | "lunch" | "dinner" | "snack"
      - location: string
      - amount: number
      - note: string
      - date: string (display format)
      - sortKey: string (ISO date)
      - timestamp: timestamp
      - sharedWith: string[] (array of friend UIDs)
    
  {uid}/contacts/
    {friendId}/
      - email: string
      - name: string
      - deviceToken: string
      - addedAt: timestamp
```

## Enhancement Opportunities

- **Push Notifications (In Progress)**
  - Implement Firebase Cloud Messaging integration
  - Create service worker for background message handling
  - Add friend list management UI
  - Send meal broadcast notifications with location and time
  - Allow recipients to accept/decline invitations

- **Advanced Features**
  - Add spending predictions and budget recommendations
  - Integrate with real university dining APIs for live pricing
  - Generate CSV/PDF reports of spending history
  - Add spending trend graphs and visualizations
  - Implement account recovery and password reset flows
  - Add multi-device sync with conflict resolution
  - Social features: leaderboards, shared meal budgets, group dining events
