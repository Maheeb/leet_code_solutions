/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   return  nums.sort((a, b) => a === 0 ? 1 : b === 0 ? -1 : 0);
// };

var moveZeroes = function(nums) {

    let nonZeroIndex = 0;
    for(let i=0; i<nums.length; i++)
    {
        if(nums[i] !==0)
        {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
  for(let i=nonZeroIndex; i<nums.length; i++)
  {
      nums[i] =0;
  }


};

// let nums = [0,1]
// let nums = [0,1,0,3,12]
// let nums = [0,1,0,3,12]
//
// console.log(moveZeroes(nums))