var HOUR=8;
var MIN=45;
var PERIOD="AM";

function tellTime(hour, min, period){
    console.log("If you don't mind, can I have the time?");

    if(period == "AM"){
        if(min == 0){
            console.log("It's " + hour + " in the morning.");
        }
        else if(min < 30){
            console.log("It's just after " + hour + " in the morning.");
        }
        else{
            hour++;
            console.log("It's almost " + hour + " in the morning.");
        }
    }

    else{
        if(min == 0){
            console.log("It's " + hour + " in the evening.");
        }
        else if(min < 30){
            console.log("It's just after " + hour + " in the evening.");
        }
        else{
            hour++;
            console.log("It's almost " + hour + " in the evening.");
        }
    }
}

tellTime(HOUR, MIN, PERIOD);
