/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let result =[];
    for (let i of image)
    {
        let temp = i.reverse((a,b)=>a-b).map((item)=> item===0? 1:0)
        result.push(temp)

    }
    return result
};
let image = [[1,1,0],[1,0,1],[0,0,0]]
console.log(flipAndInvertImage(image))