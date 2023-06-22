/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let result = [];
    let left = 0;
    let sum = 0;
    let right = numbers.length -1;
    while (left < right)
    {
        sum = numbers[left] + numbers[right];
        if (sum === target)
        {
            return [left + 1, right + 1];
        }
        else if(sum>target)
        {
            right--
        }
        else
        {
            left++
        }

    }

};
// let numbers = [2,7,11,15], target = 9
// let  numbers = [2,3,4], target = 6
let  numbers = [-1,0], target = -1
console.log(twoSum(numbers, target))