var time = document.getElementById("time");

function displayClock() {
  var display = new Date().toLocaleTimeString();
  time.innerHTML = display;
}

function startTime() {
  intervalId = setInterval(displayClock, 1000);
}

function stopTime() {
  clearInterval(intervalId);
}

time.innerHTML = displayClock();
//////////
let secondElapsed = 0;
let interval = null;
const time22 = document.getElementById("time2");
function padStart(value) {
  return String(value).padStart(2, "0");
}
function setTime() {
  const min = Math.floor(secondElapsed / 60);
  const sec = secondElapsed % 60;
  time22.innerHTML = `${padStart(min)}:${padStart(sec)}`;
}
function timer() {
  secondElapsed++;
  setTime();
}
function start1() {
  if (interval) stop1();
  interval = setInterval(timer, 1000);
}

function stop1() {
  clearInterval(interval);
}
function resetClock() {
  stop();
  secondElapsed = 0;
  setTime();
}
