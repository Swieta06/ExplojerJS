/*for (let n = 0; n <= 10; n++) {
  console.log(n);
  if (n % 3 == 0) {
    let n = "kuy!";
    console.log(n);
  }
}*/

/*let n = parseInt(prompt("Masukan nilai N"));
let x = parseInt(prompt("Masukan nilai X"));
for (n; n <= x; n++) {
  if (n % 3 == 0) {
    console.log("Kuy!");
  } else {
    console.log(n);
  }
}*/

let N = parseInt(prompt("Masukan nilai N"));
let X = parseInt(prompt("Masukan nilai X"));
let hasil = "";
for (let number = 1; number <= N; number++) {
  if (number % X == 0) {
    hasil = hasil + "Kuy! ";
  } else {
    hasil += number + " ";
  }
}
console.log(hasil);
