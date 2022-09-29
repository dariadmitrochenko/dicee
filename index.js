function diceFlip() {
  var randomNumber = Math.random() * 6;
  randomNumber = Math.floor(randomNumber) + 1;
  return randomNumber;
}

var diceFlip1 = diceFlip();
var diceFlip2 = diceFlip();


document.querySelector(".img1").setAttribute("src", "images/dice" + diceFlip1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + diceFlip2 + ".png");


if (diceFlip1 > diceFlip2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (diceFlip1 === diceFlip2) {
  document.querySelector("h1").innerHTML = "Draw";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
