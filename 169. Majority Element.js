/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freqCounter = {};
    let maxFreq = 0;
    let mostFreqElement;

    for (let i = 0; i < nums.length; i++) {
        if (freqCounter[nums[i]]) {
            freqCounter[nums[i]]++;
        } else {
            freqCounter[nums[i]] = 1;
        }
        // console.log(freqCounter[nums[i]])

        if (freqCounter[nums[i]] > maxFreq) {
            maxFreq = freqCounter[nums[i]];
            mostFreqElement = nums[i];
        }
    }

    return mostFreqElement;
};

// console.log(majorityElement(nums = [3,2,3]))