let myInt;
startButton.onclick = () => {
  myInt = setInterval(() => {
    count();
    updateTimer(minuteCounter, secondCounter, hourCounter);
    updateStorage(minuteCounter, secondCounter, hourCounter);
  }, 1000);
};
stopButton.onclick = () => {
  clearInterval(myInt);
};
resetButton.onclick = () => {
  timer.textContent = "00:00:00";
  secondCounter = 0;
  minuteCounter = 0;
  hourCounter = 0;
  clearStorage();
};
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("hour") != null) {
    timer.textContent = `${getHourFromStorage()}:${getMinuteFromStorage()}:${getSecondFromStorage()}`;
  }
});
