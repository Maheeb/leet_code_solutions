/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result_array = [];
    for (let i of nums1)
    {
       let nums2_index = nums2.indexOf(i);
       let nums2_slice = nums2.slice(nums2_index)
        // let max=-Infinity;
        // console.log(nums2_slice)
        let find_max;

       if (nums2_slice.length<=0 || nums2_slice.length===1)
       {
           find_max =-1
       }
       else
       {
           let max;
           for(let j=1; j<=nums2_slice.length; j++)
           {
               // console.log(nums2_slice[j] +"--" + i)
               if (nums2_slice[j] >i)
               {
                   // console.log(nums2_slice[j])
                   max=nums2_slice[j];
                   break
               }
               else
               {
                   max = -1;
               }
           }

           find_max = max;
           // max = -Infinity;
       }

        result_array.push(Math.max(find_max))

    }
    // console.log (result_array)
    return result_array
};

// let nums1 = [4,1,2], nums2 = [1,3,4,2];
// let nums1 = [2,4], nums2 = [1,2,3,4]
let nums1 = [1,3,5,2,4], nums2 = [6,5,4,3,2,1,7]
console.log(nextGreaterElement(nums1,nums2))