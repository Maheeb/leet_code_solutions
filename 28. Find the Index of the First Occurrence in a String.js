/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var substrings = [];
    let needle_length = needle.length -1;

    for (var i = 0; i < haystack.length - needle_length; i++) {
        var substring = haystack.substring(i, i + needle.length);
        substrings.push(substring);
    }
    // console.log(substrings);

   for (let i =0; i <= substrings.length; i++)
   {
       if (substrings[i] === needle)
       {
           return i;
       }
   }
   return -1;
}
// let haystack = "sadbutsad", needle = "sad";
let haystack = "leetcode", needle = "leeto"
// let haystack = "hello", needle = "ll"
console.log(strStr(haystack,needle))