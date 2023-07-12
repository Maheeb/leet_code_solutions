/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subsets = [];

    function backtrack(subset, start) {
        subsets.push(subset.slice());
        for (let i = start; i < nums.length; i++) {
            subset.push(nums[i]);
            backtrack(subset, i + 1);
            subset.pop();

        }
    }

    backtrack([], 0);

    return subsets;
};
let nums = [1,2,3]
console.log(subsets(nums))