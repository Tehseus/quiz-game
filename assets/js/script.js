// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
var startButton = document.querySelector(".start-button");

questionOne = ["","","",""];
questionTwo = ["","","",""];
questionThree = ["","","",""];
questionFour = ["","","",""];
questionFive = ["","","",""];
questionSix = ["","","",""];
questionSeven = ["","","",""];
questionEight = ["","","",""];
questionNine = ["","","",""];
questionTen = ["","","",""];

questionOneAnswer = "";
questionTwoAnswer = "";
questionThreeAnswer = "";
questionFourAnswer = "";
questionFiveAnswer = "";
questionSixAnswer = "";
questionSevenAnswer = "";
questionEightAnswer = "";
questionNineAnswer = "";
questionTenAnswer = "";

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

function startGame() {
    runTimer();

    
}
startButton.addEventListener("click", startGame);