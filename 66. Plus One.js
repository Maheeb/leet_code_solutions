/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let num = digits.map((item)=> BigInt(item)).join("");
    let final_number = BigInt(num) + BigInt(1)
    let result = final_number.toString().split("")
    // console.log(final_number)
    return result

};
// let digits = [1,2,3]
// let digits = [4,3,2,1]
// let digits = [9]
// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

console.log(plusOne(digits))