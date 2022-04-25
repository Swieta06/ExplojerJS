//inheritence
console.log("test");
class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("Eat");
  }
}
class Bird extends Animal {
  numWings;
  constructor(numWings, name) {
    this.numWings = numWings;
    super(name);
  }
}
const anima1l = new Animal("yoyo", 2);
console.log(anima1l.name);
console.log(anima1l.numWings);
console.log(anima1l.eat);
