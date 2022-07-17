"use strict";

//Game Logic

function computerPlay() {
	const moveset = ["rock", "paper", "scissors"];
	const move = moveset[(Math.random() * moveset.length) | 0];
	return move;
}
function playerPlay() {
	const question = prompt("Rock, Paper or Scissors?");
	const move = question.toLowerCase();
	return move;
}
function game(playerMove, computerMove) {
	if (
		(playerMove === "paper" && computerMove === "scissors") ||
		(playerMove === "scissors" && computerMove === "rock") ||
		(playerMove === "rock" && computerMove === "paper")
	) {
		return "You Lose! ";
	}
	if (
		playerMove !== "paper" &&
		playerMove !== "scissors" &&
		playerMove !== "rock"
	) {
		return "Choose A Proper Answer! ";
	}
	if (playerMove === computerMove) {
		return "It's a Tie!";
	}
	if (
		(playerMove === "scissors" && computerMove === "paper") ||
		(playerMove === "paper" && computerMove === "rock") ||
		(playerMove === "rock" && computerMove === "scissors")
	) {
		return "You win!";
	}
}
// const computerChoice = computerPlay();
// const playerChoice = playerPlay();
// console.log(game(playerChoice, computerChoice) + "Computer Chose " + computerChoice);

//Game Logic End

//UI Start
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerArea = document.getElementById("choice-container");
let playerChoice = "";

function selectId(event) {
	return (playerChoice = event.target.id); // Assigns the id of weapon clicked to playerChoice
}

playerArea.addEventListener("click", selectId);
