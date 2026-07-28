// ==============================
// Move even numbers to end
// ==============================
let ls = [1, 2, 3, 4, 5, 6]; // [1, 3, 5, 2, 4, 6]

let left = 0;
let right = ls.length - 1;

while (left < right) {
  if (ls[left] % 2 !== 0) {
    left += 1;
  } else {
    [ls[left], ls[right]] = [ls[right], ls[left]];
    right -= 1;
  }
}
console.log(ls);

for (let i = 0; i < ls.length; i++) {
  for (let j = 0; j < ls.length - 1; j++) {
    if (ls[j] % 2 === 0) {
      let temp = ls[j];
      ls[j] = ls[j + 1];
      ls[j + 1] = temp;
    }
  }
}
console.log(ls);

// ==============================
// Reverse list
// ==============================
ls = [1, 2, 3, 4, 5, 6];
let start = 0;
let end = ls.length - 1;
while (start < end) {
  let temp = ls[start];
  ls[start] = ls[end];
  ls[end] = temp;
  start += 1;
  end -= 1;
}
console.log(ls);

// ==============================
// Find missing number in list
// ==============================
ls = [1, 2, 3, 5];
for (let i = 0; i < ls.length - 1; i++) {
  if (ls[i] + 1 !== ls[i + 1]) {
    console.log(ls[i] + 1);
  }
}

// Find missing number in list with 0 to n
ls = [0, 1, 2, 4, 5];
let totalSum = (ls.length * (ls.length + 1)) / 2;
let actualSum = ls.reduce((a, b) => a + b, 0);
if (totalSum - actualSum !== 0) {
  console.log(totalSum - actualSum);
} else {
  console.log("no missing number");
}

// Group missing numbers in list
ls = [1, 6];
for (let i = 0; i < ls.length - 1; i++) {
  if (ls[i] + 1 !== ls[i + 1]) {
    for (let j = ls[i] + 1; j < ls[i + 1]; j++) {
      console.log(j);
    }
  }
}

// ==============================
// Find first non repeating character in string
// ==============================
let st = "programming";
let res = "";
for (let i = 0; i < st.length - 1; i++) {
  if (!st.slice(i + 1).includes(st[i]) && !res.includes(st[i])) {
    console.log(st[i]);
    break;
  } else {
    res += st[i];
  }
}

// or using dictionary (object) to count frequency
let dic = {};
for (const ch of st) {
  dic[ch] = (dic[ch] || 0) + 1;
}
for (const ch of st) {
  if (dic[ch] === 1) {
    console.log(ch);
    break;
  }
}

// or using count-like helper (JS strings don't have .count, use split length)
st = "bmmbabbmmb";
const countOccurrences = (s, ch) => s.split(ch).length - 1;
for (let i = 0; i < st.length; i++) {
  if (countOccurrences(st, st[i]) === 1) {
    console.log(st[i]);
    break;
  }
}

// ==============================
// Exception handling
// ==============================
// Note: JS doesn't have input() by default in Node without readline;
// this mirrors the try/except/finally structure using a placeholder value.
try {
  const numStr = "10"; // stand-in for user input
  const num = parseInt(numStr, 10);
  if (isNaN(num)) throw new TypeError("Invalid input! Please enter a valid integer.");
  if (num === 0) throw new RangeError("Cannot divide by zero.");
  const result = 10 / num;
  console.log("Result:", result);
} catch (e) {
  if (e instanceof TypeError) {
    console.log("Invalid input! Please enter a valid integer.");
  } else if (e instanceof RangeError) {
    console.log("Cannot divide by zero.");
  } else {
    console.log("Something went wrong:", e.message);
  }
} finally {
  console.log("Program executed successfully.");
}

// ==============================
// Sum of transactions per user
// ==============================
let transactions = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 300 },
  { user: "C", amount: 400 },
  { user: "B", amount: 100 },
]; // {A: 400, B: 300, C: 400}

let dicTx = {};
for (let i = 0; i < transactions.length; i++) {
  if (transactions[i].user in dicTx) {
    console.log("hi");
    dicTx[transactions[i].user] += transactions[i].amount;
  } else {
    console.log("first");
    dicTx[transactions[i].user] = transactions[i].amount;
  }
}
console.log(dicTx);
// To find the sum of all transactions for each user, we use an object to keep track of the
// total amount for each user. We iterate through the list of transactions, and for each
// transaction, we check if the user is already in the object. If they are, we add the
// transaction amount to their total; if not, we initialize their total with the amount.

// ==============================
// Rotate array to the right by k steps
// ==============================
ls = [1, 2, 3, 4, 5, 6];
let k = 3; // [4, 5, 6, 1, 2, 3]

function reverse(arr, st, ed) {
  while (st < ed) {
    let temp = arr[st];
    arr[st] = arr[ed];
    arr[ed] = temp;
    st += 1;
    ed -= 1;
  }
  return arr;
}

reverse(ls, 0, ls.length - 1);
reverse(ls, 0, k - 1);
reverse(ls, k, ls.length - 1);
console.log(ls);

// ==============================
// Max sum of subarray (LeetCode 53)
// ==============================
ls = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // output: 6 -> [4,-1,2,1]
let maxSum = -Infinity;
let currSum = 0;
let tempStart = 0;
let mStart = 0;
let mEnd = 0;

for (let i = 0; i < ls.length; i++) {
  if (currSum === 0) {
    tempStart = i;
  }
  currSum += ls[i];
  if (currSum > maxSum) {
    maxSum = currSum;
    mStart = tempStart;
    mEnd = i;
  }
  if (currSum < 0) {
    currSum = 0;
  }
}
console.log(ls.slice(mStart, mEnd + 1));

// ==============================
// Reverse word order in sentence
// ==============================
st = "I love python"; // Output: "python love I"
res = "";
let word = "";
for (const ch of st) {
  if (ch !== " ") {
    word += ch;
  } else {
    res = word + " " + res;
    word = "";
  }
}
res = word + " " + res;
console.log(res);

// ==============================
// Find all subarrays with given sum
// ==============================
ls = [1, 3, 2, 4];
let targetSum = 6;
let subRes = [];

