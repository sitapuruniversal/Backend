/**
 * higher order function is first order function.
 * when i pass function as a parameter is also know as higher order function.
 * */

function opration(opratorFn, a, b) {
  return opratorFn(a, b);
}

function add(a, b) {
  return a + b;
}
// opration(fn, 5, 10);

let result = opration(add, 5, 12);

console.log(result);

function greetFunction() {
  return function () {
    console.log("Welcome ");
  };
}

let greetFn = greetFunction();
console.log(typeof greetFn);
greetFn();

/**ForEach method
 * this is a higher order function
 */

let players = ["Sachin", "Virat", "MS Dhoni"];

players.forEach((player) => console.log(player));

/**
 * map() method : creation of new tranformaed array
 * it creata a new copy of array dont change orijinal array
 *
 */
array = [1, 2, 3, 4, 5, 6];
cube_array = array.map((num) => num ** 3);
console.log(cube_array);

/** Filter method
 *
 */

let arr = [
  1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 2, 5, 4, 1, 28, 44, 552, 66, 45, 14, 41,
  52, 99,
];
let even_number = arr.filter((num) => num % 2 == 0);

console.log("Even Number is : ", even_number);

let odd_number = arr.filter((num) => num % 2 !== 0);

console.log("Odd Number is : ", odd_number);

/**
 * reduce method
 */

let sumArray = [
  1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 2, 5, 4, 1, 28, 44, 552, 66, 45, 14, 41,
  52, 99,
];

let sumofArray = sumArray.reduce((curr, next) => curr + next);

console.log(sumofArray);
