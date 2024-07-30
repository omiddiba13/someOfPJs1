const prompt = require("prompt-sync")();
const target = Math.round(Math.random() * 100);
console.log(target);
let guesses = 0;
while (true) {
  guesses++;
  const guess = Number(prompt("guess the Number(0-100): "));

  if (guess > target) {
    console.log("your guess is to high");
  } else if (guess < target) {
    console.log("your guess is to low");
  } else {
    console.log("your guess right");
    break;
  }
  continue;
}
console.log("you number guess", guesses);