for (let i = 0; i < ls.length; i++) {
  let nested = [];
  let sumEle = 0;

  for (let j = i; j < ls.length; j++) {
    nested.push(ls[j]);
    sumEle += ls[j];

    if (sumEle === targetSum) {
      subRes.push([...nested]); // copy, since nested keeps mutating in next iteration
      break;
    }
  }
}
console.log(subRes); // [[1,3,2],[2,4]]

// optimized approach using hashmap prefix sum
let hp = {};
currSum = 0;
for (let i = 0; i < ls.length; i++) {
  currSum += ls[i];

  if (currSum === targetSum) {
    subRes.push(ls.slice(0, i + 1));
  }

  if (currSum - targetSum in hp) {
    subRes.push(ls.slice(hp[currSum - targetSum] + 1, i + 1));
  }
  hp[currSum] = i;
}
console.log(subRes); // [[1,3,2],[2,4]]

// ==============================
// Next char in alphabet (wrap z->a), then reverse string
// ==============================
st = "xyz"; // azy
res = "";
for (const ch of st) {
  let chars = "";
  if (ch.charCodeAt(0) === 122 || ch.charCodeAt(0) === 90) {
    chars = String.fromCharCode(ch.charCodeAt(0) - 25);
  } else {
    chars = String.fromCharCode(ch.charCodeAt(0) + 1);
  }
  res = chars + res;
}
console.log(res);

// ==============================
// Sort array based on frequency of elements
// ==============================
// input: arr = [1, 1, 2, 3, 3, 3]
// output: [3, 3, 3, 1, 1, 2]
let arr = [1, 1, 2, 3, 3, 3];
hp = {};
for (let i = 0; i < arr.length; i++) {
  hp[arr[i]] = (hp[arr[i]] || 0) + 1;
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (hp[arr[j]] < hp[arr[j + 1]]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log(arr);

// method 2
arr = [3, 3, 1, 2, 2, 2, 8, 8, 8, 8, 8];
hp = {};
let freqRes = [];
for (let i = 0; i < arr.length; i++) {
  hp[arr[i]] = (hp[arr[i]] || 0) + 1;
}
let sortedArr = Object.entries(hp).sort((a, b) => b[1] - a[1]);
arr = [];
for (const [key, val] of sortedArr) {
  console.log(key, val);
  for (let _ = 0; _ < val; _++) {
    freqRes.push(Number(key));
  }
}
console.log(freqRes);

// ==============================
// Checking Armstrong number
// ==============================
let num = 153;
let tempNum = num;

function countNum(val) {
  let para = val;
  let count = 0;
  console.log(para);
  while (para !== 0) {
    count += 1;
    para = Math.floor(para / 10);
  }
  return count;
}

function isMul(n, count) {
  return Math.pow(n, count);
}

function resultFn(count, n) {
  let sumNum = 0;
  for (let i = 0; i < count; i++) {
    console.log(n, "number digit");
    sumNum += isMul(n % 10, count);
    n = Math.floor(n / 10);
  }
  return sumNum;
}

let count = countNum(num);
let armstrongRes = resultFn(count, num);
console.log(armstrongRes);
if (armstrongRes === tempNum) {
  console.log("is amstromstorn number");
} else {
  console.log("not amstrong number");
}

// ==============================
// Sum / product of digits
// ==============================
num = 1124;
function sumOfDigit(n, isAdd) {
  let result = isAdd ? 0 : 1;
  let val = n;
  while (val !== 0) {
    let digit = val % 10;
    if (isAdd) {
      result += digit;
    } else {
      result *= digit;
    }
    val = Math.floor(val / 10);
  }
  return result;
}
let sumNum = sumOfDigit(num, true);
let mulNum = sumOfDigit(num, false);
console.log(sumNum, mulNum);

// ==============================
// Factorial of number
// ==============================
num = 5;
function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}
let factRes = fact(num);
console.log(factRes);

// or iteratively
num = 4;
factRes = 1;
for (let i = 1; i <= num; i++) {
  factRes = factRes * i;
}
console.log(factRes);

// ==============================
// Prime check
// ==============================
let prime = 11;
let isPrime = true;
for (let i = 2; i < 5; i++) {
  if (prime % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "is a prime number" : "not a primenumber");

// print prime numbers in range 1 to n
let n = 20;
for (let i = 2; i <= n; i++) {
  isPrime = true;
  for (let j = 2; j <= Math.floor(i / 2); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// ==============================
// Move zeros to end
// ==============================
ls = [1, 0, 2, 0, 3, 0, 4];
let pos = 0;
for (let i = 0; i < ls.length; i++) {
  if (ls[i] !== 0) {
    [ls[pos], ls[i]] = [ls[i], ls[pos]];
    pos += 1;
  }
}
console.log(ls);

// ==============================
// First non-repeating character (variant)
// ==============================
let string1 = "aabbcde"; // Output: c
let revString = "";
for (let i = 0; i < string1.length - 1; i++) {
  if (!string1.slice(i + 1).includes(string1[i]) && !revString.includes(string1[i])) {
    console.log(string1[i]);
    break;
  } else {
    revString += string1[i];
  }
}

string1 = "aabbcde";
let freq = {};
for (const ch of string1) {
  freq[ch] = (freq[ch] || 0) + 1;
}
for (const ch of string1) {
  if (freq[ch] === 1) {
    console.log(ch);
    break;
  }
}

// ==============================
// Second largest number in array
// ==============================
arr = [10, 5, 8, 20, 20];
let first = -Infinity;
let second = -Infinity;

for (const numVal of arr) {
  if (numVal > first) {
    second = first;
    first = numVal;
  } else if (numVal < first && numVal > second) {
    second = numVal;
  }
}
console.log(second);

// ==============================
// Count of each character in string (LeetCode 443 style)
// ==============================
let s = "aaabbcc"; // Output: "a3b2c1"
res = "";
let charCount = 0;
for (let i = 0; i < s.length - 1; i++) {
  let ch = s[i];
  if (ch === s[i + 1]) {
    charCount += 1;
    console.log(ch, charCount);
  } else {
    res = res + ch + String(charCount + 1);
    charCount = 0;
  }
}
res = res + s[s.length - 1] + String(charCount + 1);
console.log(res);

// ==============================
// Leaders in array (LeetCode-style, elements greater than all to their right)
// ==============================
ls = [16, 17, 4, 3, 5, 2];
let leaders = [];
let currentMax = ls[ls.length - 1];
leaders.push(currentMax);
for (let i = ls.length - 2; i >= 0; i--) {
  if (ls[i] > currentMax) {
    currentMax = ls[i];
    leaders.push(currentMax);
  }
}
leaders.reverse();
console.log(leaders); // [17, 5, 2]

// ==============================
// Two Sum
// ==============================
let nums = [2, 7, 11, 15];
let target = 9;
let mp = {};

for (let i = 0; i < nums.length; i++) {
  let diff = target - nums[i];
  if (diff in mp) {
    console.log([mp[diff], i]);
    break;
  }
  mp[nums[i]] = i;
}

// ==============================
// Reverse a string
// ==============================
s = "madams";
let lsChars = s.split("");
start = 0;
end = lsChars.length - 1;
while (start < end) {
  [lsChars[start], lsChars[end]] = [lsChars[end], lsChars[start]];
  start += 1;
  end -= 1;
}
console.log(lsChars.join(""));

// ==============================
// Palindrome check
// ==============================
s = "madam";
start = 0;
end = s.length - 1;
let isPalindromeFlag = true;
while (start < end) {
  if (s[start] !== s[end]) {
    isPalindromeFlag = false;
    break;
  }
  start += 1;
  end -= 1;
}
console.log(isPalindromeFlag);

// ==============================
// Move negative numbers to end (order not important)
// ==============================
ls = [1, -2, 3, -4, 5]; // Output: [-2,-4,1,3,5]
start = 0;
end = ls.length - 2;

while (start < end) {
  if (ls[start] > 0) {
    [ls[start], ls[end]] = [ls[end], ls[start]];
  }
  start += 1;
  end -= 1;
}
console.log(ls);

// ++++++++++++++++++++++++++++++ sliding window ++++++++++++++++++++++++++++++
// ==============================
// Max sum subarray of size k
// ==============================
arr = [2, 1, 5, 1, 3, 2];
k = 3; // Output: 9  (5+1+3)
let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
maxSum = windowSum;

for (let i = k; i < arr.length; i++) {
  windowSum += arr[i];
  windowSum -= arr[i - k];
  maxSum = Math.max(maxSum, windowSum);
}
console.log(maxSum);

// ==============================
// Valid parentheses
// ==============================
s = "([{}])";
hp = {
  ")": "(",
  "}": "{",
  "]": "[",
};

let stack = [];
for (const val of s) {
  if (val in hp) {
    if (stack.length && stack[stack.length - 1] !== hp[val]) {
      console.log(false);
      break;
    }
    stack.pop();
  } else {
    stack.push(val);
  }
}
console.log(stack);

// ==============================
// Print output {a.b.c: 1} (flatten nested object)
// ==============================
let obj = {
  a: { b: { c: 1 } },
};

function fn(hpObj, pre, resObj) {
  for (const [key, val] of Object.entries(hpObj)) {
    let targetKey = pre ? `${pre}.${key}` : key;
    if (typeof val === "object" && val !== null && val !== "") {
      fn(val, targetKey, resObj);
    } else {
      resObj[targetKey] = val;
    }
  }
  return resObj;
}
let flattenResult = fn(obj, "", {});
console.log(flattenResult);

// ==============================
// Remove duplicates (optimal / brute)
// ==============================
arr = [1, 2, 2, 4, 3, 3, 3];

let i = 0;
while (i < arr.length) {
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
    } else {
      j += 1;
    }
  }
  i += 1;
}
console.log(arr);

// ==============================
// Majority Element (LeetCode 169)
// ==============================
nums = [3, 2, 3];
let majority = Math.floor(nums.length / 2);
hp = {};
for (let i = 0; i < nums.length; i++) {
  hp[nums[i]] = (hp[nums[i]] || 0) + 1;
}
for (const [key, val] of Object.entries(hp)) {
  if (val > majority) {
    console.log(key);
  }
}

// ==============================
// Longest consecutive sequence (LeetCode 128 style, "common subsequence")
// ==============================
arr = [100, 4, 200, 1, 3, 2]; // Output: 4  [1,2,3,4]
let setArr = new Set(arr);
console.log(setArr);
let lcsCount = 0;

for (const val of setArr) {
  let currCount = 0;
  if (!setArr.has(val - 1)) {
    let curr = val;
    while (setArr.has(curr)) {
      currCount += 1;
      curr += 1;
    }
  }
  lcsCount = Math.max(lcsCount, currCount);
}
console.log(lcsCount);

// ==============================
// Longest repeating character replacement (LeetCode 424)
// ==============================
s = "AABABBA";
k = 1;

let leftIdx = 0;
hp = {};
let maxFreq = 0;
let lrcrRes = 0;

for (let rightIdx = 0; rightIdx < s.length; rightIdx++) {
  hp[s[rightIdx]] = (hp[s[rightIdx]] || 0) + 1;

  maxFreq = Math.max(maxFreq, hp[s[rightIdx]]);

  while (rightIdx - leftIdx + 1 - maxFreq > k) {
    hp[s[leftIdx]] -= 1;
    leftIdx += 1;
  }
  lrcrRes = Math.max(lrcrRes, rightIdx - leftIdx + 1);
}
console.log(lrcrRes);

// ==============================
// Digit sum reduce to single digit
// ==============================
// Input: 9875 -> 9+8+7+5 = 29 -> 2+9 = 11 -> 1+1 = 2
num = 9875;
while (num > 10) {
  let dum = 0;
  while (num !== 0) {
    let digit = num % 10;
    dum += digit;
    num = Math.floor(num / 10);
  }
  num = dum;
}
console.log(num);

// ==============================
// LeetCode 125 - Valid Palindrome (ignore special chars)
// ==============================
s = "A man, a plan, a canal: Panama".toLowerCase();

function isPalin(startI, endI, str) {
  while (startI < endI) {
    if (str[startI] !== str[endI]) {
      return false;
    }
    startI += 1;
    endI -= 1;
  }
  return true;
}

let cleanStr = "";
for (let i = 0; i < s.length; i++) {
  const code = s.charCodeAt(i);
  if (code >= 97 && code <= 122) {
    cleanStr += s[i];
  }
}
console.log(isPalin(0, cleanStr.length - 1, cleanStr));

// or:
function isPalindrome(str) {
  let l = 0,
    r = str.length - 1;

  const isAlnum = (ch) => /[a-zA-Z0-9]/.test(ch);

  while (l < r) {
    while (l < r && !isAlnum(str[l])) l += 1;
    while (l < r && !isAlnum(str[r])) r -= 1;

    if (str[l].toLowerCase() !== str[r].toLowerCase()) {
      return false;
    }

    l += 1;
    r -= 1;
  }

  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));

// ==============================
// Remove adjacent duplicates (LeetCode 1047)
// ==============================
s = "abbaca"; // Output: "ca"
stack = [];
for (let i = 0; i < s.length; i++) {
  if (stack.length && stack[stack.length - 1] === s[i]) {
    console.log("True");
    stack.pop();
  } else {
    stack.push(s[i]);
  }
}
console.log(stack);

// ==============================
// Longest common prefix (LeetCode 14)
// ==============================
function longestCommonPrefix(strs) {
  let ref = strs[0];

  for (let i = 0; i < ref.length; i++) {
    for (const word of strs.slice(1)) {
      if (word[i] !== ref[i]) {
        return ref.slice(0, i);
      }
    }
  }
  return ref;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// ==============================
// Valid Anagram (LeetCode 242)
// ==============================
class SolutionAnagram {
  isAnagram(s, t) {
    let hpObj = {};
    for (let i = 0; i < s.length; i++) {
      if (s.length !== t.length) {
        return false;
      }
      hpObj[s[i]] = (hpObj[s[i]] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
      if (!(t[i] in hpObj)) {
        return false;
      }
      hpObj[t[i]] -= 1;
      if (hpObj[t[i]] < 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(new SolutionAnagram().isAnagram("anagram", "nagaram"));

// ==============================
// Repeat characters by count prefix
// ==============================
// Input: ["2A", "3B", "4C"] -> ["AA", "BBB", "CCCC"]
arr = ["2A", "3B", "4C"];
let repeatRes = [];
for (const val of arr) {
  let sBuild = "";
  if (val.length === 2) {
    for (let i = 0; i < Number(val[0]); i++) {
      sBuild += val.slice(1);
    }
  }
  repeatRes.push(sBuild);
}
console.log(repeatRes);

// count occurrence of each character in val
arr = [1, 2, 2, 4, 3, 3, 3];
let resCount = {};
for (const val of arr) {
  resCount[val] = (resCount[val] || 0) + 1;
}
console.log(resCount);

// ==============================
// Flatten object values into single array
// ==============================
// [1, 2, 3, 1, 4, 5, 6, 7]
obj = {
  key1: [1, 2, 3],
  key2: [1, "$", 4],
  key3: [5, 6],
  key4: 7,
};
let flatRes = [];
for (const val of Object.values(obj)) {
  if (Array.isArray(val)) {
    for (const item of val) {
      if (Number.isInteger(item)) {
        flatRes.push(item);
      }
    }
  } else {
    flatRes.push(val);
  }
}
console.log(flatRes);

// ==============================
// Find all anagrams grouping (LeetCode 438-style / group anagrams)
// ==============================
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
hp = {};

for (const val of strs) {
  let sortVal = val.split("").sort().join("");
  if (sortVal in hp) {
    hp[sortVal].push(val);
  } else {
    hp[sortVal] = [val];
  }
}
console.log(Object.values(hp));

// ==============================
// Remove duplicates from sorted array
// ==============================
arr = [1, 1, 2, 2, 3, 3];
i = 0;
for (let j = 1; j < arr.length; j++) {
  if (arr[i] !== arr[j]) {
    i += 1;
    arr[i] = arr[j];
  }
}
console.log(arr.slice(0, i + 1));

// ==============================
// Remove duplicates from unsorted array
// ==============================
arr = [3, 1, 2, 1, 3, 2];
i = 0;
while (i < arr.length) {
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
    } else {
      j += 1;
    }
  }
  i += 1;
}
console.log(arr); // [3, 1, 2]

// ==============================
// Missing number in array of 0..n
// ==============================
arr = [3, 0, 1];
n = arr.length;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
for (const numVal of arr) {
  actualSum += numVal;
}
console.log(expectedSum - actualSum);

// ==============================
// First missing positive integer
// ==============================
arr = [2, 4, -1, 1]; // output: 3
let numSet = new Set(arr);
let missing = 1;
while (numSet.has(missing)) {
  missing += 1;
}
console.log(missing); // 3

// ==============================
// Max sum subarray (again)
// ==============================
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Output: 6
maxSum = -Infinity;
currSum = 0;
let startVal = 0;
start = 0;
end = 0;

for (let i = 0; i < arr.length; i++) {
  if (currSum === 0) {
    startVal = i;
  }
  currSum += arr[i];
  if (currSum > maxSum) {
    maxSum = currSum;
    start = startVal;
    end = i;
  }
  if (currSum < 0) {
    currSum = 0;
  }
}
console.log(maxSum, start, end);

// ==============================
// Longest increasing subsequence (no DP / brute recursion)
// ==============================
arr = [10, 9, 2, 5, 3, 7, 101, 18]; // Output: 4  [2,3,7,101]

function lisNoDp(index, prevIndex, array, n) {
  if (index === n) return 0;
  let notTake = 0 + lisNoDp(index + 1, prevIndex, array, n);
  let take = 0;
  if (prevIndex === -1 || array[index] > array[prevIndex]) {
    take = 1 + lisNoDp(index + 1, index, array, n);
  }
  return Math.max(take, notTake);
}
let lisRes = lisNoDp(0, -1, arr, arr.length - 1);
console.log(lisRes);

// ==============================
// Longest increasing subsequence (with DP memo)
// ==============================
arr = [3, 1, 2]; // Output: 4 (per original comment)

function lisDp(index, prevIndex, array, n, dp) {
  if (index === n) return 0;

  if (dp[index][prevIndex + 1] !== -1) {
    return dp[index][prevIndex + 1];
  }

  let notTake = lisDp(index + 1, prevIndex, array, n, dp);

  let take = 0;
  if (prevIndex === -1 || array[index] > array[prevIndex]) {
    take = 1 + lisDp(index + 1, index, array, n, dp);
  }

  dp[index][prevIndex + 1] = Math.max(take, notTake);
  console.log(dp);
  return dp[index][prevIndex + 1];
}

n = arr.length;
let dpLis = Array.from({ length: arr.length }, () => new Array(n + 1).fill(-1));
console.log(dpLis);
lisRes = lisDp(0, -1, arr, n, dpLis);
console.log(lisRes);

// ==============================
// Merge sort (LeetCode 912)
// ==============================
class SolutionSortArray {
  sortArray(numsArr) {
    const mergeSortFn = (arrIn) => {
      if (arrIn.length <= 1) return arrIn;
      const mid = Math.floor(arrIn.length / 2);
      const leftArr = mergeSortFn(arrIn.slice(0, mid));
      const rightArr = mergeSortFn(arrIn.slice(mid));
      return mergeFn(leftArr, rightArr);
    };
    const mergeFn = (leftArr, rightArr) => {
      let ii = 0,
        jj = 0;
      let resArr = [];
      while (ii < leftArr.length && jj < rightArr.length) {
        if (leftArr[ii] < rightArr[jj]) {
          resArr.push(leftArr[ii]);
          ii += 1;
        } else {
          resArr.push(rightArr[jj]);
          jj += 1;
        }
      }
      resArr = resArr.concat(leftArr.slice(ii)).concat(rightArr.slice(jj));
      return resArr;
    };
    return mergeSortFn(numsArr);
  }
}
console.log(new SolutionSortArray().sortArray([5, 2, 3, 1]));

// ==============================
// Best time to buy and sell stock (LeetCode 121)
// ==============================
class SolutionMaxProfit {
  maxProfit(prices) {
    let buy = prices[0];
    let sellProfit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < buy) {
        buy = prices[i];
      } else if (sellProfit < prices[i] - buy) {
        sellProfit = prices[i] - buy;
      }
    }
    return sellProfit;
  }
}
console.log(new SolutionMaxProfit().maxProfit([7, 1, 5, 3, 6, 4]));

// ==============================
// Coin change 2
// ==============================
class SolutionCoinChange2 {
  change(amount, coins) {
    const nCoins = coins.length;
    const dp = Array.from({ length: nCoins }, () => new Array(amount + 1).fill(-1));
    return this.f(nCoins - 1, amount, coins, dp);
  }
  f(index, target, arrIn, dp) {
    if (index === 0) {
      return target % arrIn[0] === 0 ? 1 : 0;
    }
    if (dp[index][target] !== -1) {
      return dp[index][target];
    }
    const notTake = this.f(index - 1, target, arrIn, dp);
    let take = 0;
    if (target >= arrIn[index]) {
      take = this.f(index, target - arrIn[index], arrIn, dp);
    }
    dp[index][target] = take + notTake;
    return dp[index][target];
  }
}
console.log(new SolutionCoinChange2().change(4, [1, 2, 3])); // 4

// ==============================
// 0/1 knapsack style - paint walls (recursion w/ memo, plain object)
// ==============================
class SolutionPaintWalls {
  paintWalls(cost, time) {
    const nWalls = cost.length;
    const dp = {};

    const fnRec = (i) => {
      if (i >= nWalls) return 0;
      if (i in dp) return dp[i];

      // Option 1: take paid painter
      const take = cost[i] + fnRec(i + time[i] + 1);

      // Option 2: skip
      const skip = fnRec(i + 1);

      dp[i] = Math.min(take, skip);
      return dp[i];
    };

    return fnRec(0);
  }
}
// example: cost = [1, 2, 3], time = [1, 2, 3] -> 2

// DP paint walls (duplicate of above)
class SolutionPaintWallsDP {
  paintWalls(cost, time) {
    const nWalls = cost.length;
    const dp = {};

    const fnRec = (i) => {
      if (i >= nWalls) return 0;
      if (i in dp) return dp[i];

      const take = cost[i] + fnRec(i + time[i] + 1);
      const skip = fnRec(i + 1);

      dp[i] = Math.min(take, skip);
      return dp[i];
    };

    return fnRec(0);
  }
}

// ==============================
// Longest common subsequence (LeetCode 1143)
// ==============================
class SolutionLCS {
  longestCommonSubsequence(text1, text2) {
    const len1 = text1.length;
    const len2 = text2.length;
    const dp = Array.from({ length: len1 }, () => new Array(len2).fill(-1));

    return this.fn(len1 - 1, len2 - 1, text1, text2, dp);
  }

  fn(i, j, s1, s2, dp) {
    if (i < 0 || j < 0) return 0;
    if (dp[i][j] !== -1) return dp[i][j];
    if (s1[i] === s2[j]) {
      dp[i][j] = 1 + this.fn(i - 1, j - 1, s1, s2, dp);
    } else {
      dp[i][j] = 0 + Math.max(this.fn(i - 1, j, s1, s2, dp), this.fn(i, j - 1, s1, s2, dp));
    }
    return dp[i][j];
  }
}
console.log(new SolutionLCS().longestCommonSubsequence("abcde", "ace")); // 3

// ==============================
// Edit distance (LeetCode 72)
// ==============================
class SolutionEditDistance {
  minDistance(word1, word2) {
    const l1 = word1.length;
    const l2 = word2.length;
    const dp = Array.from({ length: l1 }, () => new Array(l2).fill(-1));
    return this.fn(l1 - 1, l2 - 1, word1, word2, dp);
  }
  fn(i, j, s1, s2, dp) {
    if (i < 0) return j + 1;
    if (j < 0) return i + 1;
    if (dp[i][j] !== -1) return dp[i][j];

    if (s1[i] === s2[j]) {
      dp[i][j] = 0 + this.fn(i - 1, j - 1, s1, s2, dp);
      return dp[i][j];
    }
    dp[i][j] =
      1 +
      Math.min(
        this.fn(i - 1, j, s1, s2, dp),
        this.fn(i, j - 1, s1, s2, dp),
        this.fn(i - 1, j - 1, s1, s2, dp)
      );
    return dp[i][j];
  }
}
console.log(new SolutionEditDistance().minDistance("horse", "ros")); // 3

// ==============================
// Edit distance - delete-only operations (LeetCode 583)
// ==============================
class SolutionEditDistanceDeleteOnly {
  minDistance(word1, word2) {
    const dp = Array.from({ length: word1.length }, () => new Array(word2.length).fill(-1));
    return this.fn(word1.length - 1, word2.length - 1, word1, word2, dp);
  }
  fn(i, j, s1, s2, dp) {
    if (i < 0) return j + 1;
    if (j < 0) return i + 1;
    if (dp[i][j] !== -1) return dp[i][j];
    if (s1[i] === s2[j]) {
      dp[i][j] = 0 + this.fn(i - 1, j - 1, s1, s2, dp);
      return dp[i][j];
    }
    dp[i][j] = 1 + Math.min(this.fn(i - 1, j, s1, s2, dp), this.fn(i, j - 1, s1, s2, dp));
    return dp[i][j];
  }
}

// ==============================
// Make three strings equal (min deletions)
// ==============================
class SolutionThreeStringsEqual {
  findMinimumOperations(s1, s2, s3) {
    const resVal = this.fn(s1.length - 1, s2.length - 1, s3.length - 1, s1, s2, s3);
    return resVal !== Infinity ? resVal : -1;
  }

  fn(i, j, k, s1, s2, s3) {
    if (k < 0) {
      return i + 1 + (j + 1);
    }
    if (i < 0 || j < 0) {
      return Infinity;
    }
    if (s1[i] === s2[j] && s2[j] === s3[k]) {
      return this.fn(i - 1, j - 1, k - 1, s1, s2, s3);
    }
    return (
      1 +
      Math.min(this.fn(i - 1, j, k, s1, s2, s3), this.fn(i, j - 1, k, s1, s2, s3))
    );
  }
}

// ==============================
// Minimum path sum (LeetCode 64)
// ==============================
class SolutionMinPathSum {
  minPathSum(grid) {
    const dp = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(-1));
    return this.fn(0, 0, grid, dp);
  }

  fn(i, j, grid, dp) {
    if (i >= grid.length || j >= grid[0].length) {
      return Infinity;
    }
    if (dp[i][j] !== -1) return dp[i][j];

    if (i === grid.length - 1 && j === grid[0].length - 1) {
      return grid[i][j];
    }

    const moveNxCol = grid[i][j] + this.fn(i, j + 1, grid, dp);
    const moveNextRow = grid[i][j] + this.fn(i + 1, j, grid, dp);

    dp[i][j] = Math.min(moveNxCol, moveNextRow);
    return dp[i][j];
  }
}
console.log(
  new SolutionMinPathSum().minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
); // 7

// ==============================
// Word break (LeetCode 139)
// ==============================
class SolutionWordBreak {
  wordBreak(s, wordDict) {
    const nLen = s.length + 1;
    const dp = new Array(nLen).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && wordDict.includes(s.slice(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }
    return dp[dp.length - 1];
  }
}
console.log(new SolutionWordBreak().wordBreak("leetcode", ["leet", "code"])); // true

// ==============================
// Partition equal subset sum (LeetCode 416)
// ==============================
class SolutionCanPartition {
  canPartition(nums) {
    const l = nums.length - 1;

    const tSum = nums.reduce((a, b) => a + b, 0);
    if (tSum % 2 !== 0) return false;
    const target = tSum / 2;

    const dp = Array.from({ length: nums.length }, () => new Array(target + 1).fill(-1));
    return this.fn(l, target, nums, dp);
  }

  fn(i, target, arrIn, dp) {
    if (target === 0) return true;
    if (i === 0) return target === arrIn[i];
    if (dp[i][target] !== -1) return dp[i][target];
    const notTake = this.fn(i - 1, target, arrIn, dp);
    let take = false;
    if (arrIn[i] < target) {
      take = this.fn(i - 1, target - arrIn[i], arrIn, dp);
    }
    dp[i][target] = take || notTake;
    return dp[i][target];
  }
}
console.log(new SolutionCanPartition().canPartition([1, 5, 11, 5])); // true

// ==============================
// Number of islands (LeetCode 200)
// ==============================
class SolutionNumIslands {
  numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rowLen = grid.length;
    const colLen = grid[0].length;
    const visited = new Set();

    let count = 0;

    for (let row = 0; row < rowLen; row++) {
      for (let col = 0; col < colLen; col++) {
        const key = `${row},${col}`;
        if (grid[row][col] === "1" && !visited.has(key)) {
          count += 1;
          this.bfs(row, col, visited, grid, rowLen, colLen);
        }
      }
    }

    return count;
  }

  bfs(row, col, visited, grid, rowLen, colLen) {
    const queue = [[row, col]];
    visited.add(`${row},${col}`);

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const nrow = r + dr;
        const ncol = c + dc;
        const key = `${nrow},${ncol}`;

        if (
          nrow >= 0 &&
          nrow < rowLen &&
          ncol >= 0 &&
          ncol < colLen &&
          grid[nrow][ncol] === "1" &&
          !visited.has(key)
        ) {
          queue.push([nrow, ncol]);
          visited.add(key);
        }
      }
    }
  }
}

