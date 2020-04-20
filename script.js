// Write a guessing game where the user has to guess a secret number.

//After every guess the program tells the user whether their number was too large or too small.

//At the end, the number of tries needed should be printed.

// Inputting the same number multiple times should only count as one try.

//If the user provides an answer which isn 't a number, print an error message and do not count this as a try.

let prompt = require("prompt-sync")();
let count = 0;
let guesses = [];
let j = "a";
// code below (replace this example)

  let answer = prompt("Guess a number between 1 and 10: ");
  let randomNumber = Math.floor(Math.random() * 10);
  for (let i = 0; i !== j; i++) {
     if (guesses.includes(answer)) {
       console.log("Guess again!");
       answer = prompt("> ");
      } else if (isNaN(answer)) {
        console.log("Sorry, your entry is not a number! Guess again");
        prompt("> ");
      } else if( answer > randomNumber ) {
        count++;
        guesses.push(answer);
        console.log("Sorry, try a smaller number!")
        answer = prompt("> ");
      } else if ( answer < randomNumber ) {
        count++;
        guesses.push(answer);
        console.log("Sorry, try a bigger number!")
        answer = prompt("> ");
      } else if (answer === randomNumber) {
        count++;
        console.log("Correct! Number of attempts: " + count);
      }
    }