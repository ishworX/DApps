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
    
}


let computerScore = 0;
let humanScore = 0;
let result = '';


let user = getUserChoice();
let computer = getComputerChoice();

let game = playRound(user, computer);
console.log(game);