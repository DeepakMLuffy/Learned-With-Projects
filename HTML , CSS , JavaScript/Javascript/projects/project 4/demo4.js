/** @format */

// New Array

var cards = [];
var sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

var messageEl = document.getElementById("message-el");
var sumEl = document.querySelector("#sum-el");
var cardsEl = document.getElementById("cards-el");

function getRandamCard() {
  var randomnumber = Math.floor(Math.random() * 13) + 1;
  if (randomnumber > 10) {
    return 10;
  } else if (randomnumber === 1) {
    return 11;
  } else {
    return randomnumber;
  }
}

function startGame() {
  isAlive = true;

  var firstCard = getRandamCard();
  var secondCard = getRandamCard();
  var cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum == 21) {
    message = "Wohoo! YOu've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    var card = getRandamCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

let player={
   name : "per",
   Chips : 200
}


let playerEl = document.getElementById("player-el")

playerEl.textContent= player.name + " : $" + player.Chips
