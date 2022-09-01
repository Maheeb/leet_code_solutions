var canMakeArithmeticProgression = function(arr) {

    var sorted = arr.sort((a,b)=>a-b)

    var count =0;
    var step_one = sorted[1]-sorted[0]
    if (sorted.length>2) {
        for (var i = 0; i < sorted.length; i++) {

            // console.log(step_one)
            if (step_one == (sorted[i + 2] - sorted[i + 1])) {
                count++;
            }
            // else
            // {
            //     count=0;
            // }
        }

        if (count > 0) {
            return true;
        } else {
            return false;
        }
    }
    else
    {
        return true
    }
    // return count;

};
arr = [1,2,4]
console.log(canMakeArithmeticProgression(arr));