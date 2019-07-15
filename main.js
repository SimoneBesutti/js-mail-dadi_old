//Dichiaro le variabili
var email, elencoEmail, Messaggio, controlloemail, i;


//Chiedere l'inserimento dell'email da parte dell'utente
email = prompt("Inserisci la tua Email")
document.getElementById("mioId").innerHTML = email;


//Controllare se l'email fa parte della lista di chi può accedere
elencoEmail = ["nome1@gmail.com", "nome2@gmail.com", "nome3@gmail.com", email];
Messaggio = "Fanculo sei nell'elenco"

//Stampare un essaggio appropriato
for (var i = 0; i < elencoEmail.length; i++){
    if (elencoEmail[i] ==email) 
    console.log(elencoEmail[i]);
}


/*for (i = 0; i < elencoEmail.length; i++){
    document.writeln((i+1) + "; " + elencoEmail[i]);
}*/
