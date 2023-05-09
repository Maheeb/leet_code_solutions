/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums,...nums]
};

// let nums = [1,3,2,1]
// console.log(getConcatenation(nums))