// ==============================
// Kahn's algorithm for topological sort
// ==============================
// Algorithm: calculate indegree of each node and build the adjacency list,
// add all nodes with indegree 0 to queue, then pop from queue and add to
// topo sort result, decrease indegree of its neighbors by 1, and if any
// neighbor's indegree becomes 0, add it to queue.
function topoSort(nNodes, edges) {
  const adj = {};
  for (let i = 0; i < nNodes; i++) adj[i] = [];
  const indegree = new Array(nNodes).fill(0);

  // build graph
  for (const [u, v] of edges) {
    adj[u].push(v);
    indegree[v] += 1;
  }

  // queue of 0 indegree nodes
  const queue = [];
  for (let i = 0; i < nNodes; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const topo = [];

  while (queue.length) {
    const node = queue.shift();
    topo.push(node);

    for (const nei of adj[node]) {
      indegree[nei] -= 1;
      if (indegree[nei] === 0) queue.push(nei);
    }
  }

  // cycle check
  if (topo.length !== nNodes) return []; // cycle exists

  return topo;
}

// ==============================
// Flood fill (LeetCode 733)
// ==============================
class SolutionFloodFill {
  floodFill(image, sr, sc, color) {
    const rLen = image.length;
    const cLen = image[0].length;
    const visited = new Set();
    const originalC = image[sr][sc];
    if (originalC === color) return image;
    return this.dfs(sr, sc, image, visited, rLen, cLen, color, originalC);
  }

  dfs(sr, sc, image, visited, rLen, cLen, color, originalC) {
    visited.add(`${sr},${sc}`);
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const que = [[sr, sc]];
    image[sr][sc] = color;

    while (que.length) {
      const [r, c] = que.shift();
      for (const [row, col] of directions) {
        const dR = row + r;
        const dc = c + col;
        if (dR >= 0 && dR < rLen && dc >= 0 && dc < cLen && image[dR][dc] === originalC) {
          image[dR][dc] = color;
          que.push([dR, dc]);
        }
      }
    }
    return image;
  }
}
console.log(
  new SolutionFloodFill().floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

// ==============================
// Rotten oranges (LeetCode 994)
// ==============================
class SolutionOrangesRotting {
  orangesRotting(grid) {
    const rLen = grid.length;
    const cLen = grid[0].length;
    const que = [];
    let fresh = 0;

    for (let row = 0; row < rLen; row++) {
      for (let col = 0; col < cLen; col++) {
        if (grid[row][col] === 2) {
          que.push([row, col]);
        } else if (grid[row][col] === 1) {
          fresh += 1;
        }
      }
    }

    if (fresh === 0) return 0;

    let minutes = 0;
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (que.length) {
      const size = que.length;
      for (let _ = 0; _ < size; _++) {
        const [r, c] = que.shift();

        for (const [rcol, ccol] of directions) {
          const rd = rcol + r;
          const cd = c + ccol;
          if (rd >= 0 && rd < rLen && cd >= 0 && cd < cLen && grid[rd][cd] === 1) {
            grid[rd][cd] = 2;
            que.push([rd, cd]);
            fresh -= 1;
          }
        }
      }
      minutes += 1;
    }

    return fresh === 0 ? minutes - 1 : -1;
  }
}
console.log(
  new SolutionOrangesRotting().orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4

// ==============================
// Surrounded regions (LeetCode 130)
// ==============================
class SolutionSurroundedRegions {
  solve(grid) {
    if (!grid || grid.length === 0) return 0;

    const rowLen = grid.length;
    const colLen = grid[0].length;

    for (let i = 0; i < rowLen; i++) {
      if (grid[i][0] === "O") this.bfs(i, 0, grid, rowLen, colLen);
      if (grid[i][colLen - 1] === "O") this.bfs(i, colLen - 1, grid, rowLen, colLen);
    }
    for (let j = 0; j < colLen; j++) {
      if (grid[0][j] === "O") this.bfs(0, j, grid, rowLen, colLen);
      if (grid[rowLen - 1][j] === "O") this.bfs(rowLen - 1, j, grid, rowLen, colLen);
    }
    for (let i = 0; i < rowLen; i++) {
      for (let j = 0; j < colLen; j++) {
        if (grid[i][j] === "S") {
          grid[i][j] = "O";
        } else if (grid[i][j] === "O") {
          grid[i][j] = "X";
        }
      }
    }

    return grid;
  }

  bfs(row, col, grid, rowLen, colLen) {
    const queue = [[row, col]];
    grid[row][col] = "S";

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const nrow = r + dr;
        const ncol = c + dc;

        if (
          nrow >= 0 &&
          nrow < rowLen &&
          ncol >= 0 &&
          ncol < colLen &&
          grid[nrow][ncol] === "O"
        ) {
          grid[nrow][ncol] = "S";
          queue.push([nrow, ncol]);
        }
      }
    }
  }
}

// ==============================
// Subarray sum equal to k (sliding window variant, positive nums)
// ==============================
arr = [5, 2, 3, 4];
target = 7;

function findSubarrays(numsIn, kTarget) {
  let currSumLocal = 0;
  let startLocal = 0;
  const results = [];

  for (let endLocal = 0; endLocal < numsIn.length; endLocal++) {
    currSumLocal += numsIn[endLocal];

    // Shrink the window if the sum is too large
    while (currSumLocal > kTarget && startLocal <= endLocal) {
      currSumLocal -= numsIn[startLocal];
      startLocal += 1;
    }

    // Check if we hit the target
    if (currSumLocal === kTarget) {
      results.push(numsIn.slice(startLocal, endLocal + 1));
    }
  }

  return results;
}
console.log(findSubarrays(arr, target));

// ==============================
// Remove adjacent duplicates (LeetCode 1047, class version)
// ==============================
class SolutionRemoveDuplicates {
  removeDuplicates(s) {
    const stackLocal = [];
    for (const ch of s) {
      if (stackLocal.length && stackLocal[stackLocal.length - 1] === ch) {
        stackLocal.pop();
      } else {
        stackLocal.push(ch);
      }
    }
    return stackLocal.join("");
  }
}
console.log(new SolutionRemoveDuplicates().removeDuplicates("abbaca")); // "ca"

// ==============================
// Contiguous Array (LeetCode 525)
// ==============================
class SolutionFindMaxLength {
  findMaxLength(numsIn) {
    const numsCopy = [...numsIn];
    for (let i = 0; i < numsCopy.length; i++) {
      if (numsCopy[i] === 0) numsCopy[i] = -1;
    }
    const hpLocal = { 0: -1 };
    let sumEle = 0;
    let maxLen = -Infinity;
    for (let i = 0; i < numsCopy.length; i++) {
      sumEle += numsCopy[i];
      if (sumEle in hpLocal) {
        maxLen = Math.max(maxLen, i - hpLocal[sumEle]);
      } else {
        hpLocal[sumEle] = i;
      }
    }
    return maxLen;
  }
}
console.log(new SolutionFindMaxLength().findMaxLength([0, 1, 0])); // 2

// ==============================
// Product of Array Except Self (LeetCode 238)
// ==============================
class SolutionProductExceptSelf {
  productExceptSelf(numsIn) {
    const prefix = [];
    const sufix = [];

    let currP = 1;
    let sufP = 1;
    for (let i = 0; i < numsIn.length; i++) {
      prefix.push(currP);
      currP *= numsIn[i];
    }

    for (let j = numsIn.length - 1; j >= 0; j--) {
      sufix.unshift(sufP);
      sufP *= numsIn[j];
    }
    for (let i = 0; i < numsIn.length; i++) {
      numsIn[i] = prefix[i] * sufix[i];
    }

    return numsIn;
  }
}
console.log(new SolutionProductExceptSelf().productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]

// ==============================
// Maximum Product Subarray (LeetCode 152)
// ==============================
class SolutionMaxProduct {
  maxProduct(numsIn) {
    let maxProductVal = -Infinity;
    let pre = 1;
    let sufix = 1;

    for (let rightIdx = 0; rightIdx < numsIn.length; rightIdx++) {
      pre *= numsIn[rightIdx];
      sufix = sufix * numsIn[numsIn.length - rightIdx - 1];
      maxProductVal = Math.max(maxProductVal, pre, sufix);
      if (pre === 0) pre = 1;
      if (sufix === 0) sufix = 1;
    }

    return maxProductVal;
  }
}
console.log(new SolutionMaxProduct().maxProduct([2, 3, -2, 4])); // 6

// ==============================
// Sort Characters By Frequency (LeetCode 451)
// ==============================
class SolutionFrequencySort {
  frequencySort(s) {
    const hpLocal = {};
    let resLocal = "";
    for (const val of s) {
      hpLocal[val] = (hpLocal[val] || 0) + 1;
    }
    const sortedEntries = Object.entries(hpLocal).sort((a, b) => b[1] - a[1]);

    for (const [char, freqVal] of sortedEntries) {
      for (let j = 0; j < Number(freqVal); j++) {
        resLocal += char;
      }
    }
    return resLocal;
  }
}
console.log(new SolutionFrequencySort().frequencySort("tree")); // "eert"

// ==============================
// Validate Stack Sequences (LeetCode 946)
// ==============================
class SolutionValidateStackSequences {
  validateStackSequences(pushed, popped) {
    const stackLocal = [];
    let j = 0;
    for (let i = 0; i < pushed.length; i++) {
      stackLocal.push(pushed[i]);
      while (stackLocal.length && stackLocal[stackLocal.length - 1] === popped[j]) {
        stackLocal.pop();
        j += 1;
      }
    }
    return stackLocal.length === 0;
  }
}
console.log(
  new SolutionValidateStackSequences().validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])
); // true

