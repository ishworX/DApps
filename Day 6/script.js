//For Interaction
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn =document.getElementById('rockBtn')
const paperBtn =document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

//Interaction Function

rockBtn.addEventListener('click',() => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () =>handleClick('SCISSORS'))
restartBtn.addEventListener('click',restartGame)
overlay.addEventListener('click',closeEndgameModal)


// Assign Rock Paper and Scissor using Random function.
function getComputerChoice() {
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

// Check if playerScore or computerscore went to 5.
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
        openEndgameModal();
        return;
    }

    const computerSelection = getComputerChoice();
    
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
// Use the switch command for both player and computer
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
// user winner to check if it beats, beaten or ties
function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
            playerSelection
        )} beats ${computerSelection.toLowerCase()}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
            playerSelection
        )} is beaten by ${computerSelection.toLowerCase()}`
        return
    }

    scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
}

// Endgame model
// Capatilize the first leter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

// adds active on the endgameModel
function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

// removes active on the endgameModel
function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

// Checks if playerscore id greater than computerscore if its than print you won
function setFinalMessage() {
    return playerScore > computerScore
        ? (endgameMsg.textContent = 'You won!')
        : (endgameMsg.textContent = 'You lost...')
}

// restartgame()
// Checks condiion
function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}







