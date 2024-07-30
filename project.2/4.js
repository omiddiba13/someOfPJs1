var prompt = require("prompt-sync")();

function game() {
  var answer = prompt("wan a play (y/n) ? ");
  while (true) {
    if (answer.toLocaleLowerCase() === "y") {
      const answerTow = prompt("where u want to go (left or right) ? ");
      if (answerTow === "right") {
        console.log("u dead ~```!");
        break;
      } else if (answerTow === "left") {
        console.log("if u go right u dead now LOLOLOLOLOL");
      }
      while (true) {
        const answerTree = prompt("do u want jump a breach or not ( y / n )");
        if (answerTree === "y") {
          console.log("that a nice one");
          break;
        } else {
          console.log("every one know to going for jump noob try again");
        }
      }

      while (true) {
        var answerFour = prompt(
          "in front an you is a enemy do you want to kick hes ass? (y/n)",
        );
        if (answerFour === "y") {
          console.log(
            "that a spirit of warrior now you have key of chest room ",
          );
          break;
        } else {
          console.log("noob");
        }
      }
      while (true) {
        const answerFive = prompt(
          "almost done do want open the door whit you key? (y/n)",
        );
        if (answerFive === "y") {
          console.log(answerFive);

          while (true) {
            const answerSix = prompt("oh a boss  time for a fight (y/n)");
            if (answerSix === "y") {
              console.log("die boss die !!!");
              console.log("you have won and u have a chest.!!!!:) ");
              break;
            } else {
              console.log("noob");
              continue;
            }
          }
          break;
        } else {
          console.log("noob");
          continue;
        }
      }
    } else {
      ("to bad");
    }
    break;
  }
  console.log("good job");
  const again = prompt("do you want play agin y/n");
  if (again === "y") {
    game();
  } else {
    ("bye");
  }
}
game();
