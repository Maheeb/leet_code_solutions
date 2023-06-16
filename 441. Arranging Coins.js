/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {

    if(n===1) return 1;
    let sum = 0;
    let count =0;
    for (let i = 1; i <= n; i++)
    {
        sum = sum + i;
        count++;
        if (sum>n)
        {
            break;
        }
    }

    return count-1;
};

// let n = 8
let n = 1;
console.log(arrangeCoins(n))