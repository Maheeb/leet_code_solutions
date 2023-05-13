/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let newStr = s.replace(/[^a-zA-Z0-9]/g, "");

    let reverse_string = newStr.split("").reverse().join("")

    return newStr.toLowerCase() === reverse_string.toLowerCase()

    
};
// let s = "A man, a plan, a canal: Panama"
// let s = "race a car"
let s = " "
console.log(isPalindrome(s))