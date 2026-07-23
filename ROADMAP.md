# DollarDine Roadmap

## Current focus

1. Fix authentication flow
   - Separate login and signup flows in the auth UI
   - Use distinct form submit handlers so Sign In and Sign Up do not share the same button behavior
   - Ensure `handleSignup` and `handleSignin` are wired only to their own forms
   - Fix auth feedback and error messaging for invalid email/password inputs

2. Stabilize Firestore sync and state management
   - Make Firestore realtime listeners the source of truth for meal history
   - Remove manual `state.entries.push()` from meal submission handlers
   - Prevent duplicate meal entries caused by simultaneous local state mutation and realtime snapshot updates
   - Clear stale state on logout and when auth changes

3. Improve onboarding and initial state setup
   - Ensure first-time users complete setup after signup
   - Persist school, balance, days remaining, and swipe count to Firestore
   - Route authenticated users to the dashboard if profile data exists, otherwise to setup

## Short-term plan (next sprint)

- Clean up `app.js` controller logic and reduce duplicate event binding
- Consolidate auth UI into `index.html` and remove legacy pages
- Expose `window.state` consistently for debugging and runtime verification
- Add explicit UI toggle controls for signup/login views
- Make logout flow fully reset UI, state, and active listeners
- Fix signup `400` style errors when invalid auth state or bad input is used

## Medium-term plan

- Add stronger meal history management
  - support editing and deleting meal entries via Firestore
  - render history grouped by week and by date
  - improve table/list UI for meal history
- Add dashboard clarity
  - show top locations, budget status, and safe spend guidance
  - make ring and summary metrics update reliably from cloud state
- Harden persistence
  - ensure page refresh, logout/login, and auth state transitions do not reset user data incorrectly
  - consolidate localStorage fallback only behind realtime cloud sync

## Longer-term features

- Push notifications and meal coordination
  - use Firebase Cloud Messaging for friend invites
  - store device tokens and friend contacts in Firestore
  - send meal broadcast notifications with location/time details
- Better school support
  - support additional campus meal plan configurations
  - add live pricing or dining hall APIs if available
- Advanced reporting
  - export/import meal data and settings
  - add CSV/PDF reporting and charts
  - support spending trends and prediction recommendations
- UX polish
  - improve responsive mobile behavior
  - add clear onboarding guidance and form validation
  - reduce modal/forms friction for login/signup and setup

## Notes

- Current repository state shows the app is already using Firebase Auth and Firestore.
- Existing work is centered on fixing auth form wiring and ensuring Firestore snapshot listeners are authoritative.
- The roadmap is focused on stabilizing the core tracking experience before adding coordination or notification features.
