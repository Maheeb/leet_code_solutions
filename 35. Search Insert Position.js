/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let index = nums.indexOf(target);
    // console.log(index)

    if (index === -1) {

        let modified_array= [...nums,target].sort((a,b) =>a-b).indexOf(target)
        return modified_array
    }
    else {
        return index
    }
};

let nums = [3,5,7,9,10], target = 8
// console.log(searchInsert(nums,target))