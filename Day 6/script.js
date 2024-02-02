// Function : Get's user's input.
function getUserChoice() {
    let input = prompt(`Please enter your choice: Rock, Paper Or Scissor: `)
    return input.toLowerCase();
}

// Function : Get's computer's choice.
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];

    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let user = getUserChoice();
let comp = getComputerChoice();
console.log(user + ' and ' + comp);

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "TIE, Try again!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return "You Won! Rock beats Scissor.";
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return "You Won! Scissor beats Paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Won! Paper beats Rock.";
    } else if (computerSelection === 'rock' && playerSelection === 'scissor') {
        return "You Lost! Rock beats Scissor.";
    } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
        return "You Lost! Scissor beats Paper.";
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return "You Lost! Paper beats Rock.";
    } else {
        return "Please enter a valid input!";
    }
} 