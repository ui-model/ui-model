export function nextTick(callback: () => void): void {
  Promise.resolve().then(callback);
}
