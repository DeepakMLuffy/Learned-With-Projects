/** @format */

let score = JSON.parse(localStorage.getItem("score"))
|| {
  losses: 0,
  ties: 0,
  wins: 0,
};
display()
let computerMove = "";

// if (!score) {
//     score = {
//       losses: 0,
//       ties: 0,
//       wins: 0,
//     };
//   }
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  display()
  }

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You lose";
    }
  }
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    }
  }
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  display()
  document.querySelector(".js-result")
  .innerHTML=result
  document.querySelector(".js-moves").innerHTML = `You
       <img src="images/${playerMove}-emoji.png" class="move-icon">
       <img src="images/${computerMove}-emoji.png"class="move-icon">
       Computer `;
  // alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}     
  // Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
}

function pickComputerMove() {
  let randomnumber = Math.random();

  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomnumber >= 1 / 3 && randomnumber <= 2 / 3) {
    computerMove = "Paper";
  } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function display(){
document.querySelector(
  ".js-score")
  .textContent = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
}
let interval;
let stopPlaying =false


function autoPlay(){
  if (!stopPlaying){
    let playerMove = pickComputerMove()
   interval=setInterval(function(){
    playGame(playerMove)
  },1000)
  stopPlaying= true
  }
  else{
  clearInterval(interval)
  stopPlaying=false
  }
}
document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'r'){
    playGame('rock')
  }else if(event.key === 'p'){
    playGame('paper')
  }
  else if(event.key === 's'){
    playGame('Scissors')
  }

  })


