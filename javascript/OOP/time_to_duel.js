// Play out the following scenario
// turn	action
// 1	Make an instance of "Red Belt Ninja"
// 1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
// 2	Make an instance "Black Belt Ninja"
// 2	Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
// 3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
// 3	"Red Belt Ninja" uses the attack method on "Black Belt Ninja"

// Unit Cards
// name	----------cost-power-resilience
// Red Belt Ninja	3   3   	4
// Black Belt Ninja	4	5	    4

// Effect Cards
// name------------------------cost--text--------------------------------stat----------magnitude
// Hard Algorithm	            2	increase target's resilience by 3	 resilience	   +3
// Unhandled Promise Rejection	1   reduce target's resilience by 2	     resilience	   -2
// Pair Programming         	3	increase target's power by 2	     power	       +2

class Card {
	constructor(name, cost) {
		this.name = name;
		this.cost = cost;
	}
	showStats() {
		console.log(this);
	}
}

class Player extends Card {
	constructor(name, cost, power, res) {
		super(name, cost);
		this.power = power;
		this.res = res;
	}
	attack(target) {
		console.log(
			`${this.name} attacks ${target.name}. ${
				this.name
			}s resilience went from ${target.res} to ${(target.res -=
				this.power)}`
		);
		target.res -= this.power;
	}
}

class Effect extends Card {
	constructor(name, cost, text, stat, magnitude) {
		super(name, cost);
		this.text = text;
		this.stat = stat;
		this.magnitude = magnitude;
	}
	play(target) {
		if (target instanceof Player) {
			console.log(
				`Played the ${this.name} card, ${this.text}s ${target.name}'s ${this.stat} by ${this.magnitude}`
			);
			if (this.text == "reduce") {
				target.res += this.magnitude;
			} else if (this.text == "increase" && this.stat == "resilience") {
				target.res += this.magnitude;
			} else {
				target.power += this.magnitude;
			}
			target.showStats();
		} else {
			throw new Error("Target must be a unit!");
		}
	}
}
// player card instances
const redBeltNinja = new Player("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Player("Black Belt Ninja", 4, 5, 4);

// effect card instances
const hardAlgo = new Effect('"Hard Algorithm"', 2, "increase", "resilience", 3);
const unhandledPromiseRejection = new Effect(
	'"Unhandled Promise Rejection"',
	1,
	"reduce",
	"resilience",
	-2
);
const pairProgramming = new Effect(
	'"Pair Programming"',
	3,
	"increase",
	"power",
	2
);

// console.log(redBeltNinja, blackBeltNinja);
// console.log(hardAlgo, unhandledPromiseRejection, pairProgramming);

hardAlgo.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
