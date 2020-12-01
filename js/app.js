'use strict';

var userName = prompt('What is your name?');
// console.log('The user name is ' + userName + '!');

alert('Hello ' + userName + '! Get ready to play a guessing game!');

var codeName = prompt('Is the maker of this website\'s name Jason?').toLowerCase();
// console.log(codeName);

if(codeName === 'yes' || codeName === 'y'){
  alert('Ding! Ding! Ding! We have a winner!');
}

// question two
// DONE - ask question y/n -normalize case
var homeTown = prompt('Does Jason live in Seattle?').toLowerCase();
// console.log(homeTown);

if(homeTown === 'yes' || homeTown === 'y'){
  // DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  // DONE - if it works, comment out console.log, send alert to user
  // console.log('Yes I live in Seattle.' + userName + ' answered ' + homeTown);
  alert('That is Correct!');
} else{
  alert('Ooh, you got that one wrong!');
}

// question three
// DONE - ask question with yes or no answer, normalize case
var winterSport = prompt('Does Jason love to ski?').toLowerCase();
// console.log(winterSport);

if(winterSport === 'no' || winterSport === 'y'){
  // console.log('Jason likes to snowboard.' + userName + ' answered ' + winterSport);
  alert('Nice job, ' + userName + '. That\'s right! Jason likes to snowboard!');
} else{
  alert('Sorry, nice try ' + userName + '.');
}
// DONE - console.log the answer in a string concatenation IF IT IS CORRECT
// DONE - if it works, comment out console.log, send alert to user

// DONE - change alert: thank user, give meaning message with their name







// var iceCream = prompt('What is your favorite flavour of ice cream?');
// console.log(userName + ' likes ' + iceCream + ' ice cream!');

// alert('Hello ' + userName + ', who loves ' + iceCream + ' ice cream!');

// var topping = prompt('What is your favorite topping?');
// console.log(userName + ' likes ' + iceCream + ' ice cream with ' + topping + '!');

// alert('Hello ' + userName + ', who loves ' + iceCream + ' ice cream with ' + topping + '!');

// var visit = prompt('Where have you always wanted to travel to?');
// console.log(userName + ' likes ' + iceCream + ' ice cream with ' + topping + ' when in ' + visit + '!');

// alert('Hello ' + userName + ', who has always wanted to eat ' + iceCream + ' ice cream with ' + topping + ' in an ice cream shop in ' + visit + '!');
