
var average = function(salary) {

    max = Math.max(...salary);
    min = Math.min(...salary);

    var filtered = salary.filter(function(value, index, arr){
        return value < max && value >min;
    });

    var result = filtered.reduce((a,b)=>a+b,0);

    return result/filtered.length;
};

salary = [4000,3000,1000,2000]

console.log(average(salary))