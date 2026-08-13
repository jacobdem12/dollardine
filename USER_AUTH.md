# User Authentication Documentation

## Overview
DollarDine supports signed-in users with personalized dining budgets and meal history. Authentication is handled by Firebase Auth, while app profile and meal data are stored in Firestore.

## Storage structure
- **Local user registry**: Stored in browser localStorage under the key `diningUsers` as a JSON object of user accounts and saved state.
- **Current user**: Stored under the key `currentUser` as the logged-in email address.
- **Firestore profile**: Saved to the signed-in user document at `users/{uid}` with the school, balance, days remaining, swipe count, and unlimited flag.
- **Firestore meals**: Saved to the collection `users/{uid}/meals` with each meal or swipe entry.

## Password handling
Passwords are created and handled through Firebase Auth. The local user registry remains a lightweight fallback for app state and export/import workflows.

## Functions
- `signup(email, password)`: Creates a new Firebase-authenticated user account.
- `login(email, password)`: Authenticates and logs in a user.
- `logout()`: Logs out the current user.
- `getCurrentUser()`: Returns the current logged-in email from localStorage.
- `getUserState(username)`: Retrieves the user’s locally stored app state.
- `saveUserState(username, state)`: Saves the user’s app state to the local user registry.

## Flow
1. On app load, Firebase auth state determines whether a user is signed in.
2. If logged in, Firestore listeners load the profile and meal history into the active app state.
3. If not, the app shows the auth screen for login or signup.
4. After onboarding or when Settings are saved, the app writes profile changes back to Firestore and updates the current session state.

## Export/Import
- In Settings, use “Export Users” to download a `users.json` file with the locally stored user registry.
- Use “Import Users” to restore that JSON data and rehydrate local accounts.
- This is useful for backups or moving account data between browsers or devices.