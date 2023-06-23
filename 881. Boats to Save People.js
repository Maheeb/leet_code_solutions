/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people = people.sort((a,b)=>a-b)
    let i = 0, j = people.length - 1,ans = 0;

    while (i <= j) {
        console.log(people[i]+"---"+people[j])
        ans++;
        if (people[i] + people[j] <= limit)
            i++;
        j--;
    }

    return ans;


};

let people = [3,2,2,1], limit = 3
// let people = [1,2], limit = 3
// let  people = [5,1,4,2], limit = 6
console.log(numRescueBoats(people,limit))