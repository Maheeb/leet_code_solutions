/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    let left = 0, right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            return isPalindrome(s.slice(left, right)) || isPalindrome(s.slice(left + 1, right + 1));
        }

        left++;
        right--;
    }

    return true;

};
const isPalindrome = s => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
// let s = "aba"
let s = "abca"
console.log(validPalindrome(s))