/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let first_stack =[]
    let second_stack =[]
    for (let i of s)
    {
        if (i==="#")
        {
            first_stack.pop()
        }
        else
        {
            first_stack.push(i)
        }
    }
    for (let i of t)
    {
        if (i==="#")
        {
            second_stack.pop()
        }
        else
        {
            second_stack.push(i)
        }
    }
    return first_stack.join("")===second_stack.join("")
};
// let s = "ab#c", t = "ad#c"
// let s = "ab##", t = "c#d#"
let s = "a#c", t = "b"
console.log(backspaceCompare(s,t))