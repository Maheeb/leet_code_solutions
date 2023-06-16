/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var format = ""+n+"";
    var binary= parseInt(format).toString(2);
    return  binary.split("1").length - 1;
};

// let n = 00000000000000000000000000001011
// let n = 00000000000000000000000010000000
// let n = 11111111111111111111111111111101
// console.log(hammingWeight(n))