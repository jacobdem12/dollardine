import { auth } from './firebase-config.js';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

export async function signup(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const users = getUsers();
    if (!users[email]) {
      users[email] = { password: hashPassword(password), state: null };
      saveUsers(users);
    }
    localStorage.setItem(CURRENT_USER_KEY, email);
    return { success: true };
  } catch (error) {
    console.error("Firebase Auth Error Details:", error.code, error.message);
    console.log("CRITICAL ERROR CODE:", error.code);
    console.log("ERROR MESSAGE:", error.message);
    return { success: false, message: error.message || 'Unable to sign up.' };
  } 
}

export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem(CURRENT_USER_KEY, email);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message || 'Invalid email or password.' };
  }
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

