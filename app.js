import { SCHOOLS } from './data.js';
import { formatCurrency, formatDisplayDate, getTodayISO } from './utils.js';
import { saveMealToCloud, loadUserAppStateFromCloud, saveUserSetupToCloud } from "./storage.js";
import { signup, login, logout, getCurrentUser, getUserState, saveUserState, getUsers, saveUsers } from './auth.js';
import { auth } from "./firebase-config.js"; 
import { doc, collection, onSnapshot, query, orderBy, deleteDoc, getDocs } from "firebase/firestore";
import { onAuthStateChanged, deleteUser } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { db } from './firebase-config.js'; 
import {setDoc } from "firebase/firestore";

window.SCHOOLS = SCHOOLS;

window.state = window.state || {
  school: 'ncstate',
  balance: 0,
  daysLeft: 0,
  swipes: 0,
  isUnlimited: false,
  recentLocation: '',
  entries: [],
  sortByWeek: false
};

const state = window.state;

const CIRC = 2 * Math.PI * 88;
let selectedMealType = 'breakfast';
let selectedLocation = null;
let currentUser = null;
let currentEditIndex = null;

const UI = {
  pageAuth: document.getElementById('page-auth'),
  pageSetup: document.getElementById('page-setup'),
  pageMain: document.getElementById('page-main'),
  authUsername: document.getElementById('auth-username'),
  authPassword: document.getElementById('auth-password'),
  signinBtn: document.getElementById('signin-btn'),
  signupBtn: document.getElementById('signup-btn'),
  authMessage: document.getElementById('auth-message'),
  setupSchoolDropdown: document.getElementById('setup-school-dropdown'),
  setupSchoolSearchInput: document.getElementById('school-search-input-setup'),
  setupSchoolResultsList: document.getElementById('school-results-list-setup'),
  setupBadge: document.getElementById('setup-badge'),
  setupSchoolName: document.getElementById('setup-school-name'),
  setupBalance: document.getElementById('setup-balance'),
  setupDays: document.getElementById('setup-days'),
  setupSwipes: document.getElementById('setup-swipes'),
  startTrackingBtn: document.getElementById('start-tracking-btn'),
  logoutBtn: document.getElementById('logout-btn'),
  mainBadge: document.getElementById('main-badge'),
  mainSchoolSub: document.getElementById('main-school-sub'),
  navPills: Array.from(document.querySelectorAll('.nav-pill')),
  dashActionButtons: Array.from(document.querySelectorAll('.dash-action-btn')),
  dashSwipesLarge: document.getElementById('dash-swipes-large'),
  ringSpentArc: document.getElementById('ring-spent-arc'),
  ringAmount: document.getElementById('ring-amount'),
  ringSpentLabel: document.getElementById('ring-spent-label'),
  ringSafeSpendText: document.getElementById('ring-safe-spend-text'),
  ringStatusLabel: document.getElementById('ring-status-label'),
  statSpent: document.getElementById('stat-spent'),
  statDays: document.getElementById('stat-days'),
  statDailyAvg: document.getElementById('stat-daily-avg'),
  statSuggested: document.getElementById('stat-suggested'),
  insightMessage: document.getElementById('insight-message'),
  statusLabel: document.getElementById('status-label'),
  statusDiff: document.getElementById('status-diff'),
  statusCard: document.getElementById('status-card-elem'),
  insightCard: document.getElementById('insight-card-elem'),
  topLocationsContainer: document.getElementById('top-locations-container'),
  locationList: document.getElementById('location-list'),
  locationSelectorBtn: document.getElementById('location-selector-btn'),
  locationSelectorLabel: document.getElementById('location-selector-label'),
  mobileMenuTrigger: document.getElementById('mobile-menu-btn'),
  mobileNav: document.getElementById('mobile-nav'),
  mobileNavItems: Array.from(document.querySelectorAll('.mobile-nav-item')),
  logLocation: document.getElementById('log-location'),
  mealTypeRow: document.getElementById('meal-type-row'),
  amountPreview: document.getElementById('amount-preview'),
  logAmount: document.getElementById('log-amount'),
  logDate: document.getElementById('log-date'),
  logNote: document.getElementById('log-note'),
  logMealBtn: document.getElementById('log-meal-btn'),
  swipeActionBtn: document.getElementById('swipe-action-btn'),
  backDashboardBtn: document.getElementById('back-dashboard-btn'),
  historyContent: document.getElementById('history-content'),
  resetAllBtn: document.getElementById('reset-all-btn'),
  sortWeekBtn: document.getElementById('sort-week-btn'),
  editSchoolDropdown: document.getElementById('edit-school-dropdown'),
  schoolSearchInput: document.getElementById('school-search-input'),
  schoolResultsList: document.getElementById('school-results-list'),
  editBalance: document.getElementById('edit-balance'),
  editDays: document.getElementById('edit-days'),
  editSwipes: document.getElementById('edit-swipes'),
  saveMainDataBtn: document.getElementById('save-main-data-btn'),
  cancelSettingsBtn: document.getElementById('cancel-settings-btn'),
  logoutMainBtn: document.getElementById('logout-main-btn'),
  exportUsersBtn: document.getElementById('export-users-btn'),
  importUsersBtn: document.getElementById('import-users-btn'),
  importUsersInput: document.getElementById('import-users-input')
  ,btnDeleteAccount: document.getElementById('btn-delete-account')
};

function setupAuthListeners() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

// Sign In Handlers
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSignin(e);
  });
}

if (UI.signinBtn) {
  UI.signinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleSignin(e);
  });
}

// Sign Up Handlers
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSignup(e);
  });
}

if (UI.signupBtn) {
  UI.signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleSignup(e);
  });
}
}

function init() {
  initUI();

  console.log('init: waiting for Firebase auth state to restore user (onAuthStateChanged)');
  showPageAuth();
}

