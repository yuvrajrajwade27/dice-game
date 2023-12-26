// alert("hello");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".dice1 > .img1").setAttribute("src" , randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".dice2 > .img2").setAttribute("src" , randomDiceImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = "🚩Player 2 Wins!";
} else if (randomNumber1 = randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Game is Draw 😐";
}