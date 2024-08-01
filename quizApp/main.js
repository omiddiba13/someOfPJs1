async function fetchJsonData() {
  try {
    const res = await fetch("./questions.json");
    if (!res.ok) {
      throw new Error(`no data err: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
}
//// op = option
/// Qu = questions
let whereTheOpGo = document.getElementById("sectionOP");
let whereTheQuGo = document.getElementById("wtQu");
let QUNumber = 0;
var Scour = 0;
if (Scour < 0) {
  Scour = 0;
}
//// / back

function Back() {
  if (QUNumber >= 1) {
    QUNumber--;
    if (Scour < 0) {
      Scour = 0;
    }
    Scour--;
    displayQuestion();
    console.log(Scour);
  }
}
////
async function displayQuestion() {
  const data = await fetchJsonData();
  //data
  const dataQuAll = data.questions[QUNumber];
  //qudata
  const theQU = dataQuAll.question;
  whereTheQuGo.innerHTML = theQU;

  let theOption = whereTheOpGo;
  theOption.innerHTML = ""; // Clear previous options
  let answer = dataQuAll.options.forEach((option, optionIdx) => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.onclick = () => handleAnswer(option, dataQuAll.answer);
    theOption.appendChild(button);
  });

  let handleAnswer = (selectedOption, correctAnswer) => {
    if (selectedOption === correctAnswer) {
      QUNumber++;
      Scour++;
      console.log(Scour);
      displayQuestion();
    } else {
      if (Scour < 1) {
        Scour = 1;
        Scour++;
      }
      Scour--;
      QUNumber++;
      console.log(Scour);
      displayQuestion();
    }
    console.log(Scour);
  };
  const QUNumberPage = document.getElementById("QuNu");
  QUNumberPage.innerHTML = QUNumber + 1;
}
function Done(){
  const ScourBar = document.getElementById("scourss");
  ScourBar
  
}
displayQuestion();
