
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var startButton = document.querySelector(".start-button");
var questionContainerElement = document.getElementById('questionContainer')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answerContainer')
var questionContainerElement = document.getElementById("questionContainer")
var answer1 = document.getElementById("answer1").innerText
var answer2 = document.getElementById("answer2").innerText
var answer3 = document.getElementById("answer3").innerText
var answer4 = document.getElementById("answer4").innerText
var userSelection = ""
var startingScore = 0
var score = 0
const questions = [
    {
        question: 'How many teams are in the NHL?',
        answers: [
          { text: '31', correct: false },
          { text: '28', correct: false },
          { text: '32', correct: true },
          { text: '30', correct: false }
        ]
      },
    {
        question: 'Which NHL player is called the Goat?',
        answers: [
          { text: 'Mario Lemieux', correct: false },
          { text: 'Conor McDavid', correct: false },
          { text: 'Wayne Gretzky', correct: true },
          { text: 'Pavel Datsyuk', correct: false }
        ]
      },
    {
        question: 'Who owns the hardest shot record in NHL history?',
        answers: [
          { text: 'Shea Weber', correct: false },
          { text: 'Zdeno Chara', correct: true },
          { text: 'Alexander Ovechkin', correct: false },
          { text: 'Patrik Laine', correct: false }
        ]
      },
    {
        question: 'Who wins the Vezina Trophy',
        answers: [
          { text: "The league's best Goalie.", correct: true },
          { text: `The League's best Winger`, correct: false },
          { text: `The League's best Center`, correct: false },
          { text: `The League's best Defenseman`, correct: false}
        ]
    },          
    {
        question: 'Which NHL season was cancelled?',
        answers: [
          { text: '2004-2005', correct: true },
          { text: '2005-2006', correct: false },
          { text: '2003-2004', correct: false },
          { text: '2006-2007', correct: false }
        ]
      },
    {
        question: 'How many goals makes a hat trick?',
        answers: [
          { text: '2', correct: false },
          { text: '3', correct: true },
          { text: '4', correct: false },
          { text: '5', correct: false }
        ]
      },
    {
        question: 'How long is a minor penalty served?',
        answers: [
          { text: '1.5 minutes', correct: false },
          { text: '2 minutes', correct: false },
          { text: '3 minutes', correct: false },
          { text: '5 minutes', correct: false }
        ]
      },
    {
        question: 'Out of the 31 NHL teams how many of them are based out of Canada?',
        answers: [
          { text: '9', correct: false },
          { text: '6', correct: false },
          { text: '8', correct: false },
          { text: '7', correct: true }
        ]
      },
    {
        question: 'Which former player is popularly called "Mr.Hockey"?',
        answers: [
          { text: 'Wayne Gretzky', correct: false },
          { text: 'Gordie Howe', correct: true },
          { text: 'Alex Ovechkin', correct: false },
          { text: 'Bobby Orr', correct: false }
        ]
      },
    {
        question: 'Which trophy is given to the most valuable player?',
        answers: [
          { text: 'The Selke Trophy', correct: false },
          { text: 'The Vezina Trophy', correct: false },
          { text: 'The Hart Trophy', correct: false },
          { text: 'The Masterton Trophy', correct: false }
        ]
      },
      

]

let randomQuestions = undefined;
let currentQuestionIndex =undefined;
//function that starts the game and calls the timer function
//also unhides the questions
function startGame() {
    runTimer();
    questionContainerElement.classList.remove("hide")
    randomQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestionIndex = 0
    setNextQuestion();
    selectedAnswer();
    
}


//function to set the next question
function setNextQuestion() {
    showQuestion(randomQuestions[currentQuestionIndex])
}
//function to pull questions
function showQuestion(questions) {
    questionElement.innerText = questions.question
}
function selectedAnswer() {
    document.getElementById("answer4").innerText = "poop"
    console.log(answer4);

    
}
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);

//question arrays holding my questions/answers
//swapped to using const instead of 10 different arrays for questions/answers


// console.log(questions);



// THEN a timer starts and I am presented with a question
function runTimer(){
    console.log("timer started");{
        var timeLeft = 60;
      
        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timerEl = document.querySelector(".timer-count")
        var timeInterval = setInterval(function () {
          // As long as the `timeLeft` is greater than 1
          if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft
            // Decrement `timeLeft` by 1
            timeLeft--;
          } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft
            timeLeft--;
          } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '0';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            
          }
        }, 1000);
      }
}


// WHEN I click the start button
startButton.addEventListener("click", startGame);

