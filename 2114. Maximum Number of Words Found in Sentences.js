/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    let word_array = []
    for (let i of sentences)
    {
        let length = i.split(" ").length
        word_array.push(length)
    }
    return Math.max(...word_array)
};
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences))