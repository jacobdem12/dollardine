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
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const users = getUsers();
    if (!users[email]) {
      users[email] = { password: hashPassword(password), state: null };
      saveUsers(users);
    }
    localStorage.setItem(CURRENT_USER_KEY, email);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Firebase Auth Error Details:", error.code, error.message);
    let message = "Unable to sign up.";
    if (error.code === 'auth/email-already-in-use') {
      message = "That email is already registered. Try logging in instead.";
    } else if (error.code === 'auth/weak-password') {
      message = "Password must be at least 6 characters.";
    } else if (error.code === 'auth/invalid-email') {
      message = "Please enter a valid email address.";
    }
    return { success: false, message };
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

export async function logout() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error('Error during Firebase signOut:', err);
  }
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

