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
var timer = document.querySelector("#timer");
var score = 0;

startButton.addEventListener("click", start);
function start() {
  startButton.setAttribute("class", "hidden");
  setTime();

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
        score += 20;
      } else {
        console.log("incorrect");
        counter -= 10;
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
        score += 20;
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
        score += 20;
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
        score += 20;
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
        score += 20;
      } else {
        console.log("incorrect");
      }
      endGame();
    });
  }
}

//function answerCheck() {
//dynamic HTML for answer
//if answer is correct, display "Correct!"
//else display incorrect and subtract 10 seconds from the time counter
//place function within each question function?
//}

function endGame() {
  // Clears previous page content.
  questionContent.innerHTML = "";
  optionsContent.innerHTML = "";

  var questionEl = document.createElement("h1");
  questionEl.textContent = "All done!";
  questionEl.className = "questClass";
  questionContent.prepend(questionEl);

  var final = document.createElement("p");
  final.setAttribute("id", "final-score");
  final.textContent = "Your final score is ___.";
  questionContent.append(final);

  var input = document.createElement("input");
  questionContent.append(input);

  var submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  questionContent.append(submitButton);
  submitButton.addEventListener("click", function () {
    //Highscore
    var storage = JSON.parse(localStorage.getItem("user"));
    console.log(storage);
    if (storage === null) {
      storage = [];
    }
    var user = {
      name: input.value,
      score: score,
    };
    storage.push(user);
    localStorage.setItem("user", JSON.stringify(storage));
    window.location.href = "highscore.html";
  });
  console.log("The quiz is over!");
}

//setInterval
var counter = 75;

function setTime() {
  var countdown = setInterval(function () {
    counter--;
    if (counter === -1) {
      clearInterval(countdown);
    }
    timer.textContent = counter;
  }, 1000);
}

// Take 10 seconds away if answer wrong.

//DISPLAY ANSWER
