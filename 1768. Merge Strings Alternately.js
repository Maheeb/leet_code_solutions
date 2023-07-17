/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let result = [];
    let i =0;
    let j=0;
    let totalLength = word1.length + word2.length -1;
    while (totalLength>0)
    {
        if (i !== word1.length)
        {
            result.push(word1[i])
            i++;
        }
        if (j !== word2.length)
        {
            result.push(word2[j])
            j++;
        }
        totalLength--;
    }
    return result.join("")


};
let word1 = "abc", word2 = "pqr"
console.log(mergeAlternately(word1,word2))