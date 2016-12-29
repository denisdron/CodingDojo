
var startPoint=2;
var endPoint=1000;
var skipBy=2;

function printRange(min, max, skip){
    for(var i=min; i<max; i+=skip){
        console.log(i);
    }
}

printRange(startPoint, endPoint, skipBy);
