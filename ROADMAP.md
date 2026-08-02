# DollarDine Roadmap

## Current focus

1. Stabilize the auth and session flow
   - Keep login and signup UI separated and predictable
   - Reset auth, setup, and log form fields on logout or auth state changes
   - Make sure new account testing starts from a clean slate instead of carrying old values forward

2. Keep Firestore as the source of truth
   - Let realtime listeners drive dashboard and history state
   - Avoid duplicate meal entries caused by mixing local mutation and cloud updates
   - Clear stale state completely when the user signs out

3. Polish onboarding and mobile experience
   - Make setup feel quick and reliable on phone screens
   - Keep the main dashboard and history views readable without excessive scrolling
   - Improve responsive spacing and compact card layouts

## Near-term priorities

- Tighten auth feedback and error handling
- Finish the logout/reset flow for forms, dashboard widgets, and state
- Reduce duplicate event wiring in the main controller
- Keep the app responsive on common phone sizes

## Medium-term ideas

- Improve meal history with better grouping and filtering
- Add stronger budget insights and trend views
- Make settings and profile editing feel more intuitive
- Harden persistence so refreshes and auth transitions stay predictable

## Longer-term features

- Add meal coordination and friend-based sharing
- Support more campuses and dining plan variants
- Add exports, reporting, and trend charts
- Expand the experience with richer onboarding and profile customization

## Notes

- The app already uses Firebase Auth and Firestore.
- The next milestone is a smoother sign-in/sign-out flow and a cleaner mobile-first experience.
- The roadmap is now focused on reliability and usability before new social or reporting features.
