console.log("test");

class fruit {
  #name;
  #color;
  #price;
  constructor(name, color) {
    this.#name = name;
    this.#color = color;
    this.#price = 0;
  }
  get getPrice() {
    return this.#price;
  }
  set setPrice(price) {
    this.#price = price;
  }
}
class Store {
  #name;
  #arrFruit;

  constructor(name) {
    this.#name = this.name;
    this.#arrFruit = [];
  }
  get getArrayFruits() {
    return this.#arrFruit;
  }

  set setArrayFruits(objctFruits) {
    this.#arrFruit.push(objctFruits);
  }
}
let objctStore = new Store("toko buah");
//set harga

//memasukan list array
//console.log(objctStore.getArrayFruits);
let objapple = new fruit("jeruk", "kuning");
objapple.setPrice = 3000;
//cek
objctStore.setArrayFruits = objapple;

//cek objct
console.log(objctStore.getArrayFruits);
