/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let prev = 0;
   let max = -Infinity;
   for (let i=0; i<nums.length;i++)
   {
       prev = Math.max(prev+nums[i],nums[i]);
       max = Math.max(max,prev);
   }
   return max;

};

// let nums = [-2,1,-3,4,-1,2,1,-5,4]
// console.log(maxSubArray(nums))