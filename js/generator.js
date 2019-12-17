// chiedo all'utente il suo nome, cognome e colore preferito
var nome = prompt("Qual è il tuo nome?");
// console.log(nome);
var cognome = prompt("Ora dimmi il tuo cognome?");
// console.log(cognome);
var colore = prompt("Qual è il tuo colore preferito?");
// console.log(colore);
var numFisso = 19;

// creo la password tramite concatenazione dei valori delle variabili
var password = nome + cognome + colore + numFisso;
// console.log(password);

// inserisco la password generata all'interno dello span con id Password
document.getElementById('password').innerHTML = password;
