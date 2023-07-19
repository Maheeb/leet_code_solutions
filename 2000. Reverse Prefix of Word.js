/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let found =[]
    let split_word = word.split("")
    if (!split_word.includes(ch))
    {
        return word
    }
    for (let i of word.split(""))
    {
        if (i===ch)
        {
            found.push(i)
            break
        }
        else
        {
            found.push(i)
        }

    }

    let reverse = found.reverse((a,b)=>a-b)
    let slice_word = split_word.slice(reverse.length)
    return [...reverse,...slice_word].join("")
    // console.log()
};
// let word = "abcdefd", ch = "d";
// let word = "xyxzxe", ch = "z"
let word = "abcd", ch = "z"
console.log(reversePrefix(word,ch))