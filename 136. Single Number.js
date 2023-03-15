/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return  findUniqueNumbers(nums);

};
function findUniqueNumbers(nums) {
    // Create an object to store the frequency of each element in the array
    const frequency = {};
    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Create an array to store the unique numbers
    const uniqueNumbers = [];
    for (let num in frequency) {
        if (frequency[num] === 1) {
            uniqueNumbers.push(parseInt(num));
        }
    }

    return uniqueNumbers;
}
