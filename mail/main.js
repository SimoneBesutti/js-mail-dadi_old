//Dichiaro le variabili
var email, elencoEmail, Messaggio, controlloemail, i, emailTrovata;


//Chiedere l'inserimento dell'email da parte dell'utente
email = prompt("Inserisci la tua Email")

emailTrovata = false

//Controllare se l'email fa parte della lista di chi può accedere
elencoEmail = ["nome1@gmail.com", "nome2@gmail.com", "nome3@gmail.com"];
Messaggio = "Benvenuto";

//Stampare un essaggio appropriato
for (var i = 0; i < elencoEmail.length; i++){
    console.log(elencoEmail[i])

    if (elencoEmail[i] == email)  { 
        emailTrovata = true;
        document.writeln(Messaggio);
    }
    
}

if (emailTrovata == false){
    document.writeln("La tua mail non è stata trovata")
}

/*for (i = 0; i < elencoEmail.length; i++){
    document.writeln((i+1) + "; " + elencoEmail[i]);
}*/
