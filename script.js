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
var optionsContent = document.querySelector("#options");

startButton.addEventListener("click", start);
function start() {
  startButton.setAttribute("class", "hidden");
  getQuestionOne();
}

function getQuestionOne() {
  var questionEl = document.createElement("h1");
  questionEl.textContent = questions[0].question;
  mainContent.prepend(questionEl);

  for (var i = 0; i < questions[0].choices.length; i++) {
    var option = document.createElement("li");
    option.setAttribute("id", questions[0].choices[i]);
    option.textContent = questions[0].choices[i];
    optionsContent.append(option);

    option.addEventListener("click", function (event) {
      console.log(event.target.id);
      if (event.target.id === questions[0].correctAnswer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      getQuestionTwo();
    });
  }
}

function getQuestionTwo() {
  // clear your question div and clear your option list
  //NEED TO ADD ABILITY TO CLEAR BEFORE RESTARTING THE FUNCTION HERE

  var questionEl = document.createElement("h1");
  questionEl.textContent = questions[1].question;
  mainContent.prepend(questionEl);

  for (var i = 0; i < questions[1].choices.length; i++) {
    var option = document.createElement("li");
    option.setAttribute("id", questions[1].choices[i]);
    option.textContent = questions[0].choices[i];
    optionsContent.append(option);

    option.addEventListener("click", function (event) {
      console.log(event.target.id);
      if (event.target.id === questions[0].correctAnswer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      getQuestionThree();
    });
  }
}

function getQuestionThree() {
  // clear your question div and clear your option list
  //NEED TO ADD ABILITY TO CLEAR BEFORE RESTARTING THE FUNCTION HERE

  var questionEl = document.createElement("h1");
  questionEl.textContent = questions[2].question;
  mainContent.prepend(questionEl);

  for (var i = 0; i < questions[2].choices.length; i++) {
    var option = docuent.createElement("li");
    option.setAttribute("id", questions[1].choices[i]);
    option.textContent = questions[0].choices[i];
    optionsContent.append(option);

    option.addEventListener("click", function (event) {
      console.log(event.target.id);
      if (event.target.id === questions[0].correctAnswer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      getQuestion4();
    });
  }
}
