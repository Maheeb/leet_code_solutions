/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {

    let stack = [];
    let operator = ["C","D","+","+"];
    for (let i = 0; i<operations.length; i++)
    {
        if (operations[i]==="C")
        {
            stack.pop()
        }
         if (operations[i]==="D")
        {
            let d = stack[stack.length-1] *2
            stack.push(d)
        }
         if (operations[i]==="+")
        {
            let plus = parseInt(stack[stack.length-1]) + parseInt(stack[stack.length-2])
            stack.push(plus)
        }
        else
        {
            if (!operator.includes(operations[i]))
            {
                stack.push(parseInt(operations[i]))
            }
        }

    }
    if (stack.length>0) {
        return stack.reduce((a, b) => a + b)
    }
    else
    {
        return  0;
    }

};

// let ops = ["5","-2","4","C","D","9","+","+"]
// let ops = ["5","2","C","D","+"]
// let ops = ["1","C"]
// console.log(calPoints(ops))