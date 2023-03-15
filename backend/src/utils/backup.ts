export function getTime() {
  return new Date(Date.now()).toLocaleString('vi').split(' ')[1];
}
