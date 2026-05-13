import { SCHOOLS } from './data.js';
import { formatCurrency, formatDisplayDate, getTodayISO } from './utils.js';
import { loadState, saveState, resetState } from './storage.js';
import { signup, login, logout, getCurrentUser, getUserState, saveUserState, getUsers, saveUsers } from './auth.js';

const state = {
  school: 'ncstate',
  balance: 0,
  daysLeft: 0,
  swipes: 0,
  isUnlimited: false,
  recentLocation: '',
  entries: [],
  sortByWeek: false
};

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
  loginBtn: document.getElementById('login-btn'),
  signupBtn: document.getElementById('signup-btn'),
  authMessage: document.getElementById('auth-message'),
  setupSchoolDropdown: document.getElementById('setup-school-dropdown'),
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
  ringRemainArc: document.getElementById('ring-remain-arc'),
  ringSpentArc: document.getElementById('ring-spent-arc'),
  ringAmount: document.getElementById('ring-amount'),
  ringSpentLabel: document.getElementById('ring-spent-label'),
  statSpent: document.getElementById('stat-spent'),
  statDays: document.getElementById('stat-days'),
  statDailyAvg: document.getElementById('stat-daily-avg'),
  statSuggested: document.getElementById('stat-suggested'),
  avgBreakfast: document.getElementById('avg-breakfast'),
  avgLunch: document.getElementById('avg-lunch'),
  avgDinner: document.getElementById('avg-dinner'),
  avgSnacks: document.getElementById('avg-snacks'),
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
  editBalance: document.getElementById('edit-balance'),
  editDays: document.getElementById('edit-days'),
  editSwipes: document.getElementById('edit-swipes'),
  saveMainDataBtn: document.getElementById('save-main-data-btn'),
  cancelSettingsBtn: document.getElementById('cancel-settings-btn'),
  logoutMainBtn: document.getElementById('logout-main-btn'),
  exportUsersBtn: document.getElementById('export-users-btn'),
  importUsersBtn: document.getElementById('import-users-btn'),
  importUsersInput: document.getElementById('import-users-input')
};

function init() {
  currentUser = getCurrentUser();
  if (currentUser) {
    const userState = getUserState(currentUser);
    if (userState) {
      Object.assign(state, userState);
      applySchoolBranding();
      showPageMain();
      showView('dashboard');
    } else {
      showPageSetup();
      applySetupBranding();
    }
  } else {
    showPageAuth();
  }
  initUI();
}

function initUI() {
  UI.loginBtn.addEventListener('click', handleLogin);
  UI.signupBtn.addEventListener('click', handleSignup);
  UI.setupSchoolDropdown.addEventListener('change', onSetupSchoolChange);
  UI.startTrackingBtn.addEventListener('click', startTracking);
  UI.logoutBtn.addEventListener('click', handleLogout);
  UI.mobileMenuTrigger.addEventListener('click', toggleMobileNav);
  UI.mobileNavItems.forEach(btn => btn.addEventListener('click', () => {
    if (btn.id === 'logout-mobile-btn') return handleLogout();
    const view = btn.dataset.view;
    if (view) navTo(view);
  }));
  UI.navPills.forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));
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
  UI.historyContent.addEventListener('click', event => {
    const editBtn = event.target.closest('.edit-btn');
    const delBtn = event.target.closest('.del-btn');
    if (editBtn) return editHistoryEntry(Number(editBtn.dataset.index));
    if (delBtn) return deleteEntry(Number(delBtn.dataset.index));

    const row = event.target.closest('.history-row');
    if (row) return editHistoryEntry(Number(row.dataset.index));
  });
  UI.logDate.value = getTodayISO();
}

// Add this to app.js
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

function onSetupSchoolChange(event) {
  state.school = event.target.value;
  applySetupBranding();
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

function handleSignup() {
  const username = UI.authUsername.value.trim();
  const password = UI.authPassword.value;
  if (!username || !password) {
    UI.authMessage.textContent = 'Please enter username and password.';
    return;
  }
  const result = signup(username, password);
  if (result.success) {
    currentUser = username;
    showPageSetup();
    applySetupBranding();
  } else {
    UI.authMessage.textContent = result.message;
  }
}

function handleLogout() {
  logout();
  currentUser = null;
  Object.assign(state, { school: 'ncstate', balance: 0, daysLeft: 0, swipes: 0, isUnlimited: false, entries: [] });
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
  const view = document.getElementById(`view-${name}`);
  if (!view) return;

  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  UI.navPills.forEach(btn => btn.classList.remove('active'));

  closeLocationDropdown();
  closeMobileNav();

  view.classList.add('active');
  const activeNav = UI.navPills.find(btn => btn.dataset.view === name);
  if (activeNav) activeNav.classList.add('active');

  if (name === 'dashboard') updateDashboard();
  if (name === 'history') renderHistory();
  if (name === 'edit') renderEdit();
  if (name === 'log') {
    buildLocationList();
    setTodayDate();
  }
}

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
  UI.amountPreview.textContent = '—';
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
    UI.amountPreview.textContent = '—';
    return;
  }

  const map = { breakfast: 'b', lunch: 'l', dinner: 'd', snack: 's' };
  const price = parseFloat(selectedLocation.dataset[map[selectedMealType]] || '0');
  UI.logAmount.value = price > 0 ? price.toFixed(2) : '';
  UI.amountPreview.textContent = price > 0 ? formatCurrency(price) : '—';
}

