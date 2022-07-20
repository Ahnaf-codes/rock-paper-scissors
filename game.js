"use strict";
//Variables

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerArea = document.getElementById("choice-container");
const weapons = document.querySelectorAll(".choice-img");
const roundText = document.getElementById("round");
const popupBg = document.getElementById("popup-bg");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-header");
const hidePopup = document.getElementById("close");
const resetPage = document.getElementById("reset");
const botChoice = botPlay;
let playerScore = 0;
let botScore = 0;
let round = 0;
//Logic and Dom Stuff

function botPlay() {
	const moveset = ["rock", "paper", "scissors"];
	const move = moveset[(Math.random() * moveset.length) | 0];
	const botIcon = document.getElementById("bot-icon");

	if (move === "rock") {
		botIcon.src = "assets/rock.png";
	} else if (move === "paper") {
		botIcon.src = "assets/paper.png";
	} else if (move === "scissors") {
		botIcon.src = "assets/scissors.png";
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
	const score = document.getElementById("score");

	if (
		(playerMove === "paper" && botMove === "scissors") ||
		(playerMove === "scissors" && botMove === "rock") ||
		(playerMove === "rock" && botMove === "paper")
	) {
		resultText.textContent = "You Lose!";
		botScore++;
	}
	if (playerMove === botMove) {
		resultText.textContent = "It's a Tie!";
	}
	if (
		(playerMove === "scissors" && botMove === "paper") ||
		(playerMove === "paper" && botMove === "rock") ||
		(playerMove === "rock" && botMove === "scissors")
	) {
		function closePopup() {}
		resultText.textContent = "You win!";
		playerScore++;
	}

	score.textContent = `Your Score: ${playerScore} | Bot Score: ${botScore}`;
	return [playerScore, botScore];
}

function countRound() {
	round++;
	roundText.textContent = `${round}`;
	return round;
}

function openPopup() {
	if (playerScore === 5 || botScore === 5) {
		popupBg.style.visibility = "visible";
		popup.classList.add("open-popup");
	}
	if (playerScore === 5) {
		popupTitle.textContent = "You Destroyed The Bot!";
	}
	if (botScore === 5) {
		popupTitle.textContent = "You Got Schooled By The Bot!";
	}
}

function closePopup() {
	hidePopup.addEventListener("click", () => {
		popupBg.style.visibility = "hidden";
		popup.classList.remove("open-popup");
	});
}

function reset() {
	resetPage.addEventListener("click", () => {
		window.location.reload();
	});
}

function playGame() {
	let playerChoice = "";

	weapons.forEach((weapon) => {
		weapon.addEventListener("click", () => {
			if (weapon.classList.contains("rock")) {
				playerChoice = "rock";
			} else if (weapon.classList.contains("paper")) {
				playerChoice = "paper";
			} else if (weapon.classList.contains("scissors")) {
				playerChoice = "scissors";
			}
			countRound();
			game(playerChoice, botPlay());
			openPopup();
			closePopup();
			reset();
		});
	});
}
playGame();
