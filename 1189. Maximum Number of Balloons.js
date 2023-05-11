/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

   let counts = {b:0,a:0,l:0,o:0,n:0}
    for (let i =0; i<text.length ; i++)
    {
        const c = text[i]
        if (counts[c] !==undefined)
        {
            counts[c]++
        }
    }
    counts['l'] = Math.floor(counts['l']/2);
    counts['o'] = Math.floor(counts['o']/2);

    let minCount = Number.MAX_VALUE;

    console.log(minCount)
    for (let c in counts)
    {
        console.log(counts[c])
        if (counts[c]<minCount)
        {
            minCount = counts[c];
            // console.log(minCount)
        }

    }
    return minCount
    // return Math.floor(filter.length/7);
};
let text = "loonbalxballpoon"
// let text = "nlaebolko"
// let text = "leetcode"
// let text = "balllllllllllloooooooooon"
console.log(maxNumberOfBalloons(text))