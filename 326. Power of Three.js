/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    let result =1
    if (n===1) return true;
    for (let i = 0; i <= 100 ; i++)
    {
        result = result *3
        if (result === n)
        {
            return true;

        }
    }
    return false;

};
let n = -1
// let n = 0
// let n = 27
console.log(isPowerOfThree(n))