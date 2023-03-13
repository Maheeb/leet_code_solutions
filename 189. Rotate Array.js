var rotate = function(nums, k) {
    k = k > nums.length ? k - nums.length : k;
    for(var i=0;i<k;i++){
        nums.unshift(nums.pop());
    }
};


var rotate = function(nums, k) {
    k %= nums.length;
    if (k !== 0){
        var tmp = nums.slice(-k);
        nums.splice(-k, k);
        Array.prototype.unshift.apply(nums, tmp);
    }
};