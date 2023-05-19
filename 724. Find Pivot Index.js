/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = 0
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }

    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - nums[i] - leftSum
        // console.log(totalSum+"-"+nums[i]+"-"+leftSum+"---"+leftSum)
        if (rightSum === leftSum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
};
let nums = [1,7,3,6,5,6]
console.log(pivotIndex(nums))