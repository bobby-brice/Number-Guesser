let prompt = require("prompt-sync")();
let guesses = [];
let correctGuess = false;

let answer = prompt("Guess a number between 1 and 10: ");
let randomNumber = Math.floor(Math.random() * 10 + 1);
  
  while(!correctGuess) {
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
          if (guesses.length >= 1) {
            correctGuess = true;
            console.log("You got it! You took " + guesses.length + " attempts!");
          } else {
            correctGuess = true;
            console.log("You got it on the first attempt!");
          }  
      }
    }