/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result =[]
    let n= temperatures.length
    let ans = new Array(n).fill(0)
    let stack = []
    for (let i = 0; i <n ; i++) {
        while (stack.length && temperatures[i]> temperatures[stack[stack.length-1]])
        {
            let idx = stack.pop()
            // console.log(idx)
            ans[idx] = i - idx
        }
        stack.push(i)
    }
  return ans

};
// let temperatures = [73,74,75,71,69,72,76,73]
let temperatures = [30,40,50,60]
console.log(dailyTemperatures(temperatures))