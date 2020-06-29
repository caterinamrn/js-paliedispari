// var parola = prompt("Inserisci una parola");
// var rovescio = "";
// for (var i = 0; i < parola.length; i++) {
//   rovescio += parola[(parola.length -1 -i)]
//  }
// console.log(parola , rovescio);
// if (parola == rovescio) {
//   console.log("Hai inserito una parola palindroma");
// } else {
//   console.log("La parola inserita non è palindroma");
// }

// soluzione con funzione
var parolaUtente = prompt("Inserisci una parola");
var contrario = parolaAlContrario(parolaUtente);

console.log(parolaUtente,contrario);

if (parolaUtente == contrario) {
  console.log("Hai inserito una parola palindroma");
} else {
  console.log("La parola inserita non è palindroma");
}
// function
function parolaAlContrario(parola) {
  var rovescio = "";
  for (var i = 0; i < parola.length; i++) {
    rovescio += parola[(parola.length -1 -i)]
   }
   return rovescio;
}
