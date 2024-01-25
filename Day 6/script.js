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
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
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

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

// This function takes a playerselection abd checks if the game is over
// If the game is over it will run the openEndGameModal() 
// We will assign computerSelection to a randomChoice();
// we will updateChoices(playerSelection, computerSelection);
// UpdateScore()
// Check if the game is over if yes openEndgameModle and send setFinalMessage()

function handleClick(playerSelection) {

    if (isGameOver()) {
        openEndgameModal()
        return;
    }

    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()

    if (isGameOver()) {
        openEndgameModal()
        setFinalMessage()
    }
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
// New to change the whole logic
function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

// updateScoreMessage (winner, playerselection, computerselection) display texts
function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'ROCK':
            playerSign.textContent = '✊'
            break
        case 'PAPER':
            playerSign.textContent = '✋'
            break
        case 'SCISSORS':
            playerSign.textContent = '✌️'
            break
    }
    switch (computerSelection) {
        case 'ROCK':
            computerSign.textContent = '✊'
            break
        case 'PAPER':
            computerSign.textContent = '✋'
            break
        case 'SCISSORS':
            computerSign.textContent = '✌'
            break
    }
}

// restartgame()
// Checks condiion
function restartgame() {

}







