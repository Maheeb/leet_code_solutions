/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {

    let nums = num.join("")
    // console.log(nums)
    let result = BigInt(nums) + BigInt(k)
    return result.toString().split("")

};
let num = [1,2,0,0], k = 34
console.log(addToArrayForm(num,k))