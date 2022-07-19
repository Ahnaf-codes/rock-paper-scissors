"use strict";

//Game Logic

function botPlay() {
	const moveset = ["rock", "paper", "scissors"];
	const move = moveset[(Math.random() * moveset.length) | 0];
	const botIcon = document.getElementById("bot-icon");

	if (move == "rock") {
		botIcon.src = "/assets/rock.png";
	}
	if (move == "paper") {
		botIcon.src = "/assets/paper.png";
	}
	if (move == "rock") {
		botIcon.src = "/assets/scissors.png";
	}
	return move;
}
function playerPlay() {
	const question = prompt("Rock, Paper or Scissors?");
	const move = question.toLowerCase();
	return move;
}
function game(playerMove, botMove) {
	const resultText = document.getElementById("result");
	const playerScore = document.getElementById("player-score");
	const botScore = document.getElementById("bot-score");

	if (
		(playerMove === "paper" && botMove === "scissors") ||
		(playerMove === "scissors" && botMove === "rock") ||
		(playerMove === "rock" && botMove === "paper")
	) {
		return "You Lose!";
	}
	if (
		playerMove !== "paper" &&
		playerMove !== "scissors" &&
		playerMove !== "rock"
	) {
		return "Choose A Proper Answer! ";
	}
	if (playerMove === botMove) {
		return "It's a Tie!";
	}
	if (
		(playerMove === "scissors" && botMove === "paper") ||
		(playerMove === "paper" && botMove === "rock") ||
		(playerMove === "rock" && botMove === "scissors")
	) {
		return "You win!";
	}
}
// const botChoice = botPlay();
// const playerChoice = playerPlay();
// console.log(
// 	game(playerChoice, botChoice) + "bot Chose " + botChoice
// );

//Game Logic End

//UI Start
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerArea = document.getElementById("choice-container");
const botChoice = botPlay;
let playerChoice = "";

function selectId(event) {
	return (playerChoice = event.target.id); // Assigns the id of weapon clicked to playerChoice
}
playerArea.addEventListener("click", selectId);
playerArea.addEventListener("click", botChoice);
