/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const hashMap = {"(":")","{":"}","[":"]"}
    let stack = [];

    for (let char of s)
    {
        let ch = hashMap[char]
        if (hashMap[char])
        {
            stack.push(ch)
        }
       else if(stack.length>0 && stack[stack.length-1]===char)
        {
            stack.pop()
        }
       else
        {
            return  false
        }

    }
    return stack.length === 0;
};