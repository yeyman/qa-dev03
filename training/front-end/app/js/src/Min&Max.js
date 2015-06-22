/**
 * Created by SergioManrique on 6/22/2015.
 */
/* get the max and min
  function maximum
  function minimun

 */
var GetMaxMin = function(){};

GetMaxMin.prototype.maximum = function(){
    var calcmax = function (arg, pos,res){
        if (pos==null)
        {
            pos =0;
            res = 0;
            return calcmax(arg,pos,res);
        }
        else if(pos <arg.length-1)
        {
            var max = res;
            if (max < arg[pos])
            {
                max = arg[pos];
                calcmax(arg,pos+1,max);
            }
            else
            {
                calcmax(arg,pos+1,max);
            }
        }
        if(pos==arg.length-1)
        {
            var max = res;
            if (max < arg[pos])
            {
                max = arg[pos];
            }
            console.log('The maximum value of the range is: '+max);
        }
    };
    return calcmax(arguments);
};
GetMaxMin.prototype.minimum = function(){
    var calcmin = function (arg, pos,res){
        if (pos==null)
        {
            pos = 0;
            res = 999999;
            return calcmin(arg,pos,res);
        }
        else if(pos <arg.length-1)
        {
            var min = res;
            if (min > arg[pos])
            {
                min = arg[pos];
                calcmin(arg,pos+1,min);
            }
            else
            {
                calcmin(arg,pos+1,min);
            }
        }
        if(pos==arg.length-1)
        {
            var min = res;
            if (min > arg[pos])
            {
                min = arg[pos];
            }
            console.log('The minimum value of the range is: '+min);
        }
    };
    return calcmin(arguments);
};


GetMaxMin.prototype.eval = function () {
    console.log('MAX:', this.maximum(arguments));
    console.log('MIN:', this.minimum(arguments));
};


var getMaxMin = new GetMaxMin();