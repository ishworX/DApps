function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`hello, I am ${this.name}!`);
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}!'`);;
}

Object.getPrototypeOf(Player.prototype);

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player("chintu", "XXX");
const player2 = new Player("chotu", "8008");

player1.sayName();
player2.getMarker()