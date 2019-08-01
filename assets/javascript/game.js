

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var winsPlayer = document.getElementById("wins");
var lossesPlayer = document.getElementById("losses");
var guessesLeftPlayer = document.getElementById("guesses-left");
var guessesFar = document.getElementById("guesses-so-far");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




document.onkeyup = function (event) {
  var userGuess = event.key;

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  if (options.indexOf(userGuess) !== -1) {
    
    if (userGuess === computerGuess) {
      wins++;
      guessesLeft = 9;
      guessesSoFar = [];
      winsPlayer.innerText = "Wins: " + wins;
  
    }

    if (userGuess !== computerGuess) {
      guessesLeft--;
      guessesSoFar.push(userGuess);
      lossesPlayer.innerText = "Losses: " + losses;
    }

    if (guessesLeft === 0) {
      guessesLeft = 9;
      losses++;
      guessesSoFar = [];
      guessesLeftPlayer.innerText = "Guesses Left: " + guessesLeft;
      
      guessesSoFar.innertext = "Your Guesses So Far: " + guessesSoFar;
     

    }
  }

}

