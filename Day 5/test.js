const prompt = require("prompt-sync")();

function getUserChoice() {
    let inp = prompt(`Please enter your choice: Rock, Paper Or Scissor: `);
    let choice = inp.toLowerCase();
    
    return choice;
}

function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissor"];

    const random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random].toLocaleLowerCase();
}
// console.log(getUserChoice());
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let roundWinner = '';

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        return roundWinner;
    }
    if (playerSelection === "rock" && computerSelection === "scissor" ||
        playerSelection === "scissor" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        roundWinner = 'player';
        return roundWinner;
    }
    if (computerSelection === "rock" && playerSelection === "scissor" ||
        computerSelection === "scissor" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "rock") {
        roundWinner = 'computer';
        return roundWinner;
    }
}

let computerScore = 0;
let humanScore = 0;
let result = '';


let user = getUserChoice();
let computer = getComputerChoice();

let game = playRound(user, computer);
console.log(game);