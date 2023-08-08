/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    // let nums1_sort = nums1.sort((a,b)=>a-b)
    // let nums2_sort = nums2.sort((a,b)=>a-b)
    // let merge= nums1_sort.filter((item) =>nums2_sort.includes(item))
    // if(merge.length>0)
    // {
    //     return merge[0]
    // }
    // else
    // {
    //     return -1
    // }
    const set1 = new Set(nums1);
    const commonElements = nums2.filter(element => set1.has(element));
    if(commonElements.length>0)
    {
        return commonElements[0]
    }
    else
    {
        return -1
    }
    // return commonElements.sort((a,b)=>a-b)[0];

    // console.log(commonElements)

};
// let nums1 = [1,2,3], nums2 = [2,4]
let nums1 = [1,2,3,6], nums2 = [2,3,4,5]
console.log(getCommon(nums1, nums2));