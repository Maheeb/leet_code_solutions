/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//
//     let squared = nums.map(value => Math.pow(value,2)).sort((a,b)=>a-b)
//     return squared
// };

var sortedSquares = function(nums) {

    let powered_array = [];
    for (let i=0; i < nums.length; i++)
    {
        powered_array[i] = nums[i] * nums[i]
    }
    return powered_array.sort((a,b)=> a-b)

};

// let nums = [-7,-3,2,3,11]
// sortedSquares(nums)
// console.log(sortedSquares(nums))