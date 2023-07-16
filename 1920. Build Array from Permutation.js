/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let result = [];
    for (let i = 0; i <nums.length ; i++)
    {
        result.push(nums[nums[i]])
    }
    return result
};
// let nums = [0,2,1,5,3,4]
let nums = [5,0,1,2,3,4]
console.log(buildArray(nums))