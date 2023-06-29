/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let x1 = x.toString().split("")
    let x2 = x.toString().split("").reverse()

    return x1.join("")===x2.join("")
};
// let x = -121
// let x = 10
let x = 121
console.log(isPalindrome(x))