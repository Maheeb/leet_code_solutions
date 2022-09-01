
var largestPerimeter = function(nums) {

    var sorted_array = nums.sort((a, b) => a - b);

    var sum=0;
    var max=0;
    for (var i=0; i<sorted_array.length;i++)
    {
        if ((sorted_array[i]+sorted_array[i+1])>sorted_array[i+2])
        {
            sum = sorted_array[i]+sorted_array[i+1]+sorted_array[i+2]

        }
        if (sum>max)
        {
            max= sum;
        }
    }

    return max;
};

nums = [1,2,2,4,18,8]

console.log(largestPerimeter(nums));