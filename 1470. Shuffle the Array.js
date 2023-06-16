/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
 let second_array = nums.slice(n,n*2)
    let result =[];
    const maxLength = Math.max(nums.length, second_array.length);
    const concatenatedArray = [];
    // console.log(second_array)

    for (let i = 0; i < maxLength; i++) {
        if (i < second_array.length) {
            concatenatedArray.push(nums[i]);
            concatenatedArray.push(second_array[i]);
        }
    }

    return concatenatedArray
};
// let nums = [2,5,1,3,4,7], n = 3
let nums = [1,2,3,4,4,3,2,1], n = 4
// let nums = [1,1,2,2], n = 2
console.log(shuffle(nums,n))