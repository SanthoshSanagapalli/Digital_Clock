function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = time;
  const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
  const date = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = date;
}
setInterval(updateClock, 1000);
updateClock();
