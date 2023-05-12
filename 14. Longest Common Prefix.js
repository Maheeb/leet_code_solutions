/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    // console.log(prefix)
    for (let i = 1; i < strs.length; i++)
    {
        // console.log(strs[i])
        while (strs[i].indexOf(prefix) !== 0)
        {
            prefix = prefix.substr(0, prefix.length -1)


        }
    }
    // return prefix

};
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))