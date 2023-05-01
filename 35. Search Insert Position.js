/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let start = 0;
    let end = nums.length -1;
    let is_found =0;

    let checkTarget = searchItem(nums,target);

    if (checkTarget === -1)
    {

            let mod_array = [...nums,target].sort((a,b) =>a-b)
            checkTarget = searchItem(mod_array,target)
    }
    return checkTarget


};

var searchItem = (arr, item) =>{
    let start = 0;
    let end = arr.length -1;
    let is_found =0;

    while (start <= end)
    {
        let middle = Math.floor((start+end)/2);
        if (arr[middle] === item)
        {
            return middle
        }
        else if (arr[middle] < item)
        {
            start = middle + 1;
        }
        else
        {
            end = middle -1
        }

    }
    return -1;
}

// let nums = [1,3,5,6], target = 5

// let nums = [3,5,7,9,10], target = 8
// // // let nums = [1,2,3,5,6], target = 2
// console.log(searchInsert(nums,target))