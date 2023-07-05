/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    let obj ={}
    for (let i of nums)
    {
        if (obj[i])
        {
            obj[i] += 1
        }
        else
        {
            obj[i] = 1
        }
    }
    for (let i in obj)
    {
        if (obj[i]===1)
        {
            return i
        }
    }
};
// let nums = [1,1,2,3,3,4,4,8,8]
let nums = [3,3,7,7,10,11,11]
console.log(singleNonDuplicate(nums))