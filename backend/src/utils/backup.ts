export function getToday() {
  return new Date(Date.now()).toLocaleString('vi').split(' ')[1];
}

export function getTimeNow() {
  return new Date(Date.now()).toLocaleString('vi');
}
