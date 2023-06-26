/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = 'aeiou'
    let result = 0
    let count = 0
    for (var i = 0; i < s.length; i++) {
        if (i >= k) {

            if (vowels.includes(s[i - k])) {
                count--
            }
        }

        if (vowels.includes(s[i])) {

            count++
            result = Math.max(result, count)

            if (result === k) {
                return k
            }
        }
    }
    return result

};
// let s = "abciiidef", k = 3
// let  s = "aeiou", k = 2
// let  s = "leetcode", k = 3

// console.log(maxVowels(s,k))