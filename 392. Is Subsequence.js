/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

   let i =0,j=0;
   while (i < s.length && j < t.length)
   {
       if (s[i] === t[j])
       {
           i++;
           j++
       }
       else
       {
           j++;
       }

   }
   return i ===s.length;

};

// let s = "axc", t = "ahbgdc"
// let s = "abc", t = "ahbgdc"
// console.log(isSubsequence(s,t))