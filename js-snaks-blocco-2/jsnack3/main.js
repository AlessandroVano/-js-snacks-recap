/**
 * Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 */

// Array con numeri interi
const numeriInteri =[0, 10, 34, 90, 33, 56, 43, 11, 89];
console.log(numeriInteri);
// dichiarazione let per eseguire la somma
let sommaNumeri = 0;

for (let i = 0; i < numeriInteri.length; i ++) {
    if(i % 2 !== 0) {
        sommaNumeri += numeriInteri[i];
    }
}
console.log(`il risultato di tutti i numeri in posizione dispari è ${sommaNumeri}`);