const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
let secondCounter = parseInt(second.textContent);
let minuteCounter = parseInt(minute.textContent);
let hourCounter = parseInt(hour.textContent);

function count() {
  if (secondCounter == 59 && minuteCounter != 59) {
    minuteCounter++;
    secondCounter = "00";
  } else if (minuteCounter == 59 && secondCounter == 59) {
    hourCounter++;
    secondCounter = "00";
  } else {
    secondCounter++;
  }
}
function updateTimer(min, sec, hour) {
  timer.textContent = `${hour}:${min}:${sec}`;
}
