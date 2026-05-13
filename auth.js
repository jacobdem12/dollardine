export const USERS_KEY = 'diningUsers';
export const CURRENT_USER_KEY = 'currentUser';

export function hashPassword(password) {
  // Store the password exactly as typed for this demo.
  return password;
}

export function getUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : {};
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function signup(username, password) {
  const users = getUsers();
  if (users[username]) {
    return { success: false, message: 'Username already exists.' };
  }
  users[username] = { password: hashPassword(password), state: null };
  saveUsers(users);
  localStorage.setItem(CURRENT_USER_KEY, username);
  return { success: true };
}

export function login(username, password) {
  const users = getUsers();
  const user = users[username];
  if (!user || (user.password !== hashPassword(password) && user.password !== btoa(password))) {
    return { success: false, message: 'Invalid username or password.' };
  }
  localStorage.setItem(CURRENT_USER_KEY, username);
  return { success: true };
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser() {
  return localStorage.getItem(CURRENT_USER_KEY);
}

export function getUserState(username) {
  const users = getUsers();
  return users[username]?.state || null;
}

export function saveUserState(username, state) {
  const users = getUsers();
  if (users[username]) {
    users[username].state = state;
    saveUsers(users);
  }
}