function initUI() {
  // wire auth listeners: prefer form submit if available, else buttons
  setupAuthListeners();
  if (UI.setupSchoolDropdown) UI.setupSchoolDropdown.addEventListener('change', onSetupSchoolChange);
  if (UI.setupSchoolSearchInput) UI.setupSchoolSearchInput.addEventListener('input', (event) => handleSchoolSearchInput(event, UI.setupSchoolSearchInput, UI.setupSchoolResultsList, UI.setupSchoolDropdown));
  if (UI.setupSchoolResultsList) UI.setupSchoolResultsList.addEventListener('click', (event) => selectSchoolResultFromList(event, UI.setupSchoolSearchInput, UI.setupSchoolDropdown, UI.setupSchoolResultsList));
  if (UI.schoolSearchInput) UI.schoolSearchInput.addEventListener('input', (event) => handleSchoolSearchInput(event, UI.schoolSearchInput, UI.schoolResultsList, UI.editSchoolDropdown));
  if (UI.schoolResultsList) UI.schoolResultsList.addEventListener('click', (event) => selectSchoolResultFromList(event, UI.schoolSearchInput, UI.editSchoolDropdown, UI.schoolResultsList));
  UI.startTrackingBtn.addEventListener('click', startTracking);
  UI.logoutBtn.addEventListener('click', handleLogout);
  UI.mobileMenuTrigger.addEventListener('click', toggleMobileNav);
  UI.mobileNavItems.forEach(btn => btn.addEventListener('click', () => {
    if (btn.id === 'logout-mobile-btn') return handleLogout();
    const view = btn.dataset.view;
    if (view) navTo(view === 'edit' ? 'settings' : view);
  }));
  UI.navPills.forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view === 'edit' ? 'settings' : btn.dataset.view)));
  UI.dashActionButtons.forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));
  UI.locationSelectorBtn.addEventListener('click', toggleLocationDropdown);
  UI.logMealBtn.addEventListener('click', logMeal);
  UI.swipeActionBtn.addEventListener('click', useSwipe);
  UI.locationList.addEventListener('click', event => {
    const btn = event.target.closest('.location-btn');
    if (btn) {
      selectLocation(btn);
      closeLocationDropdown();
    }
  });
  UI.mealTypeRow.addEventListener('click', event => {
    const btn = event.target.closest('.meal-type-btn');
    if (btn) selectMealType(btn);
  });
  
  UI.logAmount.addEventListener('input', updateAmountPreview);
  UI.backDashboardBtn.addEventListener('click', () => showView('dashboard'));
  UI.resetAllBtn.addEventListener('click', resetAll);
  UI.sortWeekBtn.addEventListener('click', toggleSortByWeek);
  UI.saveMainDataBtn.addEventListener('click', saveMainData);
  UI.cancelSettingsBtn.addEventListener('click', () => showView('dashboard'));
  UI.logoutMainBtn.addEventListener('click', handleLogout);
  UI.exportUsersBtn.addEventListener('click', exportUsers);
  UI.importUsersBtn.addEventListener('click', () => UI.importUsersInput.click());
  UI.importUsersInput.addEventListener('change', importUsers);
  if (UI.btnDeleteAccount) UI.btnDeleteAccount.addEventListener('click', handleDeleteAccount);
  UI.historyContent.addEventListener('click', event => {
    const editBtn = event.target.closest('.edit-btn');
    const delBtn = event.target.closest('.del-btn');
    if (editBtn) return editHistoryEntry(Number(editBtn.dataset.index));
    if (delBtn) return deleteEntry(Number(delBtn.dataset.index));

    const row = event.target.closest('.history-row');
    if (row) return editHistoryEntry(Number(row.dataset.index));
  });
  UI.logDate.value = getTodayISO();
  syncSchoolSearchFields();
}

function toggleMobileNav() {
  if (!UI.mobileNav) return;
  UI.mobileNav.classList.toggle('active');
}

function closeMobileNav() {
  if (!UI.mobileNav) return;
  UI.mobileNav.classList.remove('active');
}

function toggleLocationDropdown() {
  if (!UI.locationList) return;
  UI.locationList.classList.toggle('active');
}

function closeLocationDropdown() {
  if (!UI.locationList) return;
  UI.locationList.classList.remove('active');
}

function navTo(viewName) {
  closeMobileNav();
  showView(viewName);
}

function syncSchoolSearchFields() {
  const schoolKey = state.school || 'ncstate';
  const school = SCHOOLS[schoolKey];
  if (!school) return;

  if (UI.setupSchoolDropdown) UI.setupSchoolDropdown.value = schoolKey;
  if (UI.editSchoolDropdown) UI.editSchoolDropdown.value = schoolKey;
  if (UI.setupSchoolSearchInput) UI.setupSchoolSearchInput.value = school.name;
  if (UI.schoolSearchInput) UI.schoolSearchInput.value = school.name;

  applySetupBranding();
  applySchoolBranding();
}

function handleSchoolSearchInput(event, searchInput, resultsList, hiddenInput) {
  if (!searchInput || !resultsList || !hiddenInput) return;

  const query = (event.target.value || '').trim().toLowerCase();
  if (!query) {
    resultsList.innerHTML = '';
    resultsList.style.display = 'none';
    return;
  }

  const matchedSchools = Object.entries(SCHOOLS)
    .filter(([, school]) => {
      const haystack = `${school.name} ${school.abbr}`.toLowerCase();
      return haystack.includes(query);
    })
    .slice(0, 8);

  if (matchedSchools.length === 0) {
    resultsList.innerHTML = '<div style="padding:8px 10px; font-size:13px; color:#9ca3af;">No schools found</div>';
    resultsList.style.display = 'block';
    return;
  }

  resultsList.innerHTML = matchedSchools.map(([key, school]) => `
    <button type="button" class="school-result-item" data-school-key="${key}" style="display:block; width:100%; text-align:left; padding:10px 12px; border:0; background:transparent; color:#f3f4f6; cursor:pointer;">
      <div style="font-weight:600;">${school.name}</div>
      <div style="font-size:12px; opacity:0.7;">${school.abbr}</div>
    </button>
  `).join('');
  resultsList.style.display = 'block';
}

function selectSchoolResultFromList(event, searchInput, hiddenInput, resultsList) {
  const resultButton = event.target.closest('.school-result-item');
  if (!resultButton || !searchInput || !hiddenInput || !resultsList) return;

  const schoolKey = resultButton.dataset.schoolKey;
  const school = SCHOOLS[schoolKey];
  if (!school) return;

  searchInput.value = school.name;
  hiddenInput.value = schoolKey;
  resultsList.style.display = 'none';

  state.school = schoolKey;
  syncSchoolSearchFields();
  onSetupSchoolChange({ target: hiddenInput });
}

function onSetupSchoolChange(event) {
  const schoolKey = event?.target?.value || state.school || 'ncstate';
  const school = SCHOOLS[schoolKey];
  if (!school) return;

  state.school = schoolKey;
  syncSchoolSearchFields();
  buildLocationList();
  applyMealPrice();
  updateDashboard();
}

function applySetupBranding() {
  const school = SCHOOLS[state.school];
  UI.setupBadge.textContent = school.abbr;
  UI.setupBadge.style.background = school.color;
  UI.setupSchoolName.textContent = school.name;
}

function applySchoolBranding() {
  const school = SCHOOLS[state.school];
  UI.mainBadge.textContent = school.abbr;
  UI.mainBadge.style.background = school.color;
  UI.mainSchoolSub.textContent = school.name;
  applySetupBranding();
}

function handleLogin() {
  const username = UI.authUsername.value.trim();
  const password = UI.authPassword.value;
  const result = login(username, password);
  if (result.success) {
    currentUser = username;
    const userState = getUserState(username);
    if (userState) {
      Object.assign(state, userState);
      syncSchoolSearchFields();
      applySchoolBranding();
      showPageMain();
      showView('dashboard');
    } else {
      showPageSetup();
      applySetupBranding();
    }
  } else {
    UI.authMessage.textContent = result.message;
  }
}

