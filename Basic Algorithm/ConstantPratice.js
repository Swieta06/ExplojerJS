let math = parseInt(prompt("Masukan nilai Math"));
let eng = parseInt(prompt("Masukan nilai Engglish"));
let algo = parseInt(prompt("Masukan nilai Algorithm"));

if (algo > 7) {
  let avg = (math + eng + algo) / 3;
  if (avg > 60) {
    console.log("you are passed");
  } else {
    console.log("you are failed");
  }
} else {
  console.log("you are failed");
}
//console.log(a);
//onsole.log(typeof a);
