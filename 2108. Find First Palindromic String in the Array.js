/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let result =[]
    for (let i of words)
    {
        let rev = i.split("").reverse().join("");
        if (i === rev)
        {
            return i
        }
    }
    return ""
};
// let words = ["abc","car","ada","racecar","cool"]
// let words = ["notapalindrome","racecar"]
let words = ["def","ghi"]
console.log(firstPalindrome(words))