var sumOddLengthSubarrays = function(arr) {
    const A = new Uint8Array(arr);

    // Calling subarray() functions
    b = A.subarray(2)
    c = A.subarray(0,3)
    d = A.subarray(1,4)
    e = A.subarray(2,5)

    return c+"\n"+d+"\n"+e
};
x = 1
y = 1
arr = [1,4,2,5,3]


console.log(sumOddLengthSubarrays(arr));