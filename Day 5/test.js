const prompt = require("prompt-sync")();

let inp = prompt(`Please enter your choice: Rock, Paper Or Scissor: `);
let choice = inp.toLowerCase();

console.log(`Your input is ${choice}.`);

