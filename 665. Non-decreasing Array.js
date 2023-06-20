/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {


    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {

            if (nums[i] > nums[i + 2]) {
                nums[i] = nums[i + 1]
            } else {
                nums[i + 1] = nums[i]
            }
            break
        }
    }

    // console.log(nums)

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false
        }
    }
    return true

};

// let nums = [4,2,3]
// let nums = [4,2,1]
// let nums = [3,4,2,3]
// let nums = [2,3,3,2,2]
// let nums = [5,7,1,8]
// console.log(checkPossibility(nums))