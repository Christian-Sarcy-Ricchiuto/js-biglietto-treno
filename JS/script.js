console.log('JS OK');

/* TRACCIA
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*Nota
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Consigli:
Fate la scaletta degli step e commentate man mano che scrivete il codice
Usate i console.log per verificare che tutto sia a posto
Disattivate live server: può darvi problemi coi prompt.
Bonus
Stampare il prezzo finale sulla pagina invece che in console
Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
Abbellire col CSS
*/

/* FASE PREPARATORIA */

// Recupero degli elementi d'interesse dal DOM 

const billElement = document.getElementById('bill');
const discountlElement = document.getElementById('discount')

// Costo per Km 
const pricXkm = 0.21;

// Messaggio prezzo
const priceMessage = 'Il tuo biglietto costerà: €' 

// Possibile sconto
let discount = null;


