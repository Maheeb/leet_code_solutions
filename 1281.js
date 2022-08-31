
var subtractProductAndSum = function(n) {

    var str = n.toString();
    var arr= str.split('');

    var sum = arr.reduce( (a,b)=> parseInt(a)+ parseInt(b),0 );
    var multiply = arr.reduce( (a,b)=> parseInt(a)* parseInt(b),1 );

    var result = multiply - sum;
    return result;

};
console.log(subtractProductAndSum(234));