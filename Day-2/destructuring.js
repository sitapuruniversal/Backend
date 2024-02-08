/**
 * Destructuring in array
 */
const nums = [1, 2, 3, 4, 5];
/**
const [a, b, c, d, e] = [1, 2, 3, 4, 5];

console.log(nums);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


const [a, b, c, d] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const [p, q, r] = [1, 2, [4, 5, 6]];

console.log(p);
console.log(q);
console.log(r);
*/

// Destructuring in Object
const person = {
  name: "Sun",
  age: 25,
  city: "Stp",
  address: {
    City: "Mumbai",
    location: "S",
  },
};
const {
  name,
  age,
  city,
  address: { City, state },
} = person;

console.log(name);
console.log(age);
console.log(city);
console.log(City);
