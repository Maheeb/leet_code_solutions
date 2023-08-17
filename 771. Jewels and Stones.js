/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let stones_split = stones.split('');
    let jewels_split = jewels.split('');

    let count =0
    for (let i of stones_split)
    {

        if (jewels_split.includes(i))
        {
            count++;
        }

    }
  return count

};
// let jewels = "aA", stones = "aAAbbbb"
let jewels = "z", stones = "ZZ"
console.log(numJewelsInStones(jewels, stones));