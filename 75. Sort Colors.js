/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const length = nums.length;

    for (let i = 1; i < length; i++) {
        const key = nums[i];
        let j = i - 1;

        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j--;
        }

        nums[j + 1] = key;
    }

    return nums;

};
let nums = [2,0,2,1,1,0];
console.log(sortColors(nums))