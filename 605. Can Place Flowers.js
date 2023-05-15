/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i =0;

    while (i < flowerbed.length && n!==0)
    {
        if (flowerbed[i]===0 && flowerbed[i+1] !==1 && flowerbed[i-1] !==1)
        {
            n--;
            i++;
        }
        i++;
    }
    return n===0;

};
let flowerbed = [1,0,0,0,1], n = 1;
console.log(canPlaceFlowers(flowerbed, n));