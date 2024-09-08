var randomNumber1=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var number1 =Math.floor(Math.random()*randomNumber1.length);
var number2 =Math.floor(Math.random()*randomNumber1.length);

document.querySelector(".img1").setAttribute("src",randomNumber1[number1]);

document.querySelector(".img2").setAttribute("src",randomNumber1[number2]);
function winner(){
    if (number1 > number2) {
        document.querySelector("h1").textContent = "player 1 wins";
    }
    else if (number1 < number2){
        document.querySelector("h1").textContent = "player 2 wins";
    }
    else{
        document.querySelector("h1").textContent = "draw";
    }
}
var winner = function(){
    if (number1 > number2) {
        document.querySelector("h1").textContent = "player 1 wins";
    }
    else if (number1 < number2){
        document.querySelector("h1").textContent = "player 2 wins";
    }
    else{
        document.querySelector("h1").textContent = "draw";
    }
}
var header = document.querySelector("h1");
if (number1 > number2) {
  header.textContent = "🚩 Player 1 Wins!";
} else if (number1 < number2) {
  header.textContent = "Player 2 Wins! 🚩";
} else {
  header.textContent = "It's a Draw!";
}