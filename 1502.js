var canMakeArithmeticProgression = function(arr) {

    var sorted = arr.sort((a,b)=>a-b)

    var length = sorted.length;
    var nth_item = sorted[0]+(length-1)*(sorted[1]-sorted[0])
    var first_d= sorted[1]-sorted[0];

    var lastItem = sorted[length-1];

    var result =""
    var count =0;
    const duplicates = (array)=>{
        if (array.length !== new Set(array).size)
        {
            return true;
        }
        return  false
    }
    var diff_array=[];

    const formula = (num,next_num)=>{
        var d= next_num-num;

        if (d!=first_d)
        {
            count++;
        }


        if (count>0)
        {
            result = false;
        }
        else
        {
            result =true;
        }

    }

      for (var i=0; i<length-1; i++) {

        formula(sorted[i],sorted[i+1])
      }


      return result


};
// arr = [1,2,3,2,5]
arr = [0,0,0,0]
// arr = [1,3,5]
console.log(canMakeArithmeticProgression(arr));