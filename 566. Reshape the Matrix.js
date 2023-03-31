/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {

    let rows=mat.length;
    let column = mat[0].length;

    if (rows*column != r*c)
    {
        return mat;
    }
    let longArray=[];
    let answerArray = [];

    for (let row of mat)
    {
        for (let column of row)
        {
            longArray.push(column)
        }
    }

    for (let i=0; i<longArray.length; i+=c)
    {
        answerArray.push(longArray.slice(i,i+c))
    }

    return answerArray;
};

let mat = [[1,2],[3,4]], r = 1, c = 4;
console.log(matrixReshape(mat,r,c))