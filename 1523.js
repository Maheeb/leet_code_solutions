var countOdds = function(low, high) {

    var count =0;
    for (var i=low;i<=high;i++)
    {
        if (i%2 !==0)
        {
            count++
        }
    }

    return count;

};

console.log(countOdds(8,10))