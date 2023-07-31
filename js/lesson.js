const lesson = JSON.parse(localStorage.getItem("sancharalesson"));
const progress = document.querySelector(".progress");
const img = document.querySelector("#img");
const options = document.querySelectorAll(".option");
const remaining = document.querySelector(".remaining");
const englishWord = document.querySelector(".qstr").querySelector("span");
const continuebtn = document.querySelector(".continue");
const totalQuestion = lesson.totalQuestion;

let questionCompleted = 0;
let width = 0;
let currQues = lesson.questions[0];
let optionClicked = false;

const renderQuesDetails = () => {
  remaining.innerHTML = totalQuestion - questionCompleted;
  width = (questionCompleted / lesson.totalQuestion) * 100;
  progress.style.width = `${width}%`;
};

const renderQuestion = () => {
  englishWord.innerText = currQues.englishWord;
  img.setAttribute("src", currQues.path);
};

const handleOptionClick = (index) => {
  if (optionClicked) return; // Ignore if an option has already been clicked

  // Add the "correct" or "incorrect" class based on the user's choice
  options.forEach((option, optionIndex) => {
    if (optionIndex === index) {
      if (currQues.options[index] === currQues.sanskritWord) {
        option.classList.add("correct");
      } else {
        option.classList.add("incorrect");
      }
    }
    option.classList.add("disabled");
  });

  questionCompleted += 1;
  renderQuesDetails();
  optionClicked = true;
  continuebtn.addEventListener("click", handleContinueClick);
  continuebtn.classList.remove('disabled');
};

const handleContinueClick = () => {

  // Move to the next question
  if (questionCompleted < totalQuestion) {
    optionClicked = false;
    currQues = lesson.questions[questionCompleted];
    renderQuestion();
    renderQuesDetails();

    // Add event listeners to the options again
    options.forEach((option, index) => {
      option.innerText = currQues.options[index];
      option.classList.remove("incorrect");
      option.classList.remove("correct");
      option.classList.remove("disabled");
      option.addEventListener("click", () => handleOptionClick(index));
    });

    // Disable the "Continue" button until the next correct option is clicked
    continuebtn.removeEventListener("click", handleContinueClick);
    continuebtn.classList.add('disabled')
  } else {
    // Handle completion of all questions
    console.log("All questions completed!");
  }
};

renderQuesDetails();
renderQuestion();

options.forEach((option, index) => {
  option.innerText = `${currQues.options[index]}`;

  option.addEventListener("click", () => {
    handleOptionClick(index);
  });
});