// ==============================
// Two Sum (class version)
// ==============================
class SolutionTwoSum {
  twoSum(numsIn, targetIn) {
    const mpLocal = {};

    for (let i = 0; i < numsIn.length; i++) {
      const diff = targetIn - numsIn[i];

      if (diff in mpLocal) {
        return [mpLocal[diff], i];
      }

      mpLocal[numsIn[i]] = i;
    }
  }
}
console.log(new SolutionTwoSum().twoSum([2, 7, 11, 15], 9)); // [0,1]

// ==============================
// Longest Consecutive Sequence (LeetCode 128)
// ==============================
class SolutionLongestConsecutive {
  longestConsecutive(numsIn) {
    const seen = new Set(numsIn);
    let longest = 0;
    for (const numVal of seen) {
      if (!seen.has(numVal - 1)) {
        let length = 1;
        let current = numVal;
        while (seen.has(current + 1)) {
          current += 1;
          length += 1;
        }
        longest = Math.max(longest, length);
      }
    }
    return longest;
  }
}
console.log(new SolutionLongestConsecutive().longestConsecutive([100, 4, 200, 1, 3, 2])); // 4

// ==============================
// Minimum Cost to Cut a Stick (LeetCode 1547)
// ==============================
function fCutStick(i, j, cuts) {
  if (i > j) return 0;

  let mini = Infinity;

  for (let ind = i; ind <= j; ind++) {
    const costVal =
      cuts[j + 1] - cuts[i - 1] + fCutStick(i, ind - 1, cuts) + fCutStick(ind + 1, j, cuts);

    mini = Math.min(mini, costVal);
  }

  return mini;
}

