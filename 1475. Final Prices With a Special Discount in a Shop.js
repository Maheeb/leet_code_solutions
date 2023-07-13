/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = [];
    for (let i = 0; i <prices.length ; i++)
    {
        for (let j = i+1; j < prices.length;j++)
        {

            if (prices[j]<=prices[i])
            {
                prices[i] -= prices[j];
                break;
            }
        }
    }

    return prices;

};
let prices = [8,4,6,2,3]
// let prices = [1,2,3,4,5]
// let prices = [10,1,1,6]
console.log(finalPrices(prices))