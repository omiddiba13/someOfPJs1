const prompt = require("prompt-sync")();

let wins = 0;
let lose = 0;
let ties = 0;
while (true) {
  const playerCh = prompt("enter rock , paper , scissors (or Q to quit): ");
  if (playerCh.toUpperCase() === "Q") {
    break;
  }
  if (playerCh !== "rock" && playerCh !== "paper" && playerCh !== "scissors") {
    console.log("not rock or others!!! : try again: ");
    continue;
  }

  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * 2);
  const ComCH = choices[randomIndex];
  if (ComCH === playerCh) {
    console.log("draw");
    ties++;
  } else if (
    (playerCh === "paper" && ComCH === "rock") ||
    (playerCh === "rock" && ComCH === "scissors") ||
    (playerCh === "scissors" && ComCH === "paper")
  ) {
    console.log("won!");
    wins++;
  } else {
    console.log("lose!");
    lose++;
  }
  console.log(ComCH);
}
console.log("wins:", wins, "lose:", lose, "draw:", ties);
