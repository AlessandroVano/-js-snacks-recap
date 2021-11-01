/**
 *  Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while 
 */


 // VERSIONE CON FOR

/* let  sommaNumeri = 0


 for (let i = 0; i < 5; i++) {
     // richiesta di inserimento numero (sopra il numero 5 sta ad indicare in numero di volte che il prompt ripeterà la richiesta di inserire un numero.
     const numeroDaInserire = parseInt( prompt('inserisci il numero'))
     console.log(numeroDaInserire);
     sommaNumeri += numeroDaInserire;
 }
     console.log(`la somma dei numeri inseriti è: ${sommaNumeri}`);
 */

     // VERSIONE CON WHILE

     
  // inserimento let
  let sommaNumeri = 0
  let conteggioNumeri = 0

  while ( conteggioNumeri < 5) {
      const numeroDaInserire = parseInt( prompt('inserisci un numero') );
      console.log(numeroDaInserire);
      sommaNumeri += numeroDaInserire;
    
      conteggioNumeri ++;
  }

      console.log(`la somma dei numeri inseriti è ${sommaNumeri}`)