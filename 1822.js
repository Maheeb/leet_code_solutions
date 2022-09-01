var arraySign = function(nums) {


    var final_result="";

   var product = nums.reduce((a,b)=>(a*b),1)

        if (product>0)
        {
            final_result= 1;
        }
         if(product<0)
        {
            final_result= -1;
        }
         if(product==0)
        {
            final_result=  0;
        }


    return final_result;
};
nums = [1,5,0,2,-3]
console.log(arraySign(nums));