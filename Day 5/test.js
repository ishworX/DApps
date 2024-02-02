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
    let player = getUserChoice();
    let computer = getComputerChoice();

    if (player === 'rock' && computer === 'scissors') {
        return "You Win! Rock beats Scissors"
    } else if (player === 'rock' && computer === 'paper') {
        return "You Lose! Paper beats Rock"
    } else if (player === 'paper' && computer === 'rock') {
        return "You Win! Paper beats Rock"
    } else if (player === 'paper' && computer === 'scissors') {
        return "You Lose! Scissors beat Paper"
    } else if (player === 'scissors' && computer === 'paper') {
        return "You Win! Scissors beat Paper"
    } else if (player === 'scissors' && computer === 'rock') {
        return "You Lose! Rock beats Scissors"
    } else if (player === computer) {
        return "TIE play again"
    } else {
        return "Enter a valid value"
    }
}



let computerScore = 0;
let humanScore = 0;
let result = '';



let user, computer;
let game = playRound(user, computer);
console.log(game);