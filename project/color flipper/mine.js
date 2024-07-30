const body = document.getElementsByTagName("body")[0];
body.style.background = "#C0C0C0";
const boxColorSet = document.getElementById("boxColorSet");
function setColor(name) {
  boxColorSet.style.background = name;
}
function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red}, ${green},${blue})`;
  boxColorSet.style.backgroundColor = color;
}
