# DollarDine Architecture

## Project Purpose

**DollarDine** is a web-based meal plan spending tracker designed for university students. It helps students monitor their dining dollar balance, track spending across multiple dining locations, and manage their meal plan budget throughout the semester.

### Key Features
- **User Authentication**: Secure signup and login system for account management
- **Multi-School Support**: Track spending for different university dining systems
- **Meal Logging**: Log meal entries with location, meal type, and cost
- **Balance Tracking**: Real-time monitoring of dining dollar balance and spending
- **Purchase History**: View detailed transaction history with filtering and search
- **Spending Analytics**: Dashboard visualizations showing spending trends, daily averages, and budget status
- **Semester Planning**: Track days left in semester and calculate daily spending recommendations
- **Settings Management**: Customize school, balance, plan type, and other preferences

## Problem Solved

Many university students don't have visibility into their dining dollar spending until they run out of money mid-semester. DollarDine addresses this by providing:
- A centralized place to track every meal purchase
- Clear visual indicators of remaining balance
- Spending trends and daily averages
- Proactive budget management tools

---

## Architecture Overview

DollarDine follows a layered, modular architecture designed for simplicity and maintainability.

### 1. Presentation Layer
**File**: `index.html`
- Renders the complete user interface with multiple pages:
  - **Auth Page**: User login and signup
  - **Setup Page**: Initial configuration (school, balance, meal plan type)
  - **Main Page**: Dashboard, meal log, history, and settings views
- Provides semantic HTML structure and accessibility
- Loads CSS styling and JavaScript modules

### 2. Styling Layer
**File**: `styles.css`
- Defines theme variables and color palette
- Implements responsive design for mobile and desktop
- Styles all UI components: forms, buttons, cards, tables, navigation
- Creates consistent visual hierarchy and user experience

### 3. Data Layer
**File**: `data.js`
- Manages static configuration data:
  - School metadata (name, badge color, dining locations)
  - Dining location menus and pricing
  - Meal type definitions
- Serves as single source of truth for app configuration
- Enables easy addition of new schools and dining locations

### 4. Authentication Layer
**File**: `auth.js`
- Handles user account management:
  - `signup()` creates new user accounts
  - `login()` authenticates existing users
  - `logout()` clears current session
  - `getCurrentUser()` retrieves logged-in user
  - `getUserState()` and `saveUserState()` manage per-user data persistence
  - `getUsers()` and `saveUsers()` handle user database operations
- Manages user isolation and data security

### 5. Application Logic Layer
**File**: `app.js`
- Core application controller:
  - **State Management**: Maintains app state (balance, swipes, entries, etc.)
  - **View Routing**: Switches between auth, setup, and main pages
  - **Event Handling**: Processes user interactions (meal logging, deletion, settings updates)
  - **Dashboard Logic**: Calculates spending statistics, remaining balance, daily averages
  - **History Management**: Generates transaction history table and filters
  - **UI Updates**: Renders all dynamic content and visualizations

### 6. Persistence Layer
**File**: `storage.js`
- Manages data persistence using browser `localStorage`:
  - `loadState()` retrieves saved app state
  - `saveState()` persists current state
  - `resetState()` clears all stored data
- Enables seamless user experience across sessions
- Integrates with authentication for per-user data storage

### 7. Utility Layer
**File**: `utils.js`
- Provides reusable helper functions:
  - `formatCurrency()` converts numbers to dollar format
  - `formatDisplayDate()` formats dates for display
  - `getTodayISO()` returns current date in ISO format
- Centralizes common logic and formatting rules

---

## Data Flow

1. **User Authentication**: User signs up/logs in via auth page
2. **Setup**: User configures school and initial balance on setup page
3. **Meal Logging**: User enters meal purchase → stored in entries array
4. **Dashboard**: App calculates statistics from entries → displays balance, trends, visual indicators
5. **History**: User views/filters transaction history → can delete entries
6. **Persistence**: All state changes → saved to localStorage → retrieved on next session

---

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser localStorage API
- **No External Dependencies**: Lightweight, dependency-free application
- **Responsive Design**: Mobile-first approach for all devices

---

## File Structure

```
DollarDine/
├── index.html          # Main HTML structure
├── app.js              # Application logic and state management
├── auth.js             # User authentication system
├── data.js             # Static configuration and school data
├── storage.js          # LocalStorage persistence layer
├── utils.js            # Utility and helper functions
├── styles.css          # Application styling
├── ARCHITECTURE.md     # This file
├── USER_AUTH.md        # Authentication documentation
└── TOOLCHAIN.md        # Build and deployment tools
```

---

## Future Enhancement Opportunities

1. **Backend Integration**: Move from localStorage to a server-based database
2. **API Integration**: Connect to real university dining systems for live pricing
3. **Advanced Analytics**: Add spending predictions and budget recommendations
4. **Mobile App**: Convert to native mobile application
5. **Social Features**: Share spending insights or compare with friends
6. **Export Tools**: Generate CSV/PDF reports of spending history
7. **Real-time Sync**: Sync data across multiple devices
