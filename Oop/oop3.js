function main() {
  //DO YOUR CODE HERE
  const input = readLine();
  console.log(input);
  class Animal {
    #name;
    #legs;
    #color;
    // constructor(nama,jlmkaki,warna) {
    //     this.#name = nama;
    //     this.#legs = jlmkaki;
    //     this.#color = warna;
    // }
    /**
     * @param {string} nama
     */
    set setName(nama) {
      return (this.#name = nama);
    }
    /**
     * @param {integer} jlmkaki
     */
    set setLegs(jlmkaki) {
      return (this.#legs = jlmkaki);
    }
    /**
     * @param {string} warna
     */
    set setColor(warna) {
      return (this.#color = warna);
    }
    get getName() {
      return this.#name;
    }

    get getLegs() {
      return this.#legs;
    }
    get getColor() {
      return this.#color;
    }
    getInfo() {
      console.log("This is information of", this.getName);
      if (this.#color) {
        console.log(this.getName, "has", this.getLegs, "legs and has a", this.getColor, "color");
      } else {
        console.log(this.getName, "has", this.getLegs, "legs");
      }
      console.log(" ");
    }
  }
  class Duck extends Animal {
    constructor(name, legs, color) {
      super(name, legs, color);
    }
  }
  class Cat extends Animal {
    constructor(name, legs, color) {
      super(name, legs, color);
    }
  }
  let chicken = new Animal();
  let cat = new Cat();
  let duck = new Duck();
  chicken.setName = "chicken";
  chicken.setLegs = 2;
  chicken.setColor = "brown";
  cat.setName = "Cat";
  cat.setLegs = 4;
  duck.setName = "Duck";
  duck.setLegs = 2;
  chicken.getInfo();
  cat.getInfo();
  duck.getInfo();
}
