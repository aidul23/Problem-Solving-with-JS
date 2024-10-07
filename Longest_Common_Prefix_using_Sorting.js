/*
Given an array of strings strs[]. The task is to return the longest common prefix among each and every strings present in the array. 
If there’s no prefix common in all the strings, return “-1”.

Examples:

Input: strs[] = [“geeksforgeeks”, “geeks”, “geek”, “geezer”]
Output: gee
Explanation: “gee” is the longest common prefix in all the given strings.


Input: strs[] = [“hello”, “world”]
Output: -1
Explanation: There’s no common prefix in the given strings.
*/

function longestCommonPrefix(strs) {
  let strsSorted = strs.sort();

  let firstWord = strsSorted[0];
  let lastWord = strsSorted[strsSorted.length - 1];
  let minLen = Math.min(firstWord.length, lastWord.length);

  let i = 0;

  while (i < minLen && firstWord[i] === lastWord[i]) {
    i++;
  }

  if (i === 0) {
    return -1;
  }
  return lastWord.substring(0, i);
}

let strs = ["hello", "world"];
console.log(longestCommonPrefix(strs));
