/**
 *  Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
 */

// Inserimento array numeri interi
const bloccoUno = [0, 3, 7, 40, 60, 90];
console.log(bloccoUno);
const bloccoDue = [0, 5, 6];
console.log(bloccoDue);
 

//diamogli una certezza, il blocco due non è uguale al blocco uno
       while (bloccoDue.length !== bloccoUno.length) {
// creo delle condizioni per far si che il programma confrontando i due array aggiunga elementi tanti quanti ne ha il maggiore
        if (bloccoDue.length < bloccoUno.length) {
            bloccoDue.push(1);

        } else {
            bloccoDue.push(2);
        }

       }
       console.log(bloccoDue);

    














       
       
        
    





