const questionNumber = document.querySelector(".question-number");
const question = document.querySelector(".question");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const inputOption1 = document.querySelector(".option-1");
const inputOption2 = document.querySelector(".option-2");
const inputOption3 = document.querySelector(".option-3");
const inputOption4 = document.querySelector(".option-4");
const textOption1 = document.querySelector(".opt-1-txt");
const textOption2 = document.querySelector(".opt-2-txt");
const textOption3 = document.querySelector(".opt-3-txt");
const textOption4 = document.querySelector(".opt-4-txt");
const nextBtn = document.querySelector(".next-btn");
const restartBtn = document.querySelector(".restart-btn");
const resultWindow = document.querySelector(".result-window");
const endMsg = document.querySelector(".end-msg");
const okayBtn = document.querySelector(".okay-btn");
const startMsg = document.querySelector(".start-btn");
const startWindow = document.querySelector(".start-window");
const startBtn = document.querySelector(".start-btn");
const labels = document.querySelectorAll("label");
const heading = document.querySelector(".heading");
const displayedTimer = document.querySelector(".timer");

let index = 0;
let score = 0;
let totalTime = 9 * 60 + 59;

resultWindow.classList.add("hidden");
labels.forEach((label) => {
  label.classList.add("hidden");
});
heading.classList.add("hidden");
displayedTimer.classList.add("hidden");
nextBtn.classList.add("hidden");
startWindow.classList.remove("hidden");

const renderMCQS = () => {
  const currentMCQ = mcqs[index];
  if (index >= mcqs.length) {
    endMsg.textContent = `MCQs completed, you scored: ${score}`;
    index = 0;
    score = 0;
    okayBtn.classList.add("hidden");
    resultWindow.classList.remove("hidden");
    inputOption1.disabled = true;
    inputOption2.disabled = true;
    inputOption3.disabled = true;
    inputOption4.disabled = true;
    nextBtn.disabled = true;
    clearInterval(timerInterval);
    renderMCQS();
    return;
  } else {
    questionNumber.textContent = `Question ${index + 1} of ${mcqs.length}`;
    question.textContent = currentMCQ.question;
    textOption1.textContent = currentMCQ.options[0];
    textOption2.textContent = currentMCQ.options[1];
    textOption3.textContent = currentMCQ.options[2];
    textOption4.textContent = currentMCQ.options[3];
  }
};

const resetSelections = () => {
  inputOption1.checked = false;
  inputOption2.checked = false;
  inputOption3.checked = false;
  inputOption4.checked = false;

  inputOption1.disabled = false;
  inputOption2.disabled = false;
  inputOption3.disabled = false;
  inputOption4.disabled = false;
  nextBtn.disabled = false;
};

const nextMCQ = () => {
  const correctOption = mcqs[index].answer;
  if (
    inputOption1.checked === false &&
    inputOption2.checked === false &&
    inputOption3.checked === false &&
    inputOption4.checked === false
  ) {
    resultWindow.classList.remove("hidden");
    restartBtn.classList.add("hidden");
    okayBtn.classList.remove("hidden");
    endMsg.textContent = "Please select an option before proceeding";
    inputOption1.disabled = true;
    inputOption2.disabled = true;
    inputOption3.disabled = true;
    inputOption4.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  if (inputOption1.checked) {
    if (correctOption === textOption1.textContent) {
      score++;
    }
  }

  if (inputOption2.checked) {
    if (correctOption === textOption2.textContent) {
      score++;
    }
  }

  if (inputOption3.checked) {
    if (correctOption === textOption3.textContent) {
      score++;
    }
  }

  if (inputOption4.checked) {
    if (correctOption === textOption4.textContent) {
      score++;
    }
  }

  index++;
  resetSelections();
  renderMCQS();
};

const updateTimer = () => {
  const mins = Math.floor(totalTime / 60);
  const secs = totalTime % 60;

  minutes.textContent = mins < 10 ? `0${mins}` : mins;
  seconds.textContent = secs < 10 ? `0${secs}` : secs;
};

let timerInterval;

const timer = () => {
  if (totalTime <= 0) {
    clearInterval(timerInterval);
    endMsg.textContent = `Time is up, you answerd ${index} mcqs and your score is ${score}`;
    okayBtn.classList.add("hidden");
    resultWindow.classList.remove("hidden");
    inputOption1.disabled = true;
    inputOption2.disabled = true;
    inputOption3.disabled = true;
    inputOption4.disabled = true;
    nextBtn.disabled = true;
    index = 0;
    score = 0;
    renderMCQS();
  }

  updateTimer();
  totalTime--;
};

const restartQuiz = () => {
  clearInterval(timerInterval);
  totalTime = 9 * 60 + 59;
  updateTimer();
  timerInterval = setInterval(timer, 1000);

  inputOption1.disabled = false;
  inputOption2.disabled = false;
  inputOption3.disabled = false;
  inputOption4.disabled = false;
  nextBtn.disabled = false;
  resultWindow.classList.add("hidden");
  endMsg.textContent = "";

  index = 0;
  score = 0;
  renderMCQS();
  resetSelections();
};

const pressOkay = () => {
  endMsg.textContent = "";
  resultWindow.classList.add("hidden");
  restartBtn.classList.remove("hidden");
  okayBtn.classList.add("hidden");
  inputOption1.disabled = false;
  inputOption2.disabled = false;
  inputOption3.disabled = false;
  inputOption4.disabled = false;
  nextBtn.disabled = false;
};

const startQuiz = () => {
  renderMCQS();
  labels.forEach((label) => {
    label.classList.remove("hidden");
  });
  heading.classList.remove("hidden");
  displayedTimer.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  startWindow.classList.add("hidden");
  timerInterval = setInterval(timer, 1000);
}

nextBtn.addEventListener("click", nextMCQ);
restartBtn.addEventListener("click", restartQuiz);
okayBtn.addEventListener("click", pressOkay);
startBtn.addEventListener("click", startQuiz);
