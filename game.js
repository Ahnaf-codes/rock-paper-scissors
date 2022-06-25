"use strict";
function computerPlay() {
    const moveset = ["rock", "paper", "scissors"];
    const move = moveset[(Math.random() * moveset.length)|0];
    return move;
}
function playerPlay() { 
   const question = prompt("Rock, Paper or Scissors?");
    const move = question.toLowerCase();
    return move;
}
function game(playerMove, computerMove) {
    if (playerMove==="paper" && computerMove==="scissors" ||
    playerMove==="scissors" && computerMove==="rock"||
    playerMove==="rock" && computerMove==="paper") {
        
            return "You Lose! ";

    } 
    if (playerMove!== "paper" &&
        playerMove!== "scissors" &&
        playerMove!== "rock") {
        
            return "Choose A Proper Answer! "; 
    
    } 
    if (playerMove===computerMove) {
            return "It's a Tie!";
    }
    if (playerMove==="scissors" && computerMove==="paper" ||
      playerMove==="paper" && computerMove==="rock"||
      playerMove==="rock" && computerMove==="scissors") {
            return "You win! ";
    }
}
const computerChoice = computerPlay();
const playerChoice = playerPlay();
console.log(game(playerChoice, computerChoice) + 
"Computer Chose " + computerChoice);