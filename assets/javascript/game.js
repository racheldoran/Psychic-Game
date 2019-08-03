var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];



var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


var winsPlayer = document.getElementById("wins");
var lossesPlayer = document.getElementById("losses");
var guessesLeftPlayer = document.getElementById("guesses-left");
var guessesFar = document.getElementById("guesses-so-far");





document.onkeyup = function (event) {
  var userGuess = event.key;
  // console.log(userGuess);

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log('computer guess',computerGuess);

  // if(computerGuess === userGuess){
  //   console.log('matches')
  // }else{
  //   console.log('does not matches')
  // }
  // if (computerChoices== -1) {
  //   console.log('computerGuess',computerGuess);
  // }else {
  //   console.log('its founnd')
  // }

    if (userGuess === computerGuess) {
      wins++;
      guessesLeft--;
      console.log("guessesleft",guessesLeft)
      guessesSoFar.push(userGuess);
      winsPlayer.innerHTML = "Wins: " + wins;
      guessesLeftPlayer.innerHTML = "GuessLeft: " + guessesLeft;
      console.log("user guess",guessesSoFar);

    }else{
      guessesLeft--;
      console.log(guessesLeft)
      guessesLeftPlayer.innerHTML = "GuessLeft: " + guessesLeft;
    }
    if(guessesLeft === 0){
      alert("gameOver")
      guessesLeft = 9
    }

    if (userGuess !== computerGuess) {
      guessesLeft--;
      guessesSoFar.push(userGuess);
      console.log(guessesSoFar);
      guessesSoFar.innertext = "Your Guesses So Far: " + guessesSoFar;
    }

   if (guessesLeft === 0) {
      guessesLeft = 9;
      losses++;
      guessesSoFar.push(userGuess);
      lossesPlayer.innerHTML = "Losses: " + losses;
    guessesLeftPlayer.innerHTML = guessesSoFar;
      

   }
  }



