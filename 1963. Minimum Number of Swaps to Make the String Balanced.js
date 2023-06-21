/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let chars = s.split('');

    let  size = 0 ;
    for ( c of chars) {
        if (c == '[' ) {
            size++ ;
        } else {
            if (size > 0 ) {
                size-- ;
            }
        }
    }
    return Math.floor((size + 1) / 2);
};

// let s = "[]"
let s = "]]][[["
console.log(minSwaps(s))