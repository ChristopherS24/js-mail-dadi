//form
const form = document.querySelector ('form');

//evento
form.addEventListener ('submit' , 
    function(event) {
        event.preventDefault();

        //prendi e salva valori
        const emailInput = document.getElementById ('email');
        const email = emailInput.value;
        console.log ('email inserita:' , email , typeof email);

        //array
        const autorizzati = ['qui@hotmail.com' , 'quo@hotmail.com' , 'qua@hotmail.com'];
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
            alert('email NON autorizzata');

        }

    }
)

