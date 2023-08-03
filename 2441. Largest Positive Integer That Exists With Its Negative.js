/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let minus_array = [];
    let plus_array = [];

    for (let i of nums)
    {
        if (i<0)
        {
            minus_array.push(Math.abs(i))
        }
        else
        {
            plus_array.push(i)
        }
    }
    // let combine = [...minus_array,...plus_array]
    let combine = minus_array.filter((item)=>plus_array.includes(item))
    if (combine.length<=0)
    {
        return -1
    }
    else
    {
        return Math.max(...combine)
    }
    // console.log()
    // console.log(plus_array)
};
let nums = [-1,2,-3,3]
console.log(findMaxK(nums))