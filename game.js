"use strict";
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
	} else if (
		playerMove !== "paper" &&
		playerMove !== "scissors" &&
		playerMove !== "rock"
	) {
		return "Choose A Proper Answer! ";
	} else if (playerMove === computerMove) {
		return "It's a Tie!";
	} else {
		return "You win! ";
	}
}
const computerChoice = computerPlay();

console.log(
	game(playerPlay(), computerPlay()) + "Computer Chose " + computerChoice
);
