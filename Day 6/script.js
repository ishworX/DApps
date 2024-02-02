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

// Function : Checks the win or loss condition for both player and computer.
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

// The main function to play the game!
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let result = playRound(getUserChoice(), getComputerChoice());

        if (result[4] === 'W') {
            console.log(result);
            playerScore++;
            console.log("Round: " + i);
            console.log(`Your Score:- ${playerScore} Computer Score:- ${computerScore}`);
        } else if (result[4] === 'L') {
            console.log(result);
            computerScore++;
            console.log("Round: " + i);
            console.log(`Your Score:- ${playerScore} Computer Score:- ${computerScore}`); 
        } else if (result[0] === 'T') {
            console.log(result);
            console.log("Round: " + i);
            console.log(`Your Score:- ${playerScore} Computer Score:- ${computerScore}`); 
        } else {
            console.log(result);
            break;
        }
    }

    if (playerScore > computerScore) {
        console.log(" \nCongratulations you won the game.")
        console.log(`Your Score:- ${playerScore} Computer Score:- ${computerScore}`); 
    } else if (playerScore === computerScore) {
        console.log(" \nIt's a TIE.")
        console.log(`Your Score:- ${playerScore} Computer Score:- ${computerScore}`); 
    } else {
        console.log(" \nYou lost the game! Better luck next time.")
        console.log(`Your Score:- ${playerScore} Computer Score:- ${computerScore}`); 
    }
}

playGame();