/**
 * JSnack 2 
 * 
 * Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
 */

/* 
const numero = parseInt(prompt('inserisci un numero') );
for (let i = 0; i < numero; i ++) {

} if (numero % 2 === 0) {
console.log(numero);

} else (numero % 2 !== 0) 
    numero + 1;
}; */


let somma = 1;

for (let i = 0; i < 1; i++) {
    const numero = parseInt(prompt('inserisci il numero') ); 
    console.log(numero);

    if (numero % 2 === 0) {
        console.log(numero);

    } else if (numero % 2 !== 0 ) {
        somma += numero;
        console.log(numero);
    }
}
 


