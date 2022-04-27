function updateStorage(min, sec, hour) {
  localStorage.setItem("minute", min);
  localStorage.setItem("second", sec);
  localStorage.setItem("hour", hour);
}
function clearStorage() {
  localStorage.removeItem("hour");
  localStorage.removeItem("minute");
  localStorage.removeItem("second");
}
function getHourFromStorage() {
  return JSON.parse(localStorage.getItem("hour"));
}
function getMinuteFromStorage() {
  return JSON.parse(localStorage.getItem("minute"));
}
function getSecondFromStorage() {
  return JSON.parse(localStorage.getItem("second"));
}
