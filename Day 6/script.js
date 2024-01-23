function getComputerChoice() {
    // Assign Rock Paper and Scissor
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take 
// two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
let playerScore = 0;
let computerScore = 0;
let roundWinner = ' ';

function playRound(playerSelection, computerSelection) {

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

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, 
// RocK or any other variation).
// Account for TIES by re-playing the round.

// Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game 
// that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… 
// if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
// If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.


// Pseudo Code:
// updateChoice assigns emojis to computer

// updateScore()  gives output

// updateScoreMessage (winner, playerselection, computerselection) display texts

// restartgame()
// Checks condiion
function restartgame() {

}

function playGameRock() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];

    if (computerSelection == "rock") {
        commentary.textContent = "It's a tie!";
    } else if (computerSelection == "paper") {
        commentary.textContent = "Paper beats rock, you lose!";
        computerScore++;
    } else {
        commentary.textContent = "Rock beats scissors, you win!";
        playerScore++;
    }
    playerScoreboard.textContent = "You: " + playerScore;
    computerScoreboard.textContent = "Computer: " + computerScore;
    if (playerScore == 5 || computerScore == 5) {
        stopGame();
    }
}





