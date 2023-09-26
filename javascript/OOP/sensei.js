// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()

class Ninja {
  constructor(name, health = 90, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName() {
    console.log(this.name);
  }
  showStats() {
    console.log(this);
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10);
    this.wisdom = 10;
  }
  speakWisdom() {
    console.log("I have trained you well my turles!");
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.drinkSake();
superSensei.showStats();
