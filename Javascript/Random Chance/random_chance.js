
var quarters=Math.floor(Math.random()*50)+1;
var WIN=100;

function play(coins){
    console.log("Welcome to our slot machines! You have " + quarters + " coins. Let's play!");
    while(coins > 0){
        var chance=Math.floor(Math.random()*100)+1;

        if(chance == WIN){
            var coinsWon=Math.floor(Math.random()*51)+50;
            coins+=coinsWon;
            console.log("Congrats! You won " + coinsWon + " coins. You now have " + coins + " coins.");
        }
        else{
            console.log("Sorry, you loose.");
            coins--;
            console.log("You now have " + coins + " coins.")
        }
    }
    console.log("Sorry, you're out of coins! Game Over!");
}

play(quarters);
