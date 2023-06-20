/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    if (nums.every(n => n === 0)) {
        return '0';
    }

    // normal case
    nums.sort((n1, n2) => {

        const s1 = new String(n1);
        const s2 = new String(n2);
        const first = s1 + s2;
        const second = s2 + s1;

        if (first > second) {

            return -1;
        } else if (first < second) {

            return 1;
        } else return 0;
    });

    return nums.join('');
};
// let nums = [10,2]
let nums = [3,30,34,5,9]
console.log(largestNumber(nums))