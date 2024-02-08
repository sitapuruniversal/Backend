/**
const user = {
  name: "Sunil",
  age: 20,
  city: "Sitapur",
};

// Accessing data in Object
console.log(user.name);
console.log(user["age"]);

//Add new data in object

user.country = "India";
user["State"] = "UttarPradesh";
console.log(user);

// Deleting Object
delete user.country;
delete user["State"];

console.log(user);

*/

let userInfo = {
  name: "Sunil Kumar",
  age: 25,
  address: {
    city: "Sitapur",
    state: "UP",
    country: "India",
  },
};

// for (let key in userInfo) {
//   console.log(key, "=> ", userInfo[key]);
// }

// console.log(Object.keys(userInfo));
// console.log(Object.values(userInfo));

// Get both key and value

console.log(Object.entries(userInfo));

// cloning of object or copy

let new_userInfo = Object.assign({}, userInfo);
console.log(new_userInfo);

const new_person1 = Object.assign({}, userInfo, {
  role: "Full Stack Web Deveplor",
});
console.log(new_person1);
