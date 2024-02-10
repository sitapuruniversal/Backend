// function hello() {
//   let name = "sunil";
//   console.log(name);
// }
// hello();
// console.log(name);

function outerFunction() {
  let outerVar = " I am a Outer Varailbes";
  function innerFunction() {
    console.log(outerVar);
  }
  return innerFunction;
}

let fn = outerFunction();
fn();

function costomerCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("New Coustomer is ", count);
  };
}
let counter = costomerCounter();
counter();
counter();
counter();
