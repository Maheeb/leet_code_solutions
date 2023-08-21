/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let s_split = s.split("")
    let t_split = t.split("")

    let s_object ={};
    let t_object ={};
    let result =[];
    for (let i of s_split)
    {
        if (s_object[i])
        {
            s_object[i] +=1
        }
        else
        {
            s_object[i] =1
        }
    }
    for (let i of t_split)
    {
        if (t_object[i])
        {
            t_object[i] +=1
        }
        else
        {
            t_object[i] =1
        }
    }
    for (let i in t_object)
    {
        if (s_object[i] !== t_object[i])
        {
            result.push(i)
        }
    }

    return result[0]

    // let filter = t_split.filter((item)=>!s_split.includes(item));
    // console.log(filter)
    // return filter[0]
};
// let s = "abcd", t = "abcde"
let s = "", t = "y"
// let s = "a", t = "aa"
console.log(findTheDifference(s, t));