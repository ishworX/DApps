// Good
function getPlayerScore();
function getPlayerName();
function getPlayerTag();

// Bad
function getUserScore();
function fetchPlayerName();
function retrievePlayer1Tag();


// Good
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Bad (these start with verbs, could be confused for functions)
const getCount = 10;
const isSelected = true;

// Good
function getCount() {
    return numberOfThings;
}

// Bad (it's a noun)
function myName() {
    return "Thor";
}

// This line is a bit too long
let reallyReallyLongLine = something + somethingElse + anotherThing + howManyTacos + oneMoreReallyLongThing;

// You could format it like this
let reallyReallyLongLine =
    something +
    somethingElse +
    anotherThing +
    howManyTacos +
    oneMoreReallyLongThing;

// Or maybe like this
let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
    howManyTacos + oneMoreReallyLongThing;

// Bad Example - comment doesn't tell why, only what and how

// This function increments the value of i by 1
function incrementI(i) {
    i = i + 1; // Add one to i
    return i;
}

// Better Example - comment tells a why

// This function increments the value of index to move to the next element
function incrementI(i) {
    i = i + 1;
    return i;
}

// Good Example - the code tells all that is needed

function moveToNextElement(index) {
    index = index + 1;
    return index;
}