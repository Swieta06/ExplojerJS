let a = 30;
let b = 40;
let penjumlahan = a + b;
console.log("Penjumlahan = ", penjumlahan);
let pengrangan = a - b;
console.log("pengurangan = ", pengrangan);
let perkalian = a * b;
console.log("Perkalian = ", perkalian);
let pembagian = a / b;
console.log("Pembagian = ", pembagian);
let pangkat = a ** 2;
console.log("Pangkat", pangkat);
let sisabagi = 7 % 3;
console.log("sisa bagi = " + sisabagi);

let converString = "20" + 10;
console.log("Convert String = ", converString);
console.log("type = ", typeof converString);

let converNumber = "20" * 10;
console.log("Convert Number = ", converNumber);
console.log("type = ", typeof converNumber);

//let ternary
let ternary = a > b ? console.log("A lebih besar dari B") : console.log("B LEBIH BESAR ADRI A");

if (a > b) {
  console.log("A lebih besar dari B");
}
if (a < b) {
  console.log("B lebih besar dari A");
}
if (a >= b) {
  console.log("A lebih besar dari A");
}

if (a === b) {
  console.log("A sama dengan B");
}

if (a !== b && b > a) {
  console.log("A tidak sadengan B");
}

//Truthy and falsey

if ("" == false) {
  console.log("nilai ini true");
} else {
  console.log("nilai ini false");
}

let mustNumber = a || -1;
console.log(mustNumber);
