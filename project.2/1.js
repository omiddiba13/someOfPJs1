const prompt = require("prompt-sync")();
const answerOne = prompt("whats the answer One?  ");
const correctAone = "ONE";
const answerTow = prompt("whats the answer YES?  ");
const answerATow = "YES";
const totalQA = 2;
let nice = 0;

if (answerOne.toUpperCase() === correctAone) {
  console.log("nice");
  nice++;
} else {
  console.log("not nice one !!");
}
if (answerTow.toUpperCase() === answerATow) {
  console.log("nice");
  nice++;
} else {
  console.log("not nice one !!");
}

const percent = Math.round((nice / totalQA) * 100);

console.log("you score", percent, "percent");
