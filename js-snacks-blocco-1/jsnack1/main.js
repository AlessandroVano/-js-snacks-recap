/**
 * 
Jsnack 1

L'utente inserisce due parole in successione con due prompt.
il software stampa la prima parola più corta, poi la parola più lunga
 */

// INSERIMENTO PAROLE
const parola1 = prompt('inserisci la prima parola');
console.log(parola1);
const parola2 = prompt('inserisci la seconda parola');
console.log(parola2);


// stampo prima parola più corta e successivamente quella più lunga

if (parola1 === parola2) {
    console.log('hanno la stessa lunghezza');
} else if (parola1 > parola2) {
    console.log(`${parola2} ${parola1}`);
}