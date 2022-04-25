class Car {
  jumlahRoda = 4;
  warna;
  #kecepatan = 0;
  tambahKecepatan() {
    this.#kecepatan += 10;
  }
  get getKecepatan() {
    return this.#kecepatan;
  }
}
class MobilListrik extends Car {
  baterai = "1000 watt";
}

let ml = new MobilListrik(); //MEMBUAT OBJEK
console.log(ml.getKecepatan);
console.log(ml.baterai);
