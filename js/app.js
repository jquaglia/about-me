'use strict';

var userName = prompt('What is your name?');
// string concatenation
console.log('The user name is ' + userName + '!');

alert('Hello ' + userName + '!');

var iceCream = prompt('What is your favorite flavour of ice cream?');
console.log(userName + ' likes ' + iceCream + ' ice cream!');

alert('Hello ' + userName + ', who loves ' + iceCream + ' ice cream!');

var topping = prompt('What is your favorite topping?');
console.log(userName + ' likes ' + iceCream + ' ice cream with ' + topping + '!');

alert('Hello ' + userName + ', who loves ' + iceCream + ' ice cream with ' + topping + '!');

var visit = prompt('Where have you always wanted to travel to?');
console.log(userName + ' likes ' + iceCream + ' ice cream with ' + topping + ' when in ' + visit + '!');

alert('Hello ' + userName + ', who has always wanted to eat ' + iceCream + ' ice cream with ' + topping + ' in an ice cream shop in ' + visit + '!');
