/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let result = [];
let array1 = nums1.filter((item)=>  !nums2.includes(item))
let array2 = nums2.filter((item)=>  !nums1.includes(item))
    let set1= new Set(array1)
    let set2= new Set(array2)

   result[0]=[...set1]
   result[1]=[...set2]
    return result

};
// let nums1 = [1,2,3], nums2 = [2,4,6]
// let nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// console.log(findDifference(nums1, nums2));