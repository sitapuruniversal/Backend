# Function 
''
  a function is a reusable block of code that performs a specific task or set of tasks. Functions allow you to break down your code into smaller, modular pieces, making it more organized, readable, and maintainable. Functions can be defined using the function keyword, and they can be invoked (called) to execute the code inside them.
  
    function: The keyword used to declare a function.
    functionName: The name you give to the function. This is how you    refer to and call the function later.
    parameters: Optional input values that the function can receive. They are placeholders for the actual values (arguments) passed when calling the function.
    {}: Curly braces contain the code block that represents the body of the function. This is where you write the instructions for what the function should do.function is a keyword
    return: return is used to return a function of value.

    Parameter: A variable in a method definition (function or constructor) representing a value that the method expects to receive.

    Argument: A value passed to a function or method when it is called. The function uses the arguments to perform its tasks.

''
# Type of a Function 
''
you can define functions in different ways.

    Function Declaration:

function add(a, b) { return a + b; }

Function Expression:


const add = function(a, b) { return a + b; };

Arrow Function:



const add = (a, b) => a + b;

Method Definition in Object Literal:



const myObject = {
  myMethod(a, b) { return a + b; }
};

(IIFE): Immediately Invoked Function Expression.



(function(a, b) { console.log(a + b); })(2, 3);

''
# ---------------------------- Scope in JavaScript ------------------

# What is Scope in JavaScript 
''
a. Global Scope : The highest level of scope in JavaScript, accessible throughout the entire program.
b. Function Scope: Variables declared inside a function are local to that function and not accessible outside of it.
c. Block Scope : Introduced in ECMAScript 6 (ES6), variables declared with let and const are block-scoped, confined to the block (statements between curly braces) in which they are defined.

Note Function Scope and Block Scope are also known as Local Scope.

var: keyword is a global variables 

''

# What is string.
''
String: 
A string is a primitive data type that represents a sequence of characters.
Strings are used to store and manipulate textual data. 
''
# What are the way of creating a string in JavaScript.
'' 
There are three way to create a string in javascript.
a. Single quotes (' ')
b. Double quotes (" ")
c. Backticks (` `)

Note : 
1. string is immutable 
'''

## Array 
''
An array is a data structure that allows you to store and organize multiple values in a single variable. Arrays can hold a variety of data types, including numbers, strings, objects, and even other arrays. The values in an array are called elements, and each element is associated with a numeric index.

  # Key features of arrays
  ''
      1.Zero-Based Indexing: The index of the first element in an array is 0, the second element is 1, and so on. You can access and modify array elements using these indices.

      2. Dynamic Size: Arrays in JavaScript are dynamic, meaning you can change their length by adding or removing elements. The length of an array is not fixed.

      3. Mixed Data Types: Arrays can contain elements of different data types, including numbers, strings, objects, functions, etc.

      4. Array Methods: 
         JavaScript provides a variety of built-in methods for manipulating arrays, such as push(), pop(), shift(), unshift(), splice(), concat() etc.
  ''
''
