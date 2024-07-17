let dado = prompt('Inserire un numero dal 1 al 6');
console.log ('numero inserito:' , dado);

//generare un numero random d 1 a 6
let casualnumber = Math.floor(Math.random() * 6);
console.log ('numero casuale generato:' , casualnumber)

//condizione
if (dado > casualnumber) {
    console.log ('Hai Vinto!');
    alert ('Complimenti, Hai Vinto!');
}
else if ( dado == casualnumber) {
    console.log ('Hai Pareggiato!');
    alert ('Hai Pareggiato! Riprova');
}
else {
    console.log ('Hai Perso!');
    alert ('Hai Perso! Riprova');
}
