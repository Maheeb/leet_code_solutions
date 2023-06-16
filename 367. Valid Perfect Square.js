/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    for (let i = 1; i <= num; i++)
    {
        let multiply = i * i;
        // console.log(multiply)
        if (multiply === num)
        {
            return true;
        }

    }
    return false
};
// let num = 16
let num = 14
console.log(isPerfectSquare(num))