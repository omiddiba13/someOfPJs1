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

let whereTheOpGo = document.getElementById("sectionOP");
let whereTheQuGo = document.getElementById("wtQu");
let QUNumber = 0;
let Score = 0;
let totalQuestions = 0;

async function displayQuestion() {
  const data = await fetchJsonData();
  if (!data) return;

  totalQuestions = data.questions.length;
  const dataQuAll = data.questions[QUNumber];
  const theQU = dataQuAll.question;
  whereTheQuGo.innerHTML = theQU;

  let theOption = whereTheOpGo;
  theOption.innerHTML = "";

  dataQuAll.options.forEach(option => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.onclick = () => handleAnswer(option, dataQuAll.answer);
    theOption.appendChild(button);
  });

  const QUNumberPage = document.getElementById("QuNu");
  QUNumberPage.innerHTML = QUNumber + 1;
}

function handleAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    Score++;
  }
  QUNumber++;

  if (QUNumber < totalQuestions) {
    displayQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  const result = document.getElementById("result");
  const percentage = (Score / totalQuestions) * 100;
  result.innerHTML = `Your score: ${Score}/${totalQuestions} (${percentage.toFixed(
    2,
  )}%)`;
}

function Back() {
  if (QUNumber > 0) {
    QUNumber--;
    displayQuestion();
  }
}

document.getElementById("backButton").addEventListener("click", Back);

displayQuestion();