function costCutStick(n, c, cuts) {
  // add boundaries
  cuts.push(n);
  cuts.unshift(0);

  cuts.sort((a, b) => a - b);

  // start recursion
  return fCutStick(1, c, cuts);
}

// ==============================
// Longest Substring with At Most K Distinct Characters (LeetCode 340)
// ==============================
s = "eceba";
k = 2;

let j = 0;
let maxLen = 0;

hp = {};

for (let i = 0; i < s.length; i++) {
  // add current character
  hp[s[i]] = (hp[s[i]] || 0) + 1;

  // shrink window if distinct chars > k
  while (Object.keys(hp).length > k) {
    hp[s[j]] -= 1;

    // remove character if frequency becomes 0
    if (hp[s[j]] === 0) {
      delete hp[s[j]];
    }

    j += 1;
  }

  // update maximum length
  maxLen = Math.max(maxLen, i - j + 1);
}
console.log(maxLen);

// ==============================
// Permutations (LeetCode 46)
// ==============================
s = "ab"; // [ab, ba]
let permRes = [];

function fnPerm(path, remaining) {
  if (remaining === "") {
    permRes.push(path);
    return;
  }

  for (let i = 0; i < remaining.length; i++) {
    const ch = remaining[i];

    const leftPart = remaining.slice(0, i);
    const rightPart = remaining.slice(i + 1);

    fnPerm(path + ch, leftPart + rightPart);
  }
}

