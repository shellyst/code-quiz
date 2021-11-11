//Questions
//Choices
//Correct Answers

//array called questions - objects that contain question, 4 choices, 1 correct answer

//eventListener to start quiz on button
//1. going to make start button disappear
//2. going to call a new function - name it getQuestionOne

//create function for each question - after each question called, render next getQuestion function
//timer
//highscores with localStorage

// Questions Array

var questions = [
  {
    question: "Question number 1?",
    choices: ["option 1/1", "option 2/1", "option 3/1", "option 4/1"],
    correctAnswer: "option 1/1",
  },
  {
    question: "Question number 2?",
    choices: ["option 1/2", "option 2/2", "option 3/2", "option 4/2"],
    correctAnswer: "option 2/2",
  },
  {
    question: "Question number 3?",
    choices: ["option 1/3", "option 2/3", "option 3/3", "option 4/3"],
    correctAnswer: "option 3/3",
  },
  {
    question: "Question number 4?",
    choices: ["option 1/4", "option 2/4", "option 3/4", "option 4/4"],
    correctAnswer: "option 4/4",
  },
  {
    question: "Question number 5?",
    choices: ["option 1/5", "option 2/5", "option 3/5", "option 4/5"],
    correctAnswer: "option 5/5",
  },
];

//global variables
var startButton = document.querySelector("#start-button");
var mainContent = document.querySelector("#main-content");

startButton.addEventListener("click", start);
function start() {
  startButton.setAttribute("class", "hidden");
  getQuestionOne();
}

function getQuestionOne() {
  console.log(questions[0]);
}