async function handleSetupSubmit(e) {
  if (e) e.preventDefault();

  const authUser = auth.currentUser;
  if (!authUser) {
    console.error('Cannot save profile: No authenticated user found.');
    if (typeof showPageAuth === 'function') showPageAuth();
    return;
  }

  const school = UI.setupSchoolDropdown?.value || state.school;
  const balance = parseFloat(UI.setupBalance?.value) || 0;
  const daysLeft = parseInt(UI.setupDays?.value, 10) || 0;
  const swipeRaw = (UI.setupSwipes?.value || '').toString().trim().toLowerCase();

  let isUnlimited = false;
  let swipes = 0;
  if (swipeRaw === 'unlimited') {
    isUnlimited = true;
    swipes = 0;
  } else {
    swipes = Math.max(parseInt(swipeRaw, 10) || 0, 0);
  }

  state.school = school;
  state.balance = balance;
  state.daysLeft = daysLeft;
  state.swipes = swipes;
  state.isUnlimited = isUnlimited;

  const setupData = { school, balance, daysLeft, swipes, isUnlimited, updatedAt: new Date().toISOString() };
  console.log('👉 SETUP SUBMIT CLICKED! Here is what we grabbed:', setupData);

  try {
    await saveUserSetupToCloud(authUser.uid, state);
    currentUser = authUser.email || currentUser;
    saveUserState(currentUser, state);

    applySchoolBranding();
    showPageMain();
    showView('dashboard');
  } catch (error) {
    console.error('Error saving setup profile to Firestore:', error);
    if (UI.setupErrorMessage) UI.setupErrorMessage.textContent = 'Failed to save profile. Please try again.';
  }
}

function handleLogout() {
  logout();
  currentUser = null;
  resetAppState();
  resetSessionUI();
  showPageAuth();
}

function showPageAuth() {
  UI.pageAuth.classList.add('active');
  UI.pageSetup.classList.remove('active');
  UI.pageMain.classList.remove('active');
}

function showPageSetup() {
  UI.pageAuth.classList.remove('active');
  UI.pageSetup.classList.add('active');
  UI.pageMain.classList.remove('active');
}

function showPageMain() {
  UI.pageAuth.classList.remove('active');
  UI.pageSetup.classList.remove('active');
  UI.pageMain.classList.add('active');
}

function showView(name) {
  const targetViewId = name === 'edit' || name === 'settings' ? 'view-settings' : `view-${name}`;
  const view = document.getElementById(targetViewId);
  if (!view) return;

  document.querySelectorAll('.view').forEach(el => {
    el.classList.remove('active');
    el.style.display = 'none';
  });
  UI.navPills.forEach(btn => btn.classList.remove('active'));

  closeLocationDropdown();
  closeMobileNav();

  view.classList.add('active');
  view.style.display = 'block';
  const activeNav = UI.navPills.find(btn => btn.dataset.view === name);
  if (activeNav) activeNav.classList.add('active');

  if (name === 'dashboard') updateDashboard();
  if (name === 'history') renderHistory();
  if (name === 'edit' || name === 'settings') renderEdit();
  if (name === 'log') {
    autoSelectMealTypeByTime();
    buildLocationList();
    setTodayDate();
  }
}

window.showView = showView;

function buildLocationList() {
  const school = SCHOOLS[state.school];
  UI.locationList.innerHTML = school.sections.map(section => `
    <div class="location-section">
      <span class="loc-section-label">${section.label}</span>
      ${section.locs.map(loc => `
        <button class="location-btn" 
          type="button"
          data-name="${loc.name}"
          data-b="${loc.b}"
          data-l="${loc.l}"
          data-d="${loc.d}"
          data-s="${loc.s}"
          data-dh="${loc.isDH || false}">
          <span class="loc-name">${loc.name}</span>
        </button>
      `).join('')}
    </div>
  `).join('');

  selectedLocation = null;
  UI.logLocation.value = '';
  UI.logAmount.value = '';
  if (UI.amountPreview) UI.amountPreview.textContent = '—';
  UI.logNote.value = '';
  UI.swipeActionBtn.style.display = 'none';
  UI.locationSelectorLabel.textContent = state.recentLocation ? `Locations: ${state.recentLocation} ↓` : 'Locations: Select a location ↓';

  if (state.recentLocation) {
    const recentButton = Array.from(document.querySelectorAll('.location-btn'))
      .find(btn => btn.dataset.name === state.recentLocation);
    if (recentButton) {
      selectLocation(recentButton);
    }
  }
}

function selectLocation(button) {
  document.querySelectorAll('.location-btn').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  selectedLocation = button;
  UI.logLocation.value = button.dataset.name;
  UI.locationSelectorLabel.textContent = `Locations: ${button.dataset.name} ↓`;

  state.recentLocation = button.dataset.name;
  if (currentUser) saveUserState(currentUser, state);

  const isDiningHall = button.dataset.dh === 'true';
  UI.swipeActionBtn.style.display = isDiningHall ? 'block' : 'none';
  applyMealPrice();
}
function applyMealPrice() {
  if (!selectedLocation) {
    UI.logAmount.value = '';
    if (UI.amountPreview) UI.amountPreview.textContent = '—';
    return;
  }

  const map = { breakfast: 'b', lunch: 'l', dinner: 'd', snack: 's' };
  const price = parseFloat(selectedLocation.dataset[map[selectedMealType]] || '0');
  UI.logAmount.value = price > 0 ? price.toFixed(2) : '';
  if (UI.amountPreview) UI.amountPreview.textContent = price > 0 ? formatCurrency(price) : '—';
}

function updateAmountPreview() {
  const rawValue = UI.logAmount.value.trim();
  const value = parseFloat(rawValue);
  if (!Number.isNaN(value) && value > 0) {
    if (UI.amountPreview) UI.amountPreview.textContent = formatCurrency(value);
  } else if (rawValue === '0' || rawValue === '0.00') {
    if (UI.amountPreview) UI.amountPreview.textContent = 'Swipe';
  } else {
    if (UI.amountPreview) UI.amountPreview.textContent = '—';
  }
}

function selectMealType(button) {
  document.querySelectorAll('.meal-type-btn').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  selectedMealType = button.dataset.type;
  applyMealPrice();
}

function autoSelectMealTypeByTime() {
  const hour = new Date().getHours();
  let type = 'snack';
  if (hour >= 5 && hour < 11) type = 'breakfast';
  else if (hour >= 11 && hour < 15) type = 'lunch';
  else if (hour >= 15 && hour < 21) type = 'dinner';

  const button = document.querySelector(`.meal-type-btn[data-type="${type}"]`);
  if (button) selectMealType(button);
}

