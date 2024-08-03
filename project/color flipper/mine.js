document.body.style.backgroundColor = "#C0C0C0";

function setColor(color) {
  document.getElementById("boxColorSet").style.backgroundColor = color;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("boxColorSet").style.backgroundColor = color;
}
