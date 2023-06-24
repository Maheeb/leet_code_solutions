/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let currentPosition = 0;
  let longLength = 0;
  let start =0;
    let set = new Set()
  while (currentPosition<s.length)
  {
    if (set.has(s[currentPosition]))
    {
        set.delete(s[start++])
    }
    else
    {
        set.add(s[currentPosition++])
        longLength = Math.max(longLength,set.size)
    }
  }
    return longLength
};
// let s = "abcabcbb"
// let s = "bbbbb"
let s = "pwwkew"
// let s = ""
console.log(lengthOfLongestSubstring(s))