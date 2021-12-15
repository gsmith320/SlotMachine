document.getElementById('replay').addEventListener('click', replay);

//html
var icon = ['bar.jpg', 'bell.jpg', 'cherries.jpg', 'melon.jpg', 'orange.jpg', 'plum.jpg'];
var icon1 = icon[Math.floor(Math.random() * icon.length)];
var icon2 = icon[Math.floor(Math.random() * icon.length)];
var icon3 = icon[Math.floor(Math.random() * icon.length)];
var picture1 = document.getElementById('pic1');
var picture2 = document.getElementById('pic2');
var picture3 = document.getElementById('pic3');
picture1.src = icon1;
picture2.src = icon2;
picture3.src = icon3;

//slot machine algarithim
var userBet = Number(prompt("Place a bet"));
var win;
var winnings;
var totalBet = 0;
var totalWinnings = 0;
var networth = 0;
var con;
var userBet2;
var insert;
var difference;
if(icon1 === icon2 && icon2 === icon3) {
    win = 3;
} else if(icon1 === icon2 || icon2 === icon3 || icon1 === icon3) {
    win = 2;
} else {
    win = 0;
}
winnings = userBet * win;
totalBet = totalBet + userBet;
networth = networth + winnings;

//html
document.getElementById("current").innerHTML = "your current bet is  " + userBet;
document.getElementById("winning").innerHTML = "Your current winnings are " + winnings;
document.getElementById("totalBet").innerHTML = "In total you have put in " + totalBet;
document.getElementById("networth").innerHTML = "Your total amount of money left is " + networth;

function replay(){
//html
icon = ['bar.jpg', 'bell.jpg', 'cherries.jpg', 'melon.jpg', 'orange.jpg', 'plum.jpg'];
icon1 = icon[Math.floor(Math.random() * icon.length)];
icon2 = icon[Math.floor(Math.random() * icon.length)];
icon3 = icon[Math.floor(Math.random() * icon.length)];
picture1 = document.getElementById('pic1');
picture2 = document.getElementById('pic2');
picture3 = document.getElementById('pic3');
picture1.src = icon1;
picture2.src = icon2;
picture3.src = icon3;

//slot machine algarithim
insert = 0;
userBet2 = Number(prompt("Place your bet"));
while(networth < userBet2) {
    con = confirm("You bet " + userBet2 + " and you only have " + networth + "\n Would you like to add more money");
    if(con === true) {
        difference = (networth - userBet2) * -1;
        insert = Number(prompt("You need to add at least " + difference));
        networth = networth + insert;
    } else {
        con = confirm("Would you like to lower your bet to under " + networth);
        if(con === true) {
            userBet2 = (Number(prompt("Enter a bet lower then " + networth)));
        } else {
            alert("You can not play");
            userBet2 = 0;
        }
    }
}

if (icon1 === icon2 && icon2 === icon3) {
    win = 3;
} else if(icon1 === icon2 || icon2 === icon3 || icon1 === icon3) {
    win = 2;
} else {
    win = 0;
}
winnings = userBet2 * win;
totalBet = totalBet + insert;
networth = networth - userBet2 + winnings ;

//html
document.getElementById("current").innerHTML = "your current bet is  " + userBet2;
document.getElementById("winning").innerHTML = "Your current winnings are " + winnings;
document.getElementById("totalBet").innerHTML = "In total you have put in " + totalBet;
document.getElementById("networth").innerHTML = "Your total amount of money left is " + networth;
}