class car {
  #name;
  #price;
  constructor(name) {
    this.#name = name;
    this.#price = 0;
  }
  get getPrice() {
    return this.#price;
  }
  set setPrice(price) {
    this.#price = price;
  }
}
class Showrooms {
  #namee;
  #location;
  #arrcar;
  constructor(name) {
    this.#namee = name;
    this.#arrcar = [];
  }
  get getArrCar() {
    return this.#arrcar;
  }
  set setArrCar(objctCar) {
    this.#arrcar.push(objctCar);
  }
}

//jumlah mobil yang ada di dalam show room
let objctShowRoom = new Showrooms("ShowroomName");

let objctblack = new car("black");

let periceObj = (objctblack.setPrice = 4000);
objctShowRoom.setArrCar = objctblack;
console.log(objctShowRoom);
let lngthcar = objctShowRoom.getArrCar;
console.log(objctShowRoom.getArrCar);

//let objShowrooms = new Showrooms();
console.log(" memiliki jumlah mobil " + lngthcar.length + " dengan Harga total " + periceObj);
//console.log(nama Showrooms memiliki jmlh mobil dangan total harga)
