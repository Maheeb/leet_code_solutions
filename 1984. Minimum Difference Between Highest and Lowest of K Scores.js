/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {

    nums.sort((a, b) => a - b);
    const n = nums.length;
    let ans = nums[n - 1] - nums[0];
    for (let i = 0; i + k - 1 < n; i++) {
        // console.log(nums[i + k - 1] +'-----' + nums[i])
        ans = Math.min(nums[i + k - 1] - nums[i], ans);
    }
    return ans;

};
// let nums = [90], k = 1
// let nums = [9,4,1,7], k = 2
// let nums = [87063,61094,44530,21297,95857,93551,9918]
//     , k = 6
// console.log(minimumDifference(nums,k))