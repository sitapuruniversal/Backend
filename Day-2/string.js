/**
let singleQuotedString = "This is a string with single quotes.";
let doubleQuotedString = "This is a string with double quotes.";
let backtickString = `This is a string with backticks.`;

console.log(typeof backtickString);

let name = "Sunil Kumar Kashyap";

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; // Concatenation

console.log(fullName); // Outputs: John Doe
console.log(firstName[2]); // Accessing individual characters
//console.log(firstName[10]); // Accessing individual characters if no character is found then return undefined

console.log(fullName.length); // Finding the length

//String Method
// Length of string
console.log(name.length);

// Concate()
console.log(firstName.concat(lastName));
console.log(firstName + lastName);

// convert in to uppcase()
console.log(fullName.toUpperCase());
console.log(firstName.toLocaleLowerCase());

*/

// Slicing in string
let fullName = "Welcometothepw";
console.log(fullName);
console.log(fullName.slice(2));
console.log(fullName.slice(2, 4));
console.log(fullName.slice(-3));
console.log(fullName.slice(-3, -1));

// Indexof()
console.log(fullName.indexOf("W")); // result : 0
console.log(fullName.indexOf("z")); // reesutl -1

// Trim()

let word = "    Sunik Kiar";
console.log(word.trim());

// split
var name = "Sunil Kumar";
console.log(name.split());
console.log(name.split("")); // array of string
console.log(name.split(" "));
