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
console.log(getUserChoice());
console.log(getComputerChoice());



let computerScore = 0;
let humanScore = 0;
let result = '';

function playRound(playerSelection, computerSelection) {

    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ` + i);
        if (computerSelection === playerSelection ) {
            result = 'tie';
            i++;
        }
    }
    return result;
}

let user = getUserChoice();
let computer = getComputerChoice();

let game = playRound(user, computer);