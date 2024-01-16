const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

function age() {

const age = prompt ("What is your age?");
const guessedAge = document.querySelector("#age");

guessedAge.textContent = `Your age is ${age}.`;
}

button.addEventListener("click", age);

function address() {

    const place = prompt("What is your address?");
    const youLive = document.querySelector("#address");

    youLive.textContent = `You live in ${place}`;
}

button.addEventListener("click", address);
