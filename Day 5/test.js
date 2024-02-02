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
    let player = playerSelection;
    let computer = computerSelection;

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

function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {

        let result = playRound(getUserChoice(), getComputerChoice());

        if (result[4] === "W") {
            console.log(result);
            playerScore++;
            console.log("You: " + playerScore + "  Computer: " + computerScore);
        } else if (result[4] === "L") {
            console.log(result);
            computerScore++;
            console.log("You: " + playerScore + "  Computer: " + computerScore);
        } else if (result[0] === "T") {
            console.log(result);
            console.log("You: " + playerScore + "  Computer: " + computerScore);
        } else {
            console.log(result);
            break;
        }
    }

    if (playerScore > computerScore) {
        console.log("");
        console.log("You Win!!!");
        console.log("You: " + playerScore + "  Computer: " + scoreComputer);
    } else if (playerScore === computerScore) {
        console.log("It's a Tie");
    } else {
        console.log("");
        console.log("You Win!!!");
        console.log("You: " + playerScore + "  Computer: " + scoreComputer);
    }
}

playGame();
