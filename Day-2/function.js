// Welcome to function Declaration

// Define a function
/*
function helloStudent() {
  console.log("Welcome to the pw skill");
}
helloStudent();

// Sum of two numbers
function sumofTwoNumber(a, b) {
  return a + b;
}
sumofTwoNumber();
console.log(sumofTwoNumber(10, 20));

// Defalt function parameter

function sum(a, b = 5) {
  return a + b;
}
console.log(sum(5));
// output : Nan if b is not pass any value

function func() {
  console.log(arguments);
}

func(1, 2, 3, 4, 5);


*/

// funcion with no argument and no return keyword
//Arrow function
var hello = () => console.log("Welcome to the pW SKill");

var sum = (a, b) => a + b;

// function with multiple parapmeter
var process = (a, b) => {
  console.log("Welcome");
  // console.log(arguments);
  return a * b;
};
console.log(process(5, 3));

// IIFE function
(function () {
  console.log("Hello world");
})();

// ( ) () Anonomays function
