const prompt = require("prompt-sync")();



let computerScore = 0;
let humanScore = 0;
let result = '';

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
console.log(getUserChoice());
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ` + i);
    }
}

