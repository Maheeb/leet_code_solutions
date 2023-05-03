/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     let splitString = s.split(' ');
//     let reverseWords = splitString.map((item, i) =>{
//         return item.split('').reverse().join('');
//     })
//
//     return reverseWords.join(' ');
// };

var reverseWords = function(s) {

    let splitString = s.split("").reverse().join('');
    let result = [];
    let splitStringArray = splitString.split(' ')
    return splitStringArray.reverse().join(' ')

};


let s = "God Ding";
// let s = "Let's take LeetCode contest"
console.log(reverseWords(s));