fnPerm("", s);
console.log(permRes);

// ==============================
// Minimum Window Substring (LeetCode 76)
// ==============================
class SolutionMinWindow {
  minWindow(s, t) {
    const hpLocal = {};

    for (const ch of t) {
      hpLocal[ch] = (hpLocal[ch] || 0) + 1;
    }

    let count = 0;
    let j = 0;

    let start = -1;
    let minLen = Infinity;

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];

      if (ch in hpLocal) {
        hpLocal[ch] -= 1;

        if (hpLocal[ch] >= 0) {
          count += 1;
        }
      }

      while (count === t.length) {
        const windowLen = i - j + 1;

        if (windowLen < minLen) {
          minLen = windowLen;
          start = j;
        }

        const leftChar = s[j];

        if (leftChar in hpLocal) {
          hpLocal[leftChar] += 1;

          if (hpLocal[leftChar] > 0) {
            count -= 1;
          }
        }

        j += 1;
      }
    }

    if (start === -1) return "";

    return s.slice(start, start + minLen);
  }
}
console.log(new SolutionMinWindow().minWindow("ADOBECODEBANC", "ABC")); // "BANC"

// ==============================
// Contiguous Array (LeetCode 525, second version)
// ==============================
nums = [0, 0, 1, 1, 1];

currSum = 0;
maxLen = 0;

mp = { 0: -1 };

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 0) {
    nums[i] = -1;
  }

  currSum += nums[i];

  if (currSum in mp) {
    maxLen = Math.max(maxLen, i - mp[currSum]);
  } else {
    mp[currSum] = i;
  }
}

console.log(maxLen);
