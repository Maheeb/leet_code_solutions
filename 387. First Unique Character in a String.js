/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let charCount ={};
    for(let i=0;i<s.length;i++)
    {
        let char = s[i];

        if (!charCount[char])
        {
            charCount[char]=1;
        }
        else
        {
            charCount[char]++;
        }
    }
    // let values = Object.values(obj);
    if (!Object.values(charCount).includes(1)) {
        return -1;
    }
    else {
        // console.log(charCount)
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (charCount[char] === 1) {
                return i
                break;
            }

        }
    }
};

let s = "aabb"
console.log(firstUniqChar(s))