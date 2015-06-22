/**
 * Created by SergioManrique on 6/22/2015.
 */
var Calculator = function(){};

Calculator.prototype.sum = function(){

    var _sum = function(numbers, pos){

        if (!pos)
            pos = 0;

        if (pos == numbers.length - 1)
            return numbers[pos];

        return numbers[pos] + _sum(numbers, pos + 1);
    };

    //console.log('ARGS[0]', arguments[0]);
    //if (typeof arguments[0] == 'object')
    //    return _sum(arguments[0]);

    return _sum(arguments);
};
Calculator.prototype.average= function(){
    var _avg = function(numbers, pos){
        if (!pos)
            pos = 0;

        if (pos == numbers.length - 1)
            return numbers[pos];

        return numbers[pos] + _avg(numbers, pos + 1);
    };
    return _avg(arguments)/arguments.length;
};

Calculator.prototype.maximum = function(){
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
Calculator.prototype.minimum = function(){
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


Calculator.prototype.eval = function () {
    console.log('SUM:', this.sum(arguments));
    console.log('AVG:', this.average(arguments));
    console.log('MAX:', this.maximum(arguments));
    console.log('MIN:', this.minimum(arguments));
};


var calculator = new Calculator();