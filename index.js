// Problem 1: Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // olleh


// Problem 2: Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming")); // 3


// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([5, 1, 9, 3])); // 9


// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1,2,3,4]


//Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]

//Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}

console.log(capitalizeWords("hello world")); // Hello World


// Problem 9: Find the Factorial of a Number
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // 120


// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();

// Problem 11: Swap Two Variables (Without Third Variable)
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b); // 10 5


// Problem 12: Check if a Number is Prime
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // true

// Problem 13: Find Second Largest Number in Array
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([10, 5, 20, 20, 8])); // 10



// Problem 14: Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(25)); // 77


// Problem 15: Sort an Array Ascending
let arr = [5, 2, 9, 1, 7];

arr.sort((a, b) => a - b);  // a - b → ascending ,  b - a → descending


console.log(arr); // [1, 2, 5, 7, 9]


// Problem 16: Sort Strings Alphabetically
let words = ["apple", "banana", "cherry", "date"];

words.sort();

console.log(words); // ["apple", "banana", "cherry", "date"]


// Problem 17: Sort Array of Objects by Property
let students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "John", marks: 78 }
];

students.sort((a, b) => b.marks - a.marks);

console.log(students);


// Problem 17: Find Duplicate Elements in an Array
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) duplicates.add(num);
    else seen.add(num);
  }
  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1]));


// Find Missing Numbers in an Array
function findMissing(arr) {
  let missing = [];
  let max = Math.max(...arr);

  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) missing.push(i);
  }
  return missing;
}

console.log(findMissing([1, 2, 4, 6]));


// Find Common Elements in Two Arrays
function findCommon(arr1, arr2) {
  let common = [];

  for (let num of arr1) {
    if (arr2.includes(num)) common.push(num);
  }
  return common;
}

console.log(findCommon([1, 2, 3], [2, 3, 4]));


// Find Sum of Digits
function sumDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumDigits(123)); // 6

// Multiply Two Numbers
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 6)); // 24


// Divide Two Numbers

function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

console.log(divide(10, 2)); // 5


//Find the Sum of Odd Numbers from 1 to N
function sumOdd(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(sumOdd(10)); // 25

//Count Digits of a Number (Without String)
function countDigits(num) {
  let count = 0;

  if (num === 0) return 1;

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

console.log(countDigits(12345)); // 5


// Callback Functions
function greet(name) {
  console.log("Hello " + name);
}

function sayHello(callback) {
  callback("Abed");
}

sayHello(greet); // Hello Abed

// Callback with Math Example (Beginner-Friendly)
function calculate(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(4, 5, add));      // 9
console.log(calculate(4, 5, multiply)); // 20


// Passed by value
let x = 5;
let y = x;
x = 10;
console.log(x); // 10
console.log(y); // 5

// Passed by reference
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 10;
console.log(arr1); // [10, 2, 3]
console.log(arr2); // [10, 2, 3]

// this keyword
let obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

obj.greet();

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Hello, world!");
})();

// Basic Callback Execution

function callMe(callback) {
  callback();
}

callMe(function () {
  console.log("Callback executed");
});

// Callback with Parameters
function processNumbers(a, b, callback) {
  callback(a, b);
}

processNumbers(5, 3, function (x, y) {
  console.log(x + y);
});



// Callback for Condition (Success / Fail)
function checkEven(num, callback) {
  callback(num % 2 === 0);
}

checkEven(10, function (result) {
  if (result) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
});


// Callback After Delay
function delayMessage(callback) {
  setTimeout(function () {
    callback();
  }, 1000);
}

delayMessage(function () {
  console.log("Hello after 1 second");
});


// Conditional 

// let num = 10;

// if (num > 0) {
//   console.log("Positive number");
// } else if (num < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Zero");
// } 

// Nested Condition

// let num = 10;

// if (num > 0) {
//   console.log("Positive number");
// } else {
//   if (num < 0) {
//     console.log("Negative number");
//   } else {
//     console.log("Zero");
//   }
// }

// Ternary Operator


// let num = 10;
// let result = num > 0 ? "Positive number" : num < 0 ? "Negative number" : "Zero";
// console.log(result);

// // Conditional styling

// let num = 10;

// if (num > 0) {
//   document.body.style.backgroundColor = "green";
// } else if (num < 0) {
//   document.body.style.backgroundColor = "red";
// } else {
//   document.body.style.backgroundColor = "blue";
// }


// Add, Subtract, Multiply using Callback

function operate(a, b, callback) {
  return callback(a, b);
}

function subtract(x, y) {
  return x - y;
}

console.log(operate(10, 3, subtract)); // 7


 //Greet User with Callback
 function greetUser(name, callback) {
  callback(name);
}

greetUser("Abed", function (name) {
  console.log("Welcome " + name);
});