//nome utente
const email = prompt('inserisci la tua email:');
console.log ('email utente:' , email);

//array
const autorizzati = ['qui' , 'quo' , 'qua'];
console.log ('autorizzato', autorizzati);

//condizione
if (email == autorizzati [0]) {
    console.log ('email autorizzata:', autorizzati[0]);
}
else if(email == autorizzati [1]) {
    console.log ('email autorizzata:', autorizzati[1]);
}
else if(email == autorizzati [2]) {
    console.log ('email autorizzata:', autorizzati[2]);
}
else {
    console.log ('email NON autorizzata');
    alert('email NON autorizzata')
}

