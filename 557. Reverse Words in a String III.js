/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitString = s.split(' ');
    let reverseWords = splitString.map((item, i) =>{
        return item.split('').reverse().join('');
    })

    return reverseWords.join(' ');
};

let s = "Let's take LeetCode contest";
console.log(reverseWords(s));