function updateAmountPreview() {
  const rawValue = UI.logAmount.value.trim();
  const value = parseFloat(rawValue);
  if (!Number.isNaN(value) && value > 0) {
    UI.amountPreview.textContent = formatCurrency(value);
  } else if (rawValue === '0' || rawValue === '0.00') {
    UI.amountPreview.textContent = 'Swipe';
  } else {
    UI.amountPreview.textContent = '—';
  }
}

function selectMealType(button) {
  document.querySelectorAll('.meal-type-btn').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  selectedMealType = button.dataset.type;
  applyMealPrice();
}

function startTracking() {
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

  saveUserState(currentUser, state);
  applySchoolBranding();
  showPageMain();
  showView('dashboard');
}

function logMeal() {
  const location = UI.logLocation.value.trim();
  const rawAmount = UI.logAmount.value.trim();
  const amount = rawAmount === '' ? 0 : parseFloat(rawAmount);
  const rawDate = UI.logDate.value;

  const isDiningHall = selectedLocation?.dataset.dh === 'true';
  if (!location || Number.isNaN(amount) || !rawDate || (rawAmount === '' && !isDiningHall)) {
    alert('Please fill out location, amount, and date.');
    return;
  }

  const entryData = {
    type: selectedMealType,
    location,
    amount,
    note: UI.logNote.value.trim(),
    date: formatDisplayDate(rawDate),
    sortKey: rawDate
  };

  if (currentEditIndex !== null) {
    state.entries[currentEditIndex] = entryData;
    currentEditIndex = null;
    UI.logMealBtn.textContent = 'Save entry →';
  } else {
    state.entries.push(entryData);
  }

  sortEntries();
  saveUserState(currentUser, state);
  showView('dashboard');
}

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
    UI.amountPreview.textContent = formatCurrency(entry.amount);
  } else {
    UI.logAmount.value = '0.00';
    UI.amountPreview.textContent = 'Swipe';
  }
  UI.logNote.value = entry.note || '';
  UI.logMealBtn.textContent = 'Save changes →';
}

function useSwipe() {
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

  if (!state.isUnlimited) {
    state.swipes -= 1;
  }

  state.entries.push({
    type: selectedMealType,
    location: UI.logLocation.value,
    amount: 0,
    note: 'Used Swipe',
    date: formatDisplayDate(rawDate),
    sortKey: rawDate
  });

  sortEntries();
  saveUserState(currentUser, state);
  showView('dashboard');
}

function saveMainData() {
  const balance = parseFloat(UI.editBalance.value);
  const days = parseInt(UI.editDays.value, 10);
  const swipeRaw = UI.editSwipes.value.trim().toLowerCase();

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

  saveUserState(currentUser, state);
  applySchoolBranding();
  buildLocationList();
  showView('dashboard');
}

function renderHistory() {
  if (state.entries.length === 0) {
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
    // Group entries by week
    const entriesByWeek = {};
    state.entries.forEach((entry, index) => {
      const date = new Date(entry.date);
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay()); // Start of week (Sunday)
      const weekKey = weekStart.toISOString().split('T')[0];
      
      if (!entriesByWeek[weekKey]) {
        entriesByWeek[weekKey] = [];
      }
      entriesByWeek[weekKey].push({ ...entry, originalIndex: index });
    });

    // Sort weeks in descending order (most recent first)
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
                    <button class="del-btn" data-index="${entry.originalIndex}">Remove</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }).join('');
  } else {
    // Default chronological view
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
                <button class="del-btn" data-index="${index}">Remove</button>
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

function renderEdit() {
  UI.editSchoolDropdown.value = state.school;
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
  UI.ringSpentLabel.textContent = `spent ${formatCurrency(spent)}`;
  UI.ringRemainArc.setAttribute('stroke-dashoffset', (CIRC * spentPct).toFixed(2));
  UI.ringSpentArc.setAttribute('stroke-dashoffset', (CIRC * remainPct).toFixed(2));

  UI.dashSwipesLarge.textContent = state.isUnlimited ? 'Unlimited' : String(state.swipes);
  UI.statSpent.textContent = formatCurrency(spent);
  UI.statDays.textContent = String(state.daysLeft);

  const uniqueDays = state.entries.length > 0 ? new Set(state.entries.map(entry => entry.sortKey)).size : 0;
  UI.statDailyAvg.textContent = formatCurrency(uniqueDays > 0 ? spent / uniqueDays : 0);
  UI.statSuggested.textContent = formatCurrency(state.daysLeft > 0 ? remaining / state.daysLeft : 0);

  const typeValues = {
    breakfast: UI.avgBreakfast,
    lunch: UI.avgLunch,
    dinner: UI.avgDinner,
    snack: UI.avgSnacks
  };

  Object.entries(typeValues).forEach(([type, element]) => {
    const entries = state.entries.filter(entry => entry.type === type && entry.amount > 0);
    const avg = entries.length > 0 ? entries.reduce((sum, entry) => sum + entry.amount, 0) / entries.length : null;
    element.textContent = avg !== null ? formatCurrency(avg) : '—';
  });
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

init();
