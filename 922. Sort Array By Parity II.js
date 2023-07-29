/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let res =[];
    let odd =[]
    let even =[]
    for (let i = 0; i <nums.length ; i++)
    {
        if (nums[i]%2===0)
        {
            even.push(nums[i])
        }
        else
        {
            odd.push(nums[i])
        }
    }

    for (let i in odd)
    {
        res.push(even[i])
        res.push(odd[i])
    }
   return res

};
let nums = [4,2,5,7]
console.log(sortArrayByParityII(nums))