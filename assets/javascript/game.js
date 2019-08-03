var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


var winsPlayer = document.getElementById("wins");
var lossesPlayer = document.getElementById("losses");
var guessesLeftPlayer = document.getElementById("guesses-left");
var guessesRemaining = document.getElementById("guesses-so-far");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

document.onkeyup = function (event) {
  var userGuess = event.key;
  // console.log(userGuess);

  guessesLeft--;
  guessesSoFar.push(userGuess);
  console.log(guessesLeft);


  if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    


  } else if (guessesLeft === 0) {
    alert("Game Over");
    guessesLeft = 9;
    guessesSoFar= [];
    console.log(guessesSoFar);
    losses++;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
  
  }
  winsPlayer.innerHTML = "Wins: " + wins;
  lossesPlayer.innerHTML = "Losses: " + losses;
  guessesLeftPlayer.innerHTML = "GuessLeft: " + guessesLeft;
  guessesRemaining.innerHTML = "Your Guesses So Far: " + guessesSoFar;

}




