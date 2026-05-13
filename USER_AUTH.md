# User Authentication Documentation

## Overview
The Dining Dollars Tracker supports user accounts for personalized tracking. User data is stored locally in the browser's `localStorage`.

## Storage Structure
- **Users**: Stored under key `'diningUsers'` as a JSON object: `{ username: { password: 'hashedPassword', state: userState } }`
- **Current User**: Stored under key `'currentUser'` as the logged-in username string.

## Password Security
Passwords are hashed using base64 encoding (`btoa()`) for basic obfuscation. This is not secure for production; use proper hashing like bcrypt in a real app.

## Functions
- `signup(username, password)`: Creates a new user account.
- `login(username, password)`: Authenticates and logs in a user.
- `logout()`: Logs out the current user.
- `getCurrentUser()`: Returns the current logged-in username.
- `getUserState(username)`: Retrieves the user's app state.
- `saveUserState(username, state)`: Saves the user's app state.

## Flow
1. On app load, check for `currentUser`.
2. If logged in, load user state and show main app.
3. If not, show auth page for login/signup.
4. After setup, save state per user.

## Export/Import
- In Settings, use "Export Users" to download a `users.json` file with all user data.
- Use "Import Users" to load a `users.json` file and restore user accounts.
- This allows backing up and restoring accounts across devices or browser resets.