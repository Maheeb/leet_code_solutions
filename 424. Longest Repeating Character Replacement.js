/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const chars = {}
    let left = 0, maxf = 0, output = 0
    for(let right = 0; right < s.length; right++) {
        const char = s[right]
        chars[char] = 1 + (chars[char] || 0)

        maxf = Math.max(maxf, chars[char])

        while((right-left+1) - maxf > k) {
            console.log(chars[s[left]])
            chars[s[left]] -= 1
            left++
        }

        output = Math.max(output, right - left +1)
    }
    return output
};

let s = "AABABBA", k = 1
console.log(characterReplacement(s,k))