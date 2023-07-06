/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let result =[]
    for (let i=0; i<nums.length; i++)
    {
        if (nums[i]===target)
        {
            result.push(i)
        }
    }
    if (result.length===0)
    {
        return result = [-1,-1]
    }
    if (result.length===1)
    {
        return result = [result[0],result[0]]
    }
    if (result.length>2)
    {
        return result = [result[0],result[result.length-1]]
    }

    return result
};
// let nums = [5,7,7,8,8,10], target = 8
// let nums = [5,7,7,8,8,10], target = 6
// let nums = [], target = 0
// let nums = [1], target = 1
let nums = [3,3,3], target = 3
console.log(searchRange(nums,target))