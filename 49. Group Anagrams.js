/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = {};
    for (let word of strs) {
        let cleansed = word.split("").sort().join("");
        // console.log(word)
        if (result[cleansed]) {
            result[cleansed].push(word);
        } else {
            result[cleansed] = [word];
        }
    }
    // console.log(result)
    return Object.values(result);

};


let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));