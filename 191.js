
var hammingWeight = function(n) {
    var format = ""+n+"";
    var binary= parseInt(format).toString(2);
  return  binary.split("1").length - 1;
};
console.log(hammingWeight(00000000000000000000000000001011));