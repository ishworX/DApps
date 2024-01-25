// Interations



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