function resetSessionUI() {
  if (UI.authUsername) UI.authUsername.value = '';
  if (UI.authPassword) UI.authPassword.value = '';
  if (UI.setupSchoolDropdown) UI.setupSchoolDropdown.value = 'ncstate';
  if (UI.setupBalance) UI.setupBalance.value = '';
  if (UI.setupDays) UI.setupDays.value = '';
  if (UI.setupSwipes) UI.setupSwipes.value = '';
  if (UI.editSchoolDropdown) UI.editSchoolDropdown.value = 'ncstate';
  if (UI.editBalance) UI.editBalance.value = '';
  if (UI.editDays) UI.editDays.value = '';
  if (UI.editSwipes) UI.editSwipes.value = '';
  if (UI.logLocation) UI.logLocation.value = '';
  if (UI.logAmount) UI.logAmount.value = '';
  if (UI.logNote) UI.logNote.value = '';
  if (UI.logDate) UI.logDate.value = getTodayISO();
  if (UI.amountPreview) UI.amountPreview.textContent = '—';
  if (UI.locationSelectorLabel) UI.locationSelectorLabel.textContent = 'Locations: Select a location ↓';
  if (UI.locationList) UI.locationList.innerHTML = '';
  if (UI.authMessage) UI.authMessage.textContent = '';
  if (UI.swipeActionBtn) UI.swipeActionBtn.style.display = 'none';
  if (UI.logMealBtn) UI.logMealBtn.textContent = 'Save entry →';

  selectedMealType = 'breakfast';
  selectedLocation = null;
  currentEditIndex = null;
}

function resetAppState() {
  Object.assign(state, {
    school: 'ncstate',
    balance: 0,
    daysLeft: 0,
    swipes: 0,
    isUnlimited: false,
    recentLocation: '',
    entries: [],
    sortByWeek: false
  });
}

function handleDeleteClick(buttonElement, entryId) {
  // Check if button is already in "confirm" state
  if (buttonElement.dataset.confirming === "true") {
    // Step 2: Delete on second click
    removeEntryFromStateOrDB(entryId);
  } else {
    // Step 1: Enter confirmation state
    buttonElement.dataset.confirming = "true";
    buttonElement.textContent = "Confirm Delete?";
    buttonElement.style.backgroundColor = "#dc3545"; // Red highlight

    // Reset back to normal after 3 seconds if not clicked again
    setTimeout(() => {
      buttonElement.dataset.confirming = "false";
      buttonElement.textContent = "Delete";
      buttonElement.style.backgroundColor = "";
    }, 3000);
  }
}

async function startTracking() {
  const bal = parseFloat(UI.setupBalance.value);
  const dayCount = parseInt(UI.setupDays.value, 10);
  const swipeRaw = UI.setupSwipes.value.trim().toLowerCase();

  if (Number.isNaN(bal) || Number.isNaN(dayCount) || dayCount < 1) {
    alert('Please enter a valid balance and days remaining.');
    return;
  }

  state.school = UI.setupSchoolDropdown.value;
  state.balance = bal;
  state.daysLeft = dayCount;

  if (swipeRaw === 'unlimited') {
    state.isUnlimited = true;
    state.swipes = 0;
  } else {
    state.isUnlimited = false;
    state.swipes = Math.max(parseInt(swipeRaw, 10) || 0, 0);
  }

  const authUser = auth.currentUser;
  if (authUser) {
    try {
      await saveUserSetupToCloud(authUser.uid, state);
      currentUser = authUser.email || currentUser;
      saveUserState(currentUser, state);
      console.log('startTracking: saved setup to Firestore', { uid: authUser.uid, state });
    } catch (error) {
      console.error('startTracking: failed to save setup to Firestore', error);
    }
  } else {
    console.warn('startTracking: no authenticated user found, saving locally only');
    saveUserState(currentUser, state);
  }

  applySchoolBranding();
  showPageMain();
  showView('dashboard');
}

async function saveUserProfile(uid, setupData) {
  const userDocRef = doc(db, "users", uid);
  await setDoc(userDocRef, {
    school: setupData.school,
    balance: setupData.balance,
    daysLeft: setupData.daysLeft,
    swipes: setupData.swipes,
    isUnlimited: setupData.isUnlimited
  }, { merge: true });
}

// ==========================================
// LOG MEAL & QUICK LOG HANDLER
// ==========================================

