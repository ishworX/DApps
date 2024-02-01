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

    if (playerSelection == computerSelection) {
        roundWinner = 'tie';
        return roundWinner;
    }
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSOR" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "ROCK") {
        roundWinner = 'player';
        return roundWinner;
    }
    if (computerSelection == "ROCK" && playerSelection == "SCISSORS" ||
        computerSelection == "SCISSOR" && playerSelection == "PAPER" ||
        computerSelection == "PAPER" && playerSelection == "ROCK") {
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