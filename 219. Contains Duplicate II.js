/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    for (let i = 0; i <nums.length ; i++)
    {
        for (let j = i+1; j <nums.length ; j++) {
            if (nums[i]===nums[j] && Math.abs(i - j) <= k)
            {
                return true;
            }
        }
    }
    return false;
};
// let nums = [1,2,3,1], k = 3
// let nums = [1,2,3,1,2,3], k = 2
// let nums = [1,0,1,1], k = 1
// console.log(containsNearbyDuplicate(nums,k))