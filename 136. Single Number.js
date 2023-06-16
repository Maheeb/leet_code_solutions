/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     return  findUniqueNumbers(nums);
//
// };
// function findUniqueNumbers(nums) {
//     // Create an object to store the frequency of each element in the array
//     const frequency = {};
//     for (let num of nums) {
//         frequency[num] = (frequency[num] || 0) + 1;
//     }
//
//     // Create an array to store the unique numbers
//     const uniqueNumbers = [];
//     for (let num in frequency) {
//         if (frequency[num] === 1) {
//             uniqueNumbers.push(parseInt(num));
//         }
//     }
//
//     return uniqueNumbers;
// }


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let obj = {};
    for (let i=0; i< nums.length; i++)
    {
        const element = nums[i];
        obj[element]= (obj[element] || 0 ) +1
    }
    for (let i in obj)
    {
        if (obj[i]===1)
        {
            return i
        }
    }

};
let nums = [2,2,1]
// let nums = [4,1,2,1,2]

console.log(singleNumber(nums))



