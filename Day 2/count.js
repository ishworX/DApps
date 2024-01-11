function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}

const player = new Player("chintu", "X");
const player2 = new Player ("chintu paji", "Y");

player.sayName();
player2.sayName();