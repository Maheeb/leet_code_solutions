/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (stones.length == 1){
        return stones
    } else if (stones.length == 0){
        return 0
    }
    let heavy1 = Math.max(...stones)
    stones.splice(stones.indexOf(heavy1), 1)
    let heavy2 = Math.max(...stones)
    stones.splice(stones.indexOf(heavy2), 1)
    if (heavy1 > heavy2) {
        let newStone = heavy1 - heavy2
        stones.push(newStone)
    }

    return lastStoneWeight(stones)
};

lastStoneWeight(stones)
let stones = [2,7,4,1,8,1]
console.log(lastStoneWeight(stones))