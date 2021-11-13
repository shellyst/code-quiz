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
    correctAnswer: "option 4/5",
  },
];

//global variables
var startButton = document.querySelector("#start-button");
var mainContent = document.querySelector("#main-content");
var optionsContent = document.querySelector("#options");
var questionContent = document.querySelector("#questionID");
var introContent = document.querySelector("#introText");
var lineDivider = document.querySelector("#lineBreak");

startButton.addEventListener("click", start);
function start() {
  startButton.setAttribute("class", "hidden");
  getQuestionOne();
}

// Function to ask first question, and offer choices.
function getQuestionOne() {
  // Clears previous content on page.
  questionContent.innerHTML = "";
  introContent.innerHTML = "";

  var questionEl = document.createElement("h1");
  questionEl.textContent = questions[0].question;
  questionEl.className = "questClass";
  questionContent.append(questionEl);

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

// Function to ask second question, and offer choices.
function getQuestionTwo() {
  // Clears previous content on page.
  questionContent.innerHTML = "";
  optionsContent.innerHTML = "";

  var questionEl = document.createElement("h1");
  questionEl.textContent = questions[1].question;
  questionEl.className = "questClass";
  questionContent.append(questionEl);

  for (var i = 0; i < questions[1].choices.length; i++) {
    var option = document.createElement("li");
    option.setAttribute("id", questions[1].choices[i]);
    option.textContent = questions[1].choices[i];
    optionsContent.append(option);

    option.addEventListener("click", function (event) {
      console.log(event.target.id);
      if (event.target.id === questions[1].correctAnswer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      getQuestionThree();
    });
  }
}

// Function to ask third question, and offer choices.
function getQuestionThree() {
  // Clears previous content on page.
  questionContent.innerHTML = "";
  optionsContent.innerHTML = "";

  var questionEl = document.createElement("h1");
  questionEl.textContent = questions[2].question;
  questionEl.className = "questClass";
  questionContent.append(questionEl);

  for (var i = 0; i < questions[2].choices.length; i++) {
    var option = document.createElement("li");
    option.setAttribute("id", questions[2].choices[i]);
    option.textContent = questions[2].choices[i];
    optionsContent.append(option);

    option.addEventListener("click", function (event) {
      console.log(event.target.id);
      if (event.target.id === questions[2].correctAnswer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      getQuestionFour();
    });
  }
}

// Function to ask fourth question, and offer choices.
function getQuestionFour() {
  // Clears previous content on page.
  questionContent.innerHTML = "";
  optionsContent.innerHTML = "";

  var questionEl = document.createElement("h1");
  questionEl.textContent = questions[3].question;
  questionEl.className = "questClass";
  questionContent.append(questionEl);

  for (var i = 0; i < questions[3].choices.length; i++) {
    var option = document.createElement("li");
    option.setAttribute("id", questions[3].choices[i]);
    option.textContent = questions[3].choices[i];
    optionsContent.append(option);

    option.addEventListener("click", function (event) {
      console.log(event.target.id);
      if (event.target.id === questions[3].correctAnswer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      getQuestionFive();
    });
  }
}

// Function to ask fifth question, and offer choices.
function getQuestionFive() {
  // Clears previous content on page.
  questionContent.innerHTML = "";
  optionsContent.innerHTML = "";

  var questionEl = document.createElement("h1");
  questionEl.textContent = questions[4].question;
  questionEl.className = "questClass";
  questionContent.append(questionEl);

  for (var i = 0; i < questions[4].choices.length; i++) {
    var option = document.createElement("li");
    option.setAttribute("id", questions[4].choices[i]);
    option.textContent = questions[4].choices[i];
    optionsContent.append(option);

    option.addEventListener("click", function (event) {
      console.log(event.target.id);
      if (event.target.id === questions[4].correctAnswer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      endGame();
    });
  }
}

function endGame() {
  // Clears previous page content.
  questionContent.innerHTML = "";
  optionsContent.innerHTML = "";

  var questionEl = document.createElement("h1");
  questionEl.textContent = "All done!";
  questionEl.className = "questClass";
  questionContent.append(questionEl);

  var final = document.createElement("p");
  final.setAttribute("id", "final-score");
  final.textContent = "Your final score is ___.";
  optionsContent.append(final);

  console.log("The quiz is over!");
}

//TIMER FUNCTION WILL GO HERE
//setInterval
var counter = 75;
var countdown = function () {
  console.log(counter);
  if (counter === 0) {
    //run endGame
    console.log("The game is over!");
    clearInterval(startCountdown);
  }
};

var startCountdown = setInterval(countdown, 1000);

//HIGHSCORES FUNCTION WILL GO HERE
// function setData();
//highscores stored in localStorage, get from robot game

//DISPLAY ANSWER
