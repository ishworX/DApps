// Interations
const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');


// Connecting interactions with Funtions.


// Function Implementations
const computerSelection = getComputerChoice();

// getComputerChoice() will randomly return either ‘Rock’, ‘Paper’ or
// ‘Scissors’. We’ll use this function in the game to make the computer’s play.
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    };
};

// This function plays a single round of Rock Paper Scissors.
// It takes two parameter - the playerSelection and computerSelection 
// Return a string that declares the winner of the round 
// For eg: "You Lose! Paper beats Rock"
let playerScore = 0;
let computerScore = 0;
let roundWinner = ' ';

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundWinner = 'tie';
    }
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSOR" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "ROCK") {
        playerScore++;
        roundWinner = 'player';
    }
    if (computerSelection == "ROCK" && playerSelection == "SCISSORS" ||
        computerSelection == "SCISSOR" && playerSelection == "PAPER" ||
        computerSelection == "PAPER" && playerSelection == "ROCK") {
        computerScore++;
        roundWinner = 'computer';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner == 'player') {
        scoreMessage.textContent = `${playerSelection} beats ${computerSelection}`;
        return;
    }
    
    if (winner == 'computer') {
        scoreMessage.textContent = `${computerSelection} beats ${playerSelection}`;
        return;
    }
    
    scoreMessage.textContent = `${playerSelection} ties with ${computerSelection}`;
}

function updateScore()  {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!";
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = "You won!";
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = "You lost!";
    }

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}
