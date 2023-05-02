/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     return  s.reverse();
// };

var reverseString = function(s) {
    let result = [];
    let length = s.length
    for (let i = s.length-1; i >=0 ; i--) {

      // s.shift(i)
        s.push(s[i])
        // s.splice(i, 1, s[i]);
    }

    for (let i = 0; i < length; i++) {
        s.shift(i)
    }
    // console.log(s)
};


let s = ["h","e","l","l","o"]
console.log(reverseString(s))