async function logMeal(e) {
  if (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  // Ensure date has a fallback to today if user hasn't selected one
  if (UI.logDate && !UI.logDate.value) {
    UI.logDate.value = new Date().toISOString().split('T')[0];
  }

  const location = UI.logLocation.value.trim();
  const rawAmount = UI.logAmount.value.trim();
  const amount = rawAmount === '' ? 0 : parseFloat(rawAmount);
  const rawDate = UI.logDate.value;
  const isDiningHall = selectedLocation?.dataset?.dh === 'true';

  if (!location || Number.isNaN(amount) || !rawDate || (rawAmount === '' && !isDiningHall)) {
    alert('Please fill out location, amount, and date.');
    return;
  }

  const user = auth.currentUser;
  if (!user) {
    alert('You must be logged in to log a meal.');
    return;
  }

  const entryData = {
    type: typeof selectedMealType !== 'undefined' ? selectedMealType : 'meal',
    location,
    amount,
    note: UI.logNote ? UI.logNote.value.trim() : '',
    date: typeof formatDisplayDate === 'function' ? formatDisplayDate(rawDate) : rawDate,
    sortKey: rawDate,
    timestamp: new Date()
  };

  try {
    console.log('Saving meal to cloud in logMeal', { uid: user.uid, entryData });
    
    // YOUR EXACT ORIGINAL CLOUD SAVE CALL
    await saveMealToCloud(user.uid, entryData);
    
    if (typeof currentEditIndex !== 'undefined') currentEditIndex = null;
    if (UI.logMealBtn) UI.logMealBtn.textContent = 'Save entry →';
    
    // Switch view back to dashboard
    if (typeof showView === 'function') showView('dashboard');
  } catch (error) {
    console.error('Failed to log meal:', error);
    alert('Failed to save meal to cloud. Please try again.');
  }
}

// Expose globally so inline HTML onclick always connects
window.logMeal = logMeal;

// ==========================================
// AUTOFILL AVERAGE PRICE ON LOCATION CHANGE
// ==========================================

document.addEventListener('change', (e) => {
  if (e.target && (e.target.id === 'log-location' || e.target === UI?.logLocation)) {
    const selectedVal = e.target.value.trim();
    
    // Find matching location in window.state or local data
    const locationData = window.state?.locations?.find(loc => loc.name === selectedVal);
    
    if (locationData && locationData.averageCost !== undefined && UI?.logAmount) {
      UI.logAmount.value = parseFloat(locationData.averageCost).toFixed(2);
    }
  }
});

function editHistoryEntry(index) {
  const entry = state.entries[index];
  if (!entry) return;

  currentEditIndex = index;
  showView('log');

  const locationButton = Array.from(document.querySelectorAll('.location-btn'))
    .find(btn => btn.dataset.name === entry.location);

  if (locationButton) {
    selectLocation(locationButton);
  } else {
    selectedLocation = null;
    UI.logLocation.value = entry.location;
    UI.swipeActionBtn.style.display = 'none';
  }

  const mealTypeButton = document.querySelector(`.meal-type-btn[data-type="${entry.type}"]`);
  if (mealTypeButton) selectMealType(mealTypeButton);

  UI.logDate.value = entry.sortKey;
  if (entry.amount > 0) {
    UI.logAmount.value = entry.amount.toFixed(2);
    if (UI.amountPreview) UI.amountPreview.textContent = formatCurrency(entry.amount);
  } else {
    UI.logAmount.value = '0.00';
    if (UI.amountPreview) UI.amountPreview.textContent = 'Swipe';
  }
  UI.logNote.value = entry.note || '';
  UI.logMealBtn.textContent = 'Save changes →';
}

async function useSwipe() {
  if (!selectedLocation) {
    alert('Please select a dining hall first.');
    return;
  }

  if (!state.isUnlimited && state.swipes <= 0) {
    alert('No swipes remaining!');
    return;
  }

  const rawDate = UI.logDate.value;
  if (!rawDate) {
    alert('Please select a date.');
    return;
  }

  console.log('useSwipe triggered', { location: UI.logLocation.value, rawDate, selectedMealType });
  console.log('Checking auth.currentUser in useSwipe');
  const user = auth.currentUser;
  if (!user) {
    alert('You must be logged in to use a swipe.');
    return;
  }

  if (!state.isUnlimited) {
    state.swipes -= 1;
  }

  const swipeEntry = {
    type: selectedMealType,
    location: UI.logLocation.value,
    amount: 0,
    note: 'Used Swipe',
    date: formatDisplayDate(rawDate),
    sortKey: rawDate,
    timestamp: new Date()
  };

  try {
    console.log('Saving swipe entry to cloud in useSwipe', { uid: user.uid, swipeEntry });
    await saveMealToCloud(user.uid, swipeEntry);

    state.entries.push(swipeEntry);
    sortEntries();
    saveUserState(currentUser, state);
    showView('dashboard');
  } catch (error) {
    console.error('Failed to save swipe to cloud:', error);
    alert('Failed to save swipe to cloud. Please try again.');
    if (!state.isUnlimited) { 
      state.swipes += 1;
    }
  }
}

async function saveMainData() {
  const balance = parseFloat(UI.editBalance.value);
  const days = parseInt(UI.editDays.value, 10);
  const swipeRaw = (UI.editSwipes.value || '').trim().toLowerCase();

  if (Number.isNaN(balance) || Number.isNaN(days) || days < 1) {
    alert('Please enter a valid balance and days remaining.');
    return;
  }

  state.school = UI.editSchoolDropdown.value;
  state.balance = balance;
  state.daysLeft = days;

  if (swipeRaw === 'unlimited') {
    state.isUnlimited = true;
    state.swipes = 0;
  } else {
    state.isUnlimited = false;
    state.swipes = Math.max(parseInt(swipeRaw, 10) || 0, 0);
  }

  const activeUsername = currentUser || getCurrentUser();
  if (activeUsername) {
    currentUser = activeUsername;
    saveUserState(activeUsername, state);
  }

  const authUser = auth.currentUser;
  if (authUser?.uid) {
    try {
      await saveUserSetupToCloud(authUser.uid, state);
    } catch (error) {
      console.error('saveMainData: failed to save profile to Firestore', error);
    }
  }

  applySchoolBranding();
  updateDashboard();
  if (typeof buildLocationList === 'function') buildLocationList();
  showView('dashboard');
}

function renderHistory() {
  UI.historyContent.innerHTML = '';
  const entries = state.entries || [];
  if (entries.length === 0) {
    UI.historyContent.innerHTML = '<div class="empty-state">No entries yet.</div>';
    return;
  }

  const badgeClasses = {
    breakfast: 'badge-breakfast',
    lunch: 'badge-lunch',
    dinner: 'badge-dinner',
    snack: 'badge-snack'
  };

  if (state.sortByWeek) {
    const entriesByWeek = {};
    state.entries.forEach((entry, index) => {
      const date = new Date(entry.date);
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay()); 
      const weekKey = weekStart.toISOString().split('T')[0];
      
      if (!entriesByWeek[weekKey]) {
        entriesByWeek[weekKey] = [];
      }
      entriesByWeek[weekKey].push({ ...entry, originalIndex: index });
    });

    const sortedWeeks = Object.keys(entriesByWeek).sort((a, b) => new Date(b) - new Date(a));

    UI.historyContent.innerHTML = sortedWeeks.map(weekKey => {
      const weekEntries = entriesByWeek[weekKey];
      const weekStart = new Date(weekKey);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      const weekTotal = weekEntries.reduce((sum, entry) => sum + entry.amount, 0);
      const weekRange = `${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;
      
      return `
        <div class="week-group">
          <div class="week-header">
            <span class="week-title">${weekRange}</span>
            <span class="week-total">${formatCurrency(weekTotal)}</span>
          </div>
          <table class="entry-table">
            <thead>
              <tr><th>Date</th><th>Location</th><th>Note</th><th>Type</th><th>Amount</th><th>Action</th></tr>
            </thead>
            <tbody>
              ${weekEntries.map(entry => `
                <tr class="history-row" data-index="${entry.originalIndex}">
                  <td data-label="Date">${entry.date}</td>
                  <td class="entry-name" data-label="Location">${entry.location}</td>
                  <td data-label="Note">${entry.note ? entry.note : '—'}</td>
                  <td data-label="Type"><span class="type-badge ${badgeClasses[entry.type] || 'badge-snack'}">${entry.type}</span></td>
                  <td class="entry-amount" data-label="Amount">${entry.amount === 0 ? 'Swipe' : formatCurrency(entry.amount)}</td>
                  <td data-label="Actions">
                    <button class="edit-btn" data-index="${entry.originalIndex}">Edit</button>
                    <button class="del-btn" onclick="deleteMealEntry('${entry.id || ''}')">Remove</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }).join('');
  } else {
    UI.historyContent.innerHTML = `
      <table class="entry-table">
        <thead>
          <tr><th>Date</th><th>Location</th><th>Note</th><th>Type</th><th>Amount</th><th>Action</th></tr>
        </thead>
        <tbody>
          ${state.entries.map((entry, index) => `
            <tr class="history-row" data-index="${index}">
              <td data-label="Date">${entry.date}</td>
              <td class="entry-name" data-label="Location">${entry.location}</td>
              <td data-label="Note">${entry.note ? entry.note : '—'}</td>
              <td data-label="Type"><span class="type-badge ${badgeClasses[entry.type] || 'badge-snack'}">${entry.type}</span></td>
              <td class="entry-amount" data-label="Amount">${entry.amount === 0 ? 'Swipe' : formatCurrency(entry.amount)}</td>
              <td data-label="Actions">
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="del-btn" onclick="deleteMealEntry('${entry.id || ''}')">Remove</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
}

function toggleSortByWeek() {
  state.sortByWeek = !state.sortByWeek;
  UI.sortWeekBtn.textContent = state.sortByWeek ? 'Sort Chronologically' : 'Sort by Week';
  renderHistory();
  saveUserState(currentUser, state);
}

function deleteEntry(index) {

  const entry = state.entries[index];
  if (entry && entry.amount === 0 && !state.isUnlimited) {
    state.swipes += 1;
  }

  state.entries.splice(index, 1);
  saveUserState(currentUser, state);
  renderHistory();
  updateDashboard();
}

async function deleteMealEntry(mealId) {
  const user = auth.currentUser;
  if (!user || !mealId) {
    console.warn('deleteMealEntry: missing user or mealId', { user, mealId });
    return;
  }

  try {
    const mealDocRef = doc(db, 'users', user.uid, 'meals', mealId);
    await deleteDoc(mealDocRef);
    console.log('🗑️ Meal deleted successfully from Firestore!', mealId);
  } catch (error) {
    console.error('Error deleting meal:', error);
  }
}

window.deleteMealEntry = deleteMealEntry;

function renderEdit() {
  syncSchoolSearchFields();
  UI.editBalance.value = state.balance.toFixed(2);
  UI.editDays.value = state.daysLeft;
  UI.editSwipes.value = state.isUnlimited ? 'Unlimited' : String(state.swipes);
}

function updateDashboard() {
  const spent = state.entries.reduce((sum, entry) => sum + entry.amount, 0);
  const remaining = Math.max(state.balance - spent, 0);
  const spentPct = state.balance > 0 ? Math.min(spent / state.balance, 1) : 0;
  const remainPct = 1 - spentPct;

  UI.ringAmount.textContent = formatCurrency(remaining);
  UI.ringSpentArc.setAttribute('stroke-dashoffset', (CIRC * (1 - spentPct)).toFixed(2));

  UI.dashSwipesLarge.textContent = state.isUnlimited ? 'Unlimited' : String(state.swipes);
  UI.statSpent.textContent = formatCurrency(spent);
  UI.statDays.textContent = String(state.daysLeft);

  const uniqueDays = state.entries.length > 0 ? new Set(state.entries.map(entry => entry.sortKey)).size : 0;
  const daysPassed = Math.max(uniqueDays, 1);
  const safeSpendPerDay = state.daysLeft > 0 ? remaining / state.daysLeft : 0;
  const avgSpendPerDay = spent / daysPassed;
  const spendDiff = avgSpendPerDay - safeSpendPerDay;

  UI.statDailyAvg.textContent = formatCurrency(avgSpendPerDay);
  UI.statSuggested.textContent = formatCurrency(safeSpendPerDay);

  let statusClass = 'status-on-track';
  let insightClass = 'status-on-track';
  let insightText = 'Start logging meals to see insights';
  let statusText = 'On Track';
  let diffText = '';

  if (spent > 0 && state.daysLeft > 0) {
    if (avgSpendPerDay > safeSpendPerDay) {
      const diffAmount = avgSpendPerDay - safeSpendPerDay;
      const threshold = Math.max(2, safeSpendPerDay * 0.1);
      
      if (diffAmount <= threshold) {
        statusClass = 'status-slightly-over';
        insightClass = 'status-slightly-over';
        statusText = 'Slightly Over';
        insightText = 'You\'re on track to run out early ⚠️';
        diffText = `Over by ${formatCurrency(diffAmount)}/day`;
      } else {
        statusClass = 'status-over';
        insightClass = 'status-over';
        statusText = 'Over Budget';
        insightText = `Try to stay under ${formatCurrency(safeSpendPerDay)}/day`;
        diffText = `Over by ${formatCurrency(diffAmount)}/day`;
      }
    } else {
      const projectedRemaining = remaining - (avgSpendPerDay * state.daysLeft);
      const projectedFinal = Math.max(projectedRemaining, 0);
      statusClass = 'status-on-track';
      insightClass = 'status-on-track';
      statusText = 'On Track';
      insightText = `You'll have ${formatCurrency(projectedFinal)} left 👍`;
      if (avgSpendPerDay > 0) {
        const diffAmount = safeSpendPerDay - avgSpendPerDay;
        diffText = `Under by ${formatCurrency(diffAmount)}/day`;
      }
    }
  } else if (state.daysLeft > 0 && state.balance > 0) {
    insightText = `You can spend ~${formatCurrency(safeSpendPerDay)}/day and be fine.`;
  }

  UI.insightMessage.textContent = insightText;
  UI.insightMessage.classList.remove('status-on-track', 'status-slightly-over', 'status-over');
  UI.insightCard.classList.remove('status-on-track', 'status-slightly-over', 'status-over');
  UI.insightMessage.classList.add(insightClass);
  UI.insightCard.classList.add(insightClass);

  UI.statSuggested.classList.remove('status-on-track', 'status-slightly-over', 'status-over');
  UI.statusLabel.classList.remove('status-on-track', 'status-slightly-over', 'status-over');
  UI.statusCard.classList.remove('status-on-track', 'status-slightly-over', 'status-over');

  UI.statusLabel.textContent = statusText;
  UI.statusDiff.textContent = diffText;
  UI.statSuggested.classList.add(statusClass);
  UI.statusLabel.classList.add(statusClass);
  UI.statusCard.classList.add(statusClass);

  const locationSpend = {};
  state.entries.forEach(entry => {
    if (entry.amount > 0) {
      locationSpend[entry.location] = (locationSpend[entry.location] || 0) + entry.amount;
    }
  });

  const sortedLocations = Object.entries(locationSpend)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (sortedLocations.length === 0) {
    UI.topLocationsContainer.innerHTML = '<div class="empty-placeholder">Start spending to see your top spots</div>';
  } else {
    const maxSpend = sortedLocations[0][1];
    UI.topLocationsContainer.innerHTML = sortedLocations.map(([location, amount]) => {
      const percentage = ((amount / spent) * 100).toFixed(0);
      const barWidth = ((amount / maxSpend) * 100).toFixed(1);
      return `
        <div class="location-item">
          <div class="location-header">
            <span class="location-name">${location}</span>
            <span class="location-amount">${formatCurrency(amount)}</span>
          </div>
          <div class="location-bar-container">
            <div class="location-bar" style="width: ${barWidth}%"></div>
            <span class="location-percentage">${percentage}%</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

function setTodayDate() {
  UI.logDate.value = getTodayISO();
}

function sortEntries() {
  state.entries.sort((a, b) => b.sortKey.localeCompare(a.sortKey));
}

function resetAll() {
  if (!confirm('This will permanently delete all your settings and history. Continue?')) return;
  saveUserState(currentUser, { school: 'ncstate', balance: 0, daysLeft: 0, swipes: 0, isUnlimited: false, entries: [] });
  Object.assign(state, { school: 'ncstate', balance: 0, daysLeft: 0, swipes: 0, isUnlimited: false, entries: [] });
  renderHistory();
  updateDashboard();
  showView('dashboard');
}

function exportUsers() {
  const users = getUsers();
  const dataStr = JSON.stringify(users, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'users.json';
  link.click();
  URL.revokeObjectURL(url);
}

function importUsers(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const users = JSON.parse(e.target.result);
      saveUsers(users);
      alert('Users imported successfully.');
    } catch (err) {
      alert('Invalid JSON file.');
    }
  };
  reader.readAsText(file);
}

let profileListenerUnsub = null;
let mealsListenerUnsub = null;

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("app.js: Active user detected:", user.uid);
        currentUser = user.email;

        
        if (profileListenerUnsub) {
            profileListenerUnsub();
            profileListenerUnsub = null;
        }
        if (mealsListenerUnsub) {
            mealsListenerUnsub();
            mealsListenerUnsub = null;
        }

        const userDocRef = doc(db, "users", user.uid);
        const mealsCollectionRef = collection(db, "users", user.uid, "meals");
        const mealsQuery = query(mealsCollectionRef, orderBy('sortKey', 'desc'));

        profileListenerUnsub = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const profileData = docSnap.data();
            console.log("🔥 FIRESTORE SNAPSHOT FIRED WITH DATA:", docSnap.data());
            state.school = profileData.school || state.school;
            syncSchoolSearchFields();
            state.balance = profileData.balance !== undefined ? profileData.balance : state.balance;
            state.daysLeft = profileData.daysLeft !== undefined ? profileData.daysLeft : state.daysLeft;
            state.swipes = profileData.swipes !== undefined ? profileData.swipes : state.swipes;
            state.isUnlimited = profileData.isUnlimited !== undefined ? profileData.isUnlimited : state.isUnlimited;

            console.log("☁️ Real-time Profile Sync Loaded:", { balance: state.balance, days: state.daysLeft });

            if (typeof applySchoolBranding === "function") applySchoolBranding();
            if (typeof updateDashboard === "function") updateDashboard();
            if (typeof renderDashboard === "function") renderDashboard();
            if (typeof showPageMain === "function") showPageMain(); 
          } else {
            console.log("No profile found for user, directing to setup.");
            if (typeof showPageSetup === "function") {
              showPageSetup();
              if (typeof applySetupBranding === "function") applySetupBranding();
            }
          }
        }, (error) => {
          console.error("Profile listener error:", error);
        });

        mealsListenerUnsub = onSnapshot(mealsQuery, (querySnapshot) => {
            const updatedMeals = [];
            querySnapshot.forEach((doc) => {
                updatedMeals.push({ id: doc.id, ...doc.data() });
            });

            state.entries = updatedMeals;
            window.state.entries = updatedMeals;
            console.log(`☁️ Real-time Meals Sync: ${state.entries.length} meals compiled.`);

            if (typeof updateDashboard === "function") updateDashboard();
            if (typeof renderDashboard === "function") renderDashboard();
            if (typeof renderHistory === "function") renderHistory();
        }, (error) => {
          console.error("Meals listener error:", error);
        });

    } else {
        console.log("User signed out. Clearing memory streams.");
        currentUser = null;

        
        if (profileListenerUnsub) {
            profileListenerUnsub();
            profileListenerUnsub = null;
        }
        if (mealsListenerUnsub) {
            mealsListenerUnsub();
            mealsListenerUnsub = null;
        }

        resetAppState();
        resetSessionUI();

        if (UI.historyContent) {
          UI.historyContent.innerHTML = '<div class="empty-state">No entries yet.</div>';
        }
        if (UI.topLocationsContainer) {
            UI.topLocationsContainer.innerHTML = '<div class="empty-placeholder">Start spending to see your top spots</div>';
        }
        if (UI.ringAmount) UI.ringAmount.textContent = formatCurrency(0);
        if (UI.dashSwipesLarge) UI.dashSwipesLarge.textContent = '0';
        if (UI.statSpent) UI.statSpent.textContent = formatCurrency(0);
        if (UI.statDays) UI.statDays.textContent = '0';
        if (UI.statDailyAvg) UI.statDailyAvg.textContent = formatCurrency(0);
        if (UI.statSuggested) UI.statSuggested.textContent = formatCurrency(0);
        if (UI.insightMessage) UI.insightMessage.textContent = 'Sign in to start tracking';
        if (UI.statusLabel) UI.statusLabel.textContent = 'On Track';
        if (UI.statusDiff) UI.statusDiff.textContent = '';

        if (window.spentChartInstance) {
            window.spentChartInstance.destroy();
            window.spentChartInstance = null;
        }
        if (window.topPlacesChartInstance) {
            window.topPlacesChartInstance.destroy();
            window.topPlacesChartInstance = null;
        }

        if (typeof showPageAuth === "function") {
          showPageAuth();
        }
    }
      if (user) {
        console.log("app.js: Active user detected:", user.uid);
        currentUser = user.email;

        if (typeof showPageMain === "function") {
          showPageMain();
        } else {
          const authPage = document.getElementById('auth-page');
          const mainPage = document.getElementById('main-page');
          if (authPage) authPage.style.display = 'none';
          if (mainPage) mainPage.style.display = 'block';
        }

      } else {
        console.log("User signed out.");
        if (typeof showPageAuth === "function") {
          showPageAuth();
        }
      }
});

async function handleSignup(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const email = UI.authUsername?.value.trim() || '';
  const password = UI.authPassword?.value || '';

  if (!email) {
    alert('Please enter your email address.');
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }
  if (!password) {
    alert('Please enter a password.');
    return;
  }
  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  if (auth.currentUser) {
    await logout();
  }

  const result = await signup(email, password);
  if (!result.success) {
    console.error('Signup error:', result.code, result.message);
    if (result.code === 'auth/email-already-in-use') {
      alert('This email is already registered. Try logging in instead.');
    } else {
      alert('Signup failed: ' + (result.message || 'Unknown error'));
    }
  } else {
    console.log('✅ Signup successful!');
  }
}

if (UI.setupForm) {
    UI.setupForm.addEventListener('submit', handleSetupSubmit);
} 
else if (UI.setupSaveButton) {
    UI.setupSaveButton.addEventListener('click', handleSetupSubmit);
}

async function handleSignin(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const email = UI.authUsername?.value.trim() || '';
  const password = UI.authPassword?.value || '';

  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  const result = await login(email, password);
  if (!result.success) {
    console.error('Login error:', result.message);
    alert('Login failed: ' + (result.message || 'Unknown error'));
  } else {
    console.log('✅ Login successful!');
  }
}

// =========================================================
// BULLETPROOF STEPPER & AVERAGE LOGIC (ZERO DEPENDENCIES)
// =========================================================

// 1. Stepper Buttons (-$1 / +$1)
document.addEventListener('click', (e) => {
  const minusBtn = e.target.closest('#btn-amount-minus');
  const plusBtn = e.target.closest('#btn-amount-plus');

  if (minusBtn || plusBtn) {
    e.preventDefault();
    e.stopPropagation();

    const amountInput = document.getElementById('log-amount');
    const previewEl = document.getElementById('amount-preview');
    if (!amountInput) return;

    let currentVal = parseFloat(amountInput.value);
    if (Number.isNaN(currentVal)) currentVal = 0;

    let newVal = currentVal;
    if (minusBtn) {
      newVal = Math.max(0, currentVal - 1.00);
    } else if (plusBtn) {
      newVal = currentVal + 1.00;
    }

    const formatted = newVal.toFixed(2);
    amountInput.value = formatted;

    if (previewEl) {
      previewEl.textContent = `$${formatted}`;
    }
  }
});

// 2. Location Average Autofill
document.addEventListener('change', (e) => {
  if (e.target && e.target.id === 'log-location') {
    const locName = e.target.value ? e.target.value.trim() : '';
    const amountInput = document.getElementById('log-amount');
    const previewEl = document.getElementById('amount-preview');
    
    if (!locName || !amountInput) return;

    try {
      const meals = (window.state && Array.isArray(window.state.meals)) ? window.state.meals : [];
      const pastMeals = meals.filter(m => m && m.location === locName && Number(m.amount) > 0);

      let avg = null;
      if (pastMeals.length > 0) {
        const total = pastMeals.reduce((sum, m) => sum + Number(m.amount || 0), 0);
        avg = (total / pastMeals.length).toFixed(2);
      } else if (window.state && Array.isArray(window.state.locations)) {
        const locData = window.state.locations.find(l => l && l.name === locName);
        if (locData && locData.averageCost !== undefined) {
          avg = parseFloat(locData.averageCost).toFixed(2);
        }
      }

      if (avg !== null) {
        amountInput.value = avg;
        if (previewEl) previewEl.textContent = `$${avg}`;
      }
    } catch (err) {
      console.warn('Location avg notice:', err);
    }
  }
});

// =========================================================
// UNIVERSAL VIEW SWITCHER & RENDER FALLBACKS
// =========================================================

// 1. Standalone History Renderer
window.renderHistory = function() {
  console.log('[App] Rendering History View...');
  const historyView = document.getElementById('view-history');
  if (!historyView) return;

  const meals = (window.state && Array.isArray(window.state.meals)) ? window.state.meals : [];
  const listContainer = document.getElementById('history-list') || historyView;

  if (meals.length === 0) {
    const emptyEl = document.getElementById('history-list');
    if (emptyEl) {
      emptyEl.innerHTML = `<div style="text-align:center; padding: 2rem; color: #9ca3af;">No logged meals found.</div>`;
    }
    return;
  }

  const listEl = document.getElementById('history-list');
  if (listEl) {
    listEl.innerHTML = meals.map(m => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding: 12px; border-bottom: 1px solid #374151;">
        <div>
          <div style="font-weight:bold; color:#fff;">${m.location || 'Meal Entry'}</div>
          <div style="font-size:12px; color:#9ca3af;">${m.date || ''} • ${m.type || 'Meal'}</div>
        </div>
        <div style="font-weight:bold; color:#fbbf24;">$${parseFloat(m.amount || 0).toFixed(2)}</div>
      </div>
    `).join('');
  }
};

// 2. Standalone Settings Renderer
window.renderSettings = function() {
  console.log('[App] Rendering Settings View...');
};

// 3. Fail-Safe Global showView Function
window.showView = function(viewName) {
  console.log('[App] Switching to view:', viewName);

  // Hide all views
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
    v.style.display = 'none';
  });

  // Target view element
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add('active');
    target.style.display = 'flex';
  } else {
    console.error(`[App] HTML wrapper missing: id="view-${viewName}"`);
    return;
  }

  // Update Nav Pill Active states
  document.querySelectorAll('[data-view]').forEach(btn => {
    if (btn.getAttribute('data-view') === viewName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Execute Renderers
  if (viewName === 'history' && typeof window.renderHistory === 'function') {
    window.renderHistory();
  }
  if (viewName === 'settings' && typeof window.renderSettings === 'function') {
    window.renderSettings();
  }
};

// 4. Global Event Listener for Nav Tabs
document.addEventListener('click', (e) => {
  const navBtn = e.target.closest('[data-view]');
  if (navBtn) {
    e.preventDefault();
    const targetView = navBtn.getAttribute('data-view');
    window.showView(targetView);
  }
});

init();

// ==========================================
// ACCOUNT DELETION
// ==========================================
export async function handleDeleteAccount() {
  const user = auth.currentUser;
  if (!user) {
    alert('No authenticated user found. Please sign in.');
    return;
  }

  const confirmDelete = confirm('This will permanently delete your account and all associated data. Are you sure you want to continue?');
  if (!confirmDelete) return;

  try {
    // Delete all documents in users/{uid}/transactions (or meals)
    const txCol = collection(db, 'users', user.uid, 'transactions');
    const txSnapshot = await getDocs(txCol);
    const deletePromises = [];
    txSnapshot.forEach(docSnap => {
      const dref = doc(db, 'users', user.uid, 'transactions', docSnap.id);
      deletePromises.push(deleteDoc(dref));
    });

    // also delete meals subcollection if present
    const mealsCol = collection(db, 'users', user.uid, 'meals');
    const mealsSnapshot = await getDocs(mealsCol);
    mealsSnapshot.forEach(docSnap => {
      const dref = doc(db, 'users', user.uid, 'meals', docSnap.id);
      deletePromises.push(deleteDoc(dref));
    });

    await Promise.all(deletePromises);

    // Delete main user document
    const userDocRef = doc(db, 'users', user.uid);
    await deleteDoc(userDocRef);

    // Unsubscribe any active listener stored on window
    if (window.unsubscribeFirestore && typeof window.unsubscribeFirestore === 'function') {
      try { window.unsubscribeFirestore(); } catch (e) { console.warn('Error unsubscribing:', e); }
      window.unsubscribeFirestore = null;
    }

    // Delete auth user
    await deleteUser(user);

    alert('Account deleted. If you still see data, please sign out and sign back in.');
    handleLogout();
  } catch (err) {
    console.error('Error deleting account:', err);
    if (err && err.code === 'auth/requires-recent-login') {
      alert('For security, please sign out and sign back in, then try again.');
      return;
    }
    alert('Failed to delete account. See console for details.');
  }
}

