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
