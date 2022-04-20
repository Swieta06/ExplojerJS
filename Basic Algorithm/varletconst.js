var a = 10;
//code
var a = 20;
console.log(a);

/*
note:
penggunaan let,const hanya dapat dilakukan 
jika memiliki nama variable yang berbeda
*/

//Hoisting
let Hoistin;
Hoistin = 100;
//var Hoistin
console.log(Hoistin);

//scope
let scope = 2;
if (true) {
  let scope = 3;
  console.log("scoope didalam if ", scope);
}
console.log("scoop di luar if", scope);

const array = [1, 2, 3];
array[0] = 4;
console.log(array);
