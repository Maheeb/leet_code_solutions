/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stacks = []
    for (let i of s.split(""))
    {
        // console.log(i.toUpperCase())
        if ( stacks[stacks.length - 1]===i.toLowerCase() && i===i.toUpperCase() ||
            stacks[stacks.length - 1]===i.toUpperCase() && i===i.toLowerCase()
        )

        {
            stacks.pop()

        }
        else
        {
            stacks.push(i)
        }
    }
    return stacks.join("")
};
// let s = "leEeetcode"
// let s = "abBAcC"
// let s = "s"
let s = "Pp"
console.log(makeGood(s))