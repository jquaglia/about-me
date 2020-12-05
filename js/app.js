'use strict';

var userName = prompt('What is your name?');
// console.log('The user name is ' + userName + '!');
var correctAnswers = 0;

alert('Hello ' + userName + '! Get ready to play a guessing game!');

// question one
function questionOne() {
  var codeName = prompt('Is the maker of this website\'s name Jason?').toLowerCase();
  // console.log(codeName);
  if (codeName === 'yes' || codeName === 'y') {
    // console.log('The correct answer is yes. ' + userName + ' answered ' + codeName + '.')
    correctAnswers++;
    alert('Ding! Ding! Ding! We have a winner!');
  }
}

// console.log(questionOne());

// question two
// DONE - ask question y/n -normalize case
function questionTwo() {
  var homeTown = prompt('Does Jason live in Seattle?').toLowerCase();
  // console.log(homeTown);

  if (homeTown === 'yes' || homeTown === 'y') {
    // DONE - console.log the answer IF IT IS CORRECT in a string concatenation
    // DONE - if it works, comment out console.log, send alert to user
    // console.log('Yes I live in Seattle.' + userName + ' answered ' + homeTown);
    alert('That is Correct!');
    correctAnswers++;
  } else {
    alert('Ooh, you got that one wrong!');
  }
}

// console.log(questionTwo());

// question three
// DONE - ask question with yes or no answer, normalize case
function questionThree() {
  var winterSport = prompt('Does Jason love to ski?').toLowerCase();
  // console.log(winterSport);

  if (winterSport === 'no' || winterSport === 'n') {
    // console.log('Jason likes to snowboard.' + userName + ' answered ' + winterSport);
    alert('Nice job, ' + userName + '. That\'s right! Jason likes to snowboard!');
    correctAnswers++;
  } else {
    alert('Sorry, nice try ' + userName + '.');
  }
}

// console.log(questionThree());

// DONE - console.log the answer in a string concatenation IF IT IS CORRECT
// DONE - if it works, comment out console.log, send alert to user

// DONE - change alert: thank user, give meaning message with their name

// question four
function questionFour() {
  var favFood = prompt('Is Jason\'s favorite food tacos?').toLowerCase();
  // console.log(favFood);

  if (favFood === 'no' || favFood === 'n') {
    // console.log('You are really good at this ' + userName + '! Jason\'s favorite food is all food!');
    alert('You are really good at this ' + userName + '! Jason\'s favorite food is all food!');
    correctAnswers++;
  } else {
    alert('Close! Tacos are one his favorite foods but Jason loves all food equally!');
  }

}

// console.log(questionFour());

// question five
function questionFive() {
  var videoGame = prompt('Does Jason play video games?').toLowerCase();
  //console.log(videoGame);

  if (videoGame === 'yes' || videoGame === 'y') {
    // console.log('Right you are ' + userName + '. You\'ve done well at this game!');
    alert('Right you are ' + userName + '. You\'ve done well at this game!');
    correctAnswers++;
  } else {
    alert('Wow, ' + userName + '. You need to learn more about Jason!');
  }

}

// console.log(questionFive());

// question six
function questionSix() {
  var correctAnswer = 14;
  var numberGuesses = 4;

  for (var i = 0; i < numberGuesses; i++) {
    var guessGame = parseInt(prompt('Guess a number from 1-20. You have four chances!'));
    console.log(guessGame);
    if (guessGame === correctAnswer) {
      alert(`Congratulations ${userName}! You guessed right!`);
      correctAnswers++;
      break;
    } else if (correctAnswer > guessGame && i !== 3) {
      alert('Your last guess was too low');
    } else if (correctAnswer < guessGame && i !== 3) {
      alert('Your last guess was too high');
    } else {
      alert(`Sorry, ${userName}. You're out of guesses! The correct answer was 14!`);
    }
  }
}

// console.log(questionSix());

// question seven
// add an array with multiple correct answers
// var answers = ['blue', 'pink', 'red'];

// // Loop 1 - Tells how many times to run
// // Loop 2 - Loops through the array to check answers
function questionSeven() {
  var answers = ['purple', 'green', 'yellow', 'peach'];
  var guessesMax = 7;
  var answeredCorrectly = false;
  console.log(answers);

  while (!answeredCorrectly && guessesMax > 1) {
    guessesMax--;
    var color = prompt(`What is one of my favorite colors? You have ${guessesMax} guesses.`);
    for (var n = 0; n < answers.length; n++) {
      if (color === answers[n]) {
        correctAnswers++;
        alert(`${userName} is correct! You guessed one of these: ${answers}.`);
        answeredCorrectly = true;
        break;
      }
    } if (!answeredCorrectly) {
      alert('Sorry, wrong answer!');
    }
  } if (!answeredCorrectly && guessesMax === 1){
    alert(`Sorry you didn't guess any of these : ${answers}`);
  }

}

// console.log(questionSeven());

function alertEnd(){
  alert(`Thanks for playing my guessing game ${userName}, you got ${correctAnswers} answers correct!`);
}

// Executables
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
alertEnd();
