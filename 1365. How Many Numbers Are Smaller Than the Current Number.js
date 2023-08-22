/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    for (let i =0; i<nums.length; i++)
    {
        let count =0;
        for (let j = 0; j <nums.length ; j++)
        {
            if (nums[j] < nums[i] && j !== i)
            {
                count++;
                if (j=== nums.length-1) {
                    result.push(count)
                }
            }
            else
            {
                if (j=== nums.length-1) {
                    result.push(count)
                }
            }
        }
    }
   return result

};
// let nums = [8,1,2,2,3]
// let nums = [6,5,4,8]
let nums = [7,7,7,7]
console.log(smallerNumbersThanCurrent(nums))