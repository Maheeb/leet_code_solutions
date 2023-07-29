/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even = [];
    for (let i of nums)
    {
        if (i%2===0)
        {
            even.push(i);
        }
    }
   let odd = nums.filter((item)=> !even.includes(item))
    return [...even,...odd]
    // console.log(odd)
};
let nums = [3,1,2,4]
console.log(sortArrayByParity(nums))