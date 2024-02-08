// defining a arry
/**
arr = [1, 2, 3, 4];
console.log(typeof arr); // Object

arr1 = new Array();
console.log(arr1); // [] array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array);
console.log(array[0]);
console.log(array[7]);
console.log(array[-1]); // undefined

// Array are Mutable  we can modify array
array[1] = 200;

console.log(array);


// Push()  add at the end of the array
arr = [10, 20, 3, 6];
arr.push(11);
arr.push(11, 25, 36);
console.log(arr);

// unshift() add begining of an array 
arr.unshift(9999);
console.log(arr);



// Remove element in array

let array1 = [1, 2, 5, 8];
console.log(array1.pop());
console.log(array1); // result : delete end of an array

console.log(array1.shift());
console.log(array1); // delete begining of an array




// concat

let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result);

// size of an array
console.log(a.length);

// convert array to string

let charat = ["s", "u", "n", "i", "l"];
console.log(charat.join());
console.log(charat.join("")); // Seprator
console.log(charat.join(" ")); // Seprator
console.log(charat.join(" $ ")); // Seprator

console.log(typeof charat.toString());


// Slicing of array
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.slice(2));
console.log(num.slice(2, 3));
console.log(num.slice(4, 1)); // not find []
console.log(num.slice(-2, 0));

console.log(num);   // do not change number in array


// Slicing of array
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removed = num.splice(2, 2);
console.log(removed);
console.log(num); // Modify the orijinal array


// Reverse given array

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.reverse());


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.indexOf(9));
console.log(num.indexOf(21)); // return -1 if no found element
*/

let arr = [1, 8, 3, 4, 6, 29, 45, 12];
arr.sort();
console.log(arr); // do not sort in array

arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);
