/**
 * Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
 */

// inserimento array vuoto
const dispari = [];

//richiesta di inserimento numero 
for (let i = 0; i < 6; i++) {
    const numero = parseInt( prompt('inserisci un numero'));
    console.log(numero);
    //modulo per capire se i numeri inseriti sono pari o dispari
    if (numero % 2 !== 0) {
        dispari.push(numero);
    }
} 
        console.log(dispari);