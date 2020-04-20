// Write a guessing game where the user has to guess a secret number.

//After every guess the program tells the user whether their number was too large or too small.

//At the end, the number of tries needed should be printed.

// Inputting the same number multiple times should only count as one try.

//If the user provides an answer which isn 't a number, print an error message and do not count this as a try.

let prompt = require("prompt-sync")();
let guesses = [];
let j = "b";
// code below (replace this example)

  let answer = prompt("Guess a number between 1 and 10: ");
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  
  for (let i = 0; i !== j; i++) {
     if ( guesses.includes(answer) ) {
       console.log("Guess again - you've already guess that number!");
       answer = prompt("> ");
      } else if ( isNaN(answer) ) {
        console.log("Sorry, your entry is not a number! Guess again");
        answer = prompt("> ");
      } else if ( answer > randomNumber ) {
        guesses.push(answer);
        console.log("Sorry, try a smaller number!")
        answer = prompt("> ");
      } else if ( answer < randomNumber ) {
        guesses.push(answer);
        console.log("Sorry, try a bigger number!")
        answer = prompt("> ");
      } else if (answer == randomNumber) {
          if (guesses.length > 1) {
            console.log("You got it! You took " + guesses.length + " attempts!");
          } else {
            console.log("You got it on the first attempt!");
          }  
      }
    }