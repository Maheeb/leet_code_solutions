/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {

    let temp =[]
    for (let i of arr)
    {
        if (i === 0)
        {
            temp.push(0)
            temp.push(0)
        }
        else
        {
            temp.push(i)
        }
    }
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = temp[i];
    }
};
let arr = [1,0,2,3,0,4,5,0]
console.log(duplicateZeros(arr))