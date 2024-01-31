const prompt = require("prompt-sync")();

let inp = prompt(`Please enter your choice: Rock, Paper Or Scissor: `);
let choice = inp.toLowerCase();

console.log(`Your input is ${choice}.`);

let computerScore = 0;
let humanScore = 0;
let result = '';


function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissor"];

    const random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ` + i);
    }
}

