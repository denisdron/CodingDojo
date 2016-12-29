
var days=30;
var payment=0.01;
var reward=0;

function getRich(duration, amount){
    for(var i=duration; i>0; i--){
        reward += amount;
        amount *=2;
    }
    console.log("The reward after " + days + " days is " + reward + " pennies.");
}

getRich(days, payment);
