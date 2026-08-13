# DollarDine Roadmap

## Current focus

1. Keep authentication and profile persistence reliable
   - Preserve the signed-in user’s profile and meal data through refreshes and view changes
   - Ensure settings updates immediately reflect in the dashboard and remain saved after reloads
   - Keep onboarding and settings flows aligned with the same profile fields

2. Keep Firestore as the source of truth
   - Let realtime listeners drive dashboard and history state
   - Avoid duplicate meal entries caused by mixing local mutation and cloud updates
   - Clear stale state completely when the user signs out

3. Polish the mobile experience
   - Keep the dashboard, history, and settings views readable on phone screens
   - Improve spacing and compact card layouts where needed
   - Preserve a clean handoff between setup, logging, and settings

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

- The app now uses Firebase Auth and Firestore for core profile and meal persistence.
- The next milestone is a smoother sign-in/sign-out flow and a cleaner mobile-first experience.
- The roadmap remains focused on reliability and usability before new social or reporting features.
