/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let add = true;

        if (asteroids[i] < 0 && stack[stack.length-1] > 0) {
            while (stack.length !== 0 && stack[stack.length-1] > 0) {
                if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length-1])) {
                    stack.pop();
                } else if (Math.abs(asteroids[i]) === Math.abs(stack[stack.length-1])) {
                    stack.pop();
                    add = false;
                } else {
                    add = false;
                }
                if (!add) break;
            }
        }
        if (add) stack.push(asteroids[i])
    }
    return stack;

};
// let asteroids = [5,10,-5]
let asteroids = [10,2,-5]
console.log(asteroidCollision(asteroids))