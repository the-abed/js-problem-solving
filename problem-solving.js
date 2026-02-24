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



// =======================================
// JAVASCRIPT PROBLEM SOLVING SHEET – PART 3
// =======================================



// 1️⃣ Find the Sum of Even Numbers in Array
function sumEven(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}
console.log(sumEven([1,2,3,4,5,6]));



// 2️⃣ Rotate Array Right by 1 Step
function rotateRight(arr) {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}
console.log(rotateRight([1,2,3,4]));



// 3️⃣ Check If String Contains Only Digits
function onlyDigits(str) {
  return /^\d+$/.test(str);
}
console.log(onlyDigits("12345"));



// 4️⃣ Find Intersection Without Using Includes
function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return [...new Set(result)];
}
console.log(intersection([1,2,3,4], [3,4,5]));



// 5️⃣ Convert Array to Object
// Input: ["a", "b", "c"]
// Output: {0:"a",1:"b",2:"c"}
function arrayToObject(arr) {
  let obj = {};
  arr.forEach((item, index) => {
    obj[index] = item;
  });
  return obj;
}
console.log(arrayToObject(["a","b","c"]));



// 6️⃣ Count How Many Times a Specific Number Appears
function countSpecific(arr, target) {
  return arr.filter(num => num === target).length;
}
console.log(countSpecific([1,2,3,2,2,4], 2));



// 7️⃣ Check If Two Arrays Are Equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(arraysEqual([1,2,3], [1,2,3]));



// 8️⃣ Find Average of Numbers in Array
function findAverage(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}
console.log(findAverage([10,20,30]));



// 9️⃣ Remove Specific Value from Array
function removeValue(arr, value) {
  return arr.filter(item => item !== value);
}
console.log(removeValue([1,2,3,2,4], 2));



// 🔟 Find All Pairs That Sum to Target
function findPairs(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}
console.log(findPairs([1,2,3,4,5], 6));



// 1️⃣1️⃣ Find Longest Common Prefix
function longestCommonPrefix(arr) {
  if (!arr.length) return "";

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}
console.log(longestCommonPrefix(["flower","flow","flight"]));



// 1️⃣2️⃣ Merge Two Arrays and Sort
function mergeAndSort(arr1, arr2) {
  return [...arr1, ...arr2].sort((a,b) => a - b);
}
console.log(mergeAndSort([5,1], [3,2]));



// 1️⃣3️⃣ Toggle Case of String
function toggleCase(str) {
  return str
    .split("")
    .map(char =>
      char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase()
    )
    .join("");
}
console.log(toggleCase("AbCdE"));



// 1️⃣4️⃣ Find Duplicate Elements
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    }
    seen.add(num);
  }
  return [...duplicates];
}
console.log(findDuplicates([1,2,3,2,4,1]));



// 1️⃣5️⃣ Simple Debounce Function
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}


// =======================================
// JAVASCRIPT PROBLEM SOLVING SHEET – PART 4
// =======================================



// 1️⃣ Find Majority Element (appears more than n/2 times)
function majorityElement(arr) {
  let countMap = {};

  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;

    if (countMap[num] > arr.length / 2) {
      return num;
    }
  }

  return null;
}
console.log(majorityElement([2,2,1,2,3,2,2]));



// 2️⃣ Move All Zeros to End
function moveZeros(arr) {
  let nonZero = arr.filter(num => num !== 0);
  let zeros = arr.filter(num => num === 0);
  return [...nonZero, ...zeros];
}
console.log(moveZeros([0,1,0,3,12]));



// 3️⃣ Find First Duplicate Element
function firstDuplicate(arr) {
  let seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return null;
}
console.log(firstDuplicate([2,1,3,5,3,2]));



// 4️⃣ Deep Flatten Array (any level)
function deepFlatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(deepFlatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
console.log(deepFlatten([1,[2,[3,4],5]]));



// 5️⃣ Find Missing Numbers in Sequence
function findMissingNumbers(arr) {
  let missing = [];

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}
console.log(findMissingNumbers([1,2,4,6]));



// 6️⃣ Chunk Array into Size N
function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}
console.log(chunkArray([1,2,3,4,5,6], 2));



// 7️⃣ Find Longest Substring Without Repeating Characters
function longestUniqueSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, set.size);
  }

  return maxLength;
}
console.log(longestUniqueSubstring("abcabcbb"));



// 8️⃣ Group Array of Objects by Property
function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    let value = obj[key];

    if (!acc[value]) {
      acc[value] = [];
    }

    acc[value].push(obj);
    return acc;
  }, {});
}

console.log(groupBy([
  {name:"A", age:20},
  {name:"B", age:20},
  {name:"C", age:25}
], "age"));



// 9️⃣ Check If Two Objects Are Shallow Equal
function shallowEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
console.log(shallowEqual({a:1,b:2}, {a:1,b:2}));



// 🔟 Implement Simple Memoization
function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    let result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function slowAdd(a, b) {
  console.log("Calculating...");
  return a + b;
}

const fastAdd = memoize(slowAdd);

console.log(fastAdd(5, 10));
console.log(fastAdd(5, 10)); // cached



// 1️⃣1️⃣ Find All Unique Pairs That Sum to Target
function uniquePairs(arr, target) {
  let seen = new Set();
  let pairs = new Set();

  for (let num of arr) {
    let complement = target - num;

    if (seen.has(complement)) {
      pairs.add(JSON.stringify([num, complement].sort((a,b)=>a-b)));
    }

    seen.add(num);
  }

  return [...pairs].map(pair => JSON.parse(pair));
}
console.log(uniquePairs([1,2,3,4,3,2], 5));



// 1️⃣2️⃣ Convert Object to Query String
function objectToQuery(obj) {
  return Object.keys(obj)
    .map(key => key + "=" + encodeURIComponent(obj[key]))
    .join("&");
}
console.log(objectToQuery({name:"Abed", age:24}));



// 1️⃣3️⃣ Implement Once Function
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

const init = once(() => console.log("Initialized"));
init();
init();



// 1️⃣4️⃣ Find Maximum Occurring Character
function maxOccurringChar(str) {
  let map = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;

    if (map[char] > maxCount) {
      maxCount = map[char];
      maxChar = char;
    }
  }

  return maxChar;
}
console.log(maxOccurringChar("javascript"));



// 1️⃣5️⃣ Validate Email (Simple Regex)
function validateEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
console.log(validateEmail("test@example.com"));

