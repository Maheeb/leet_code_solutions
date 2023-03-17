/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // console.log(nums)
    let set = new Set(nums);
//    set.add(nums)

    for (let i=0; i <= nums.length;i++)
    {
        if(!set.has(i))
        {
            return i;
        }
    }
    return -1

};
// let nums = [1]
// console.log(missingNumber(nums))