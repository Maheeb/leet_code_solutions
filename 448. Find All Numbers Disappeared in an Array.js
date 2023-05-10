/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    let array_1 = [];
    let result_array = [];
    for (let i = 1; i <= nums.length; i++)
    {
        array_1.push(i)
    }

    for (let i of array_1)
    {
        if (!nums.includes(i))
        {
            result_array.push(i)
        }
    }
    return result_array

};

// let nums = [4,3,2,7,8,2,3,1]
let nums = [1,1]
console.log(findDisappearedNumbers(nums))