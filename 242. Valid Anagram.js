/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    var str1 = s.split("").sort().join("");
    var str2 = t.split("").sort().join("");
    // console.log(str2)
    return str1 == str2;
};

// let s = "a", t = "ab"
let s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))