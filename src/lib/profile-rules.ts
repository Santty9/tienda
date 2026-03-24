const NAME_CHANGE_DAYS = 30;
const USERNAME_CHANGE_DAYS = 30;

export function canChangeName(lastChangedAt: Date | null) {
  if (!lastChangedAt) return true;
  const nextAllowed = new Date(lastChangedAt);
  nextAllowed.setDate(nextAllowed.getDate() + NAME_CHANGE_DAYS);
  return new Date() >= nextAllowed;
}

export function canChangeUsername(lastChangedAt: Date | null) {
  if (!lastChangedAt) return true;
  const nextAllowed = new Date(lastChangedAt);
  nextAllowed.setDate(nextAllowed.getDate() + USERNAME_CHANGE_DAYS);
  return new Date() >= nextAllowed;
}

export function daysLeftForName(lastChangedAt: Date | null) {
  if (!lastChangedAt) return 0;
  const nextAllowed = new Date(lastChangedAt);
  nextAllowed.setDate(nextAllowed.getDate() + NAME_CHANGE_DAYS);

  const diff = nextAllowed.getTime() - Date.now();
  if (diff <= 0) return 0;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function daysLeftForUsername(lastChangedAt: Date | null) {
  if (!lastChangedAt) return 0;
  const nextAllowed = new Date(lastChangedAt);
  nextAllowed.setDate(nextAllowed.getDate() + USERNAME_CHANGE_DAYS);

  const diff = nextAllowed.getTime() - Date.now();
  if (diff <= 0) return 0;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}