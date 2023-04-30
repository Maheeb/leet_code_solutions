/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    let set = new Set();

    for (let i of nums1)
    {
       if (nums2.includes(i))
       {
           set.add(i)
       }
    }

    for (let i of set)
    {
        result.push(i)
    }
    return result

};

// let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// console.log(intersection(nums1,nums2))