/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let split_string = s.split(" ");
    // console.log(split_string)
    // console.log(split_string.length)
    let last_string =[];
    for (let i = split_string.length; i >= 0; i--)
    {

        if (split_string[i] !=="")
        {
            last_string.push( split_string[i])

        }

    }
   last_string = last_string.filter((item,index)=>item !== undefined)
    return last_string[0].length

};

// let s = "   fly me   to   the moon  "
// let s = "Hello World"
// console.log(lengthOfLastWord(s))