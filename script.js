//eventListener to start quiz on button
//1. going to make start button disappear
//2. going to call a new function - name it getQuestionOne

//create function for each question - after each question called, render next getQuestion function
//timer
//highscores with localStorage

// Questions Array

var questions = [
  {
    question: "Commonly used data types do NOT include ___:",
    choices: ["1. Alerts", "2. Strings", "3. Booleans", "4. Numbers"],
    correctAnswer: "1. Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed in ___:",
    choices: [
      "1. Quotes",
      "2. Parentheses",
      "3. Curly Brackets",
      "4. Square Brackets",
    ],
    correctAnswer: "2. Parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store ___:",
    choices: [
      "1. Numbers and strings",
      "2. Booleans",
      "3. Other Arrays",
      "4. All of the above",
    ],
    correctAnswer: "4. All of the above",
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables:",
    choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    correctAnswer: "3. Quotes",
  },
  {
    question:
      "A very useful tool during development and debugging for printing content to the debugger is:",
    choices: [
      "1. Javascript",
      "2. Terminal/Bash",
      "3. For loops",
      "4. Console log",
    ],
    correctAnswer: "4. Console log",
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
        counter -= 10;
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
        counter -= 10;
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
        counter -= 10;
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
        counter -= 10;
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
  final.textContent = "Your final score is " + score + ".";
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
