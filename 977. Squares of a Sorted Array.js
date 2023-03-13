/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    let squared = nums.map(value => Math.pow(value,2)).sort((a,b)=>a-b)
    return squared
};
let nums = [-4,-1,0,3,10]
sortedSquares(nums)
// console.log(sortedSquares(nums))