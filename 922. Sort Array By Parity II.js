/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let res =[];

    for (let i = 0; i <=nums.length ; i++)
    {
        if (nums[i]%2===0 && (res.length%2)===0)
        {
            res.push(nums[i])
        }
        else
        {
            res.push(nums[i])
        }
    }
    console.log(res)

};
let nums = [4,2,5,7]
console.log(sortArrayByParityII(nums))