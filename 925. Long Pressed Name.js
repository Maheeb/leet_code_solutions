/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name == typed) return true;
    if (typed.length < name.length) return false;

    let count = 0, start = 0;

    for (let idx = 0; idx < name.length; idx++) {
        let more = -1, min = 0, l1 = name[idx];


        for (let i = idx + 1; i < name.length; i++) {
            if (l1 != name[i]) break;
            min++;
        }


        idx += min;

        for (let i = start; i < typed.length; i++) {
            if (l1 == typed[i]) more++;

            else {
                start = i;
                break;
            }
        }

        if (more < min) return false;
        else count++;
    }

    return count && typed[start] == name[name.length - 1];

};
// let name = "saeed", typed = "ssaaedd"
let name = "alex", typed = "aaleex"
console.log(isLongPressedName(name, typed));