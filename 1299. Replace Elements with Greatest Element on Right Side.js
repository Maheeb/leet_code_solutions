/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let newArr = [];
    newArr[arr.length-1] = -1;
    for (let i = arr.length-2; i >= 0; i--) {
        newArr[i] = Math.max(newArr[i+1],arr[i+1]);
    }
    return newArr;
};
let arr = [17,18,5,4,6,1]
console.log(replaceElements(arr))