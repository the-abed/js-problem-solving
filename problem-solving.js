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
