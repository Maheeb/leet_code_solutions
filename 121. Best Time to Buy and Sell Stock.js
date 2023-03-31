/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let max=0;
    let stockToBuy = prices[0]
    for (let i=0; i<prices.length; i++)
    {
       if (stockToBuy>prices[i])
       {
           stockToBuy = prices[i];
       }

       let current = prices[i]-stockToBuy

        if (current>max)
        {
            max = current;
        }

    }
    return max
};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))