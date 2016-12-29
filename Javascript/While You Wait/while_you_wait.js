
var daysUntilMyBirthday = 60;

function countdown(days){
    while(days != 0){
        if(days > 30){
            console.log("Not yet, " + days + " more days. Hang in there buddy...");
        }
        else{
            console.log(days + " DAYS UNTIL MY BIRTHDAY!!!");
        }
        days--;
    }
    console.log("It's your birthday. HAPPY BIRTHDAY!!!");
}

countdown(daysUntilMyBirthday);
