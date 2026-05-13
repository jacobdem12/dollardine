export const STORAGE_KEY = 'diningState';

export function formatCurrency(value) {
  return '$' + value.toFixed(2);
}

export function formatDisplayDate(rawDate) {
  if (!rawDate) return '';
  const [year, month, day] = rawDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getTodayISO() {
  return new Date().toISOString().split('T')[0];
}

export function safeParseNumber(value, defaultValue = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : defaultValue;
}
