/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack =[]
    for (let i of s)
    {
        if (stack[stack.length - 1]==="A" && i==="B" || stack[stack.length - 1]==="C" && i==="D")
        {
            stack.pop()
        }
        else
        {
            stack.push(i)
        }
    }
    return stack.length
};
// let s = "ABFCACDB"
let s = "ACBBD"
console.log(minLength(s))