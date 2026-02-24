// ===============================
// JAVASCRIPT PROBLEM SOLVING SHEET
// ===============================



// 1️⃣ Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));



// 2️⃣ Check Palindrome String
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));



// 3️⃣ Find Largest Number in Array
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([3, 7, 2, 9, 1]));



// 4️⃣ Count Vowels in String
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript"));



// 5️⃣ Sum of All Numbers in Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([10, 20, 30]));



// 6️⃣ Remove Duplicates from Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4]));



// 7️⃣ Find Second Largest Number
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([10, 5, 8, 20]));



// 8️⃣ Check Prime Number
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));



// 9️⃣ Flatten Nested Array (1 Level)
function flattenArray(arr) {
  return arr.flat();
}
console.log(flattenArray([1,2,[3,4],5]));



// 🔟 Count Occurrence of Each Element
function countOccurrences(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}
console.log(countOccurrences(["a","b","a","c","b"]));



// 1️⃣1️⃣ Find First Non-Repeating Character
function firstUniqueChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
console.log(firstUniqueChar("aabbcddee"));



// 1️⃣2️⃣ Check Balanced Parentheses
function isBalanced(str) {
  let stack = [];
  let map = { ')': '(', '}': '{', ']': '[' };

  for (let char of str) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isBalanced("{[()]}"));



// 1️⃣3️⃣ Find Missing Number (1 to n)
function findMissing(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}
console.log(findMissing([1,2,4,5], 5));



// 1️⃣4️⃣ Group Even and Odd Numbers
function groupEvenOdd(arr) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.even.push(num);
    } else {
      acc.odd.push(num);
    }
    return acc;
  }, { even: [], odd: [] });
}
console.log(groupEvenOdd([1,2,3,4,5,6]));



// 1️⃣5️⃣ Callback Calculator
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, multiply));



// 🔥 Bonus Output Question
console.log(1 + "2" + 3); // "123"



// =======================================
// JAVASCRIPT PROBLEM SOLVING SHEET – PART 2
// =======================================



// 1️⃣ Find Minimum Number in Array
function findMinimum(arr) {
  return Math.min(...arr);
}
console.log(findMinimum([5, 3, 9, 1, 6]));



// 2️⃣ Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("i love javascript"));



// 3️⃣ Check If Two Strings Are Anagrams
function isAnagram(str1, str2) {
  let a = str1.split("").sort().join("");
  let b = str2.split("").sort().join("");
  return a === b;
}
console.log(isAnagram("listen", "silent"));



// 4️⃣ Find Factorial Using Recursion
function factorialRecursive(n) {
  if (n === 0) return 1;
  return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5));



// 5️⃣ Generate Fibonacci Series (First N Terms)
function fibonacci(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibonacci(7));



// 6️⃣ Find Common Elements Between Two Arrays
function findCommon(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
console.log(findCommon([1,2,3,4], [3,4,5,6]));



// 7️⃣ Check If Array Is Sorted
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
console.log(isSorted([1,2,3,4]));



// 8️⃣ Find Longest Word in String
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("I am learning javascript deeply"));



// 9️⃣ Convert Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}
console.log(celsiusToFahrenheit(30));



// 🔟 Remove Falsy Values from Array
function removeFalsy(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsy([0, 1, false, 2, "", 3, null]));



// 1️⃣1️⃣ Count Words in a Sentence
function countWords(str) {
  return str.trim().split(/\s+/).length;
}
console.log(countWords("I love problem solving"));



// 1️⃣2️⃣ Find Index of Largest Number
function indexOfLargest(arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
}
console.log(indexOfLargest([5, 9, 2, 15, 6]));



// 1️⃣3️⃣ Reverse Number
function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(12345));



// 1️⃣4️⃣ Check If Object Is Empty
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmptyObject({}));



// 1️⃣5️⃣ Simple Sum Using Rest Parameter
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1,2,3,4,5));
