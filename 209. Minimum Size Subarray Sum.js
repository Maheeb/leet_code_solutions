/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let windowSum = 0
    let output = Infinity;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];
        // shrink the window until the windowSum is smaller than s
        while (windowSum >= target) {
            output = Math.min(output, windowEnd - windowStart + 1);

            windowSum -= nums[windowStart];

            windowStart++;
        }
    }
    return output == Infinity ? 0 : output;
};
// let target = 7, nums = [2,3,1,2,4,3]
// let target = 11, nums = [1,1,1,1,1,1,1,1]
let target = 11, nums = [1,2,3,4,5]
console.log(minSubArrayLen(target,nums))