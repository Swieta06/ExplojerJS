let hasil = penjumlahan(10, 10);
console.log(hasil);

function penjumlahan(a, b) {
  let total = a + b;
  return total;
}

let arrowFunction = (a, b) => {
  console.log(a);
  console.log(b);
};

let arfunc = function () {
  console.log("Hallo dunia");
};
arrowFunction("ini a", "ini b");
arfunc();
