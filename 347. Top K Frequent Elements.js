/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let obj ={}
    let value_array = [];
    for (let i of nums)
    {
        if (obj[i])
        {
            obj[i] = obj[i] +1
        }
        else
        {
            obj[i] = 1
        }
    }
     // let temp = value_array.push(Object.keys(obj))
    // console.log(obj)
    var highestKeys = [];
    var highestValues = [];
    for (var key in obj) {
        var value = obj[key];

        if (highestValues.length < k) {
            highestKeys.push(key);
            highestValues.push(value);
        } else {
            var minIndex = highestValues.indexOf(Math.min(...highestValues));
            if (value > highestValues[minIndex]) {
                highestKeys[minIndex] = key;
                highestValues[minIndex] = value;
            }
        }
    }

    return  highestKeys

};
let nums = [1,1,1,2,2,3], k = 2
// let nums = [1], k = 1
console.log(topKFrequent(nums,k))