'use strict';

var userName = prompt('What is your name?');
// console.log('The user name is ' + userName + '!');
alert('Hello ' + userName + '! Get ready to play a guessing game!');

// question one
var codeName = prompt('Is the maker of this website\'s name Jason?').toLowerCase();
// console.log(codeName);

if (codeName === 'yes' || codeName === 'y') {
  // console.log('The correct answer is yes. ' + userName + ' answered ' + codeName + '.')
  alert('Ding! Ding! Ding! We have a winner!');
}

// question two
// DONE - ask question y/n -normalize case
var homeTown = prompt('Does Jason live in Seattle?').toLowerCase();
// console.log(homeTown);

if (homeTown === 'yes' || homeTown === 'y') {
  // DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  // DONE - if it works, comment out console.log, send alert to user
  // console.log('Yes I live in Seattle.' + userName + ' answered ' + homeTown);
  alert('That is Correct!');
} else {
  alert('Ooh, you got that one wrong!');
}

// question three
// DONE - ask question with yes or no answer, normalize case
var winterSport = prompt('Does Jason love to ski?').toLowerCase();
// console.log(winterSport);

if (winterSport === 'no' || winterSport === 'n') {
  // console.log('Jason likes to snowboard.' + userName + ' answered ' + winterSport);
  alert('Nice job, ' + userName + '. That\'s right! Jason likes to snowboard!');
} else {
  alert('Sorry, nice try ' + userName + '.');
}
// DONE - console.log the answer in a string concatenation IF IT IS CORRECT
// DONE - if it works, comment out console.log, send alert to user

// DONE - change alert: thank user, give meaning message with their name

// question four
var favFood = prompt('Is Jason\'s favorite food tacos?').toLowerCase();
// console.log(favFood);

if (favFood === 'no' || favFood === 'n') {
  // console.log('You are really good at this ' + userName + '! Jason\'s favorite food is all food!');
  alert('You are really good at this ' + userName + '! Jason\'s favorite food is all food!');
} else {
  alert('Close! Tacos are one his favorite foods!');
}

// question five
var videoGame = prompt('Does Jason play video games?').toLowerCase();
//console.log(videoGame);

if (videoGame === 'yes' || videoGame === 'y') {
  // console.log('Right you are ' + userName + '. You\'ve done well at this game!');
  alert('Right you are ' + userName + '. You\'ve done well at this game!');
} else {
  alert('Wow, ' + userName + '. You need to learn more about Jason!');
}

// question six
// get user input/ prompt/ assign to variable
// if statements.
// if variable > correctAnswer - do one thing.
// if variable < correctAnswer - do a different thing.
// if correct (on first try) - do a thing
// if correct (on last try) - do separate thing?
// if incorrect answer do loop until greater than 4 (out of guesses)
// if correct end logic


var correctAnswer = 14;
var numberGuesses = 4;

for (var i = 0; i < numberGuesses; i++){
  var guessGame = parseInt(prompt('Guess a number from 1-20. You have four chances!'));
  console.log(guessGame);
  if(guessGame === correctAnswer){
    alert(`Congratulations ${userName}! You guessed right!`);
    break;
  } else if(correctAnswer > guessGame && i !== 3){
    alert('Your last guess was too low');
  } else if(correctAnswer < guessGame && i !== 3){
    alert('Your last guess was too high');
  } else{
    alert(`Sorry, ${userName}. You're out of guesses!`);
  }
}

// question seven
// add an array with multiple correct answers
// var answers = ['blue', 'pink', 'red'];



