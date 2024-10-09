/*
Given a list of words followed by two words, the task is to find the minimum distance between the given two words in the list of words.

Examples:

Input: S = { “the”, “quick”, “brown”, “fox”, “quick”}, word1 = “the”, word2 = “fox”
Output: 3
Explanation: Minimum distance between the words “the” and “fox” is 3


Input: S = {“geeks”, “for”, “geeks”, “contribute”,  “practice”}, word1 = “geeks”, word2 = “practice”
Output: 2
Explanation: Minimum distance between the words “geeks” and “practice” is 2

*/

function findMinDis(s, word1, word2) {
  let l = -1;
  let h = -1;
  let ans = Number.MAX_VALUE;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === word1) {
      l = i;
    }
    if (s[i] === word2) {
      h = i;
    }
  }
  ans = Math.abs(h - l);
  return ans;
}

let S = ['geeks', 'for', 'geeks', 'contribute',  'practice'];

let word1 = "geeks",
  word2 = "practice";

console.log(findMinDis(S, word1, word2));
