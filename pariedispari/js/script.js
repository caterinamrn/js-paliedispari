var puntata = prompt ("Scommetti su pari o dispari? ");
var num = parseInt(prompt("Inserisci un numero da 1 a 5"));

var numCPU = getRandomIntInclusive(1,5);
var somma = numCPU + num;
console.log(num,numCPU,somma);
var risultato = PariDispari(somma);
console.log(risultato);

if (risultato == puntata) {
  console.log("Hai vinto!");
}
else {
  console.log("Hai perso");
}
// function
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random()*(max - min +1 )+min);
  return result;
}
function PariDispari(num) {
  var result;
  if (somma%2) {
    result = "dispari"
  }
  else {
    result = "pari";
  }
  return result;
}
