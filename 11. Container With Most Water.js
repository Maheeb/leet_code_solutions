/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maximumArea = Number.MIN_SAFE_INTEGER;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {

        let shorterLine = Math.min(height[left], height[right]);
        maximumArea = Math.max(maximumArea, shorterLine * (right - left));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maximumArea;

}
 let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));