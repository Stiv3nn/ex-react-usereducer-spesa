Obiettivo:
Stai lavorando su un'applicazionedi e-commerce e devi implementare in sistema di gestione del carrello.

MILESTONE 1: mostrare la lista dei prodotti
1 --> Parti dall'array `products` fornito:
const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 }
];

2 --> Crea un componente che mostra la lista dei prodotti
3 --> Per ogni prodotto, mostra: 
        - NOME
        - PREZZO

Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo
-------------------------------------------------------------------------
MILESTONE 2: Aggiungere prodotti al carello

1 --> Aggiugni uno stato locale `addedProducts` (inizzialmente un array vuoto) per rappresentare i prodotti nel carrello
2 --> Per ogni prodotto della lista, aggiungi un bottone "Aggiugni al carrello":
                        - Al click del bottone, usa una funzione `addToCart` per: 
                        - Aggiungere il prodotto al carrello se non è già presente, con na prorpietà ``quantity = 1
3 --> Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se `addeDProducts` contiene almeno un elemento 
                        - Per ogni prodotto nel carello, mostra:
                        - NOME
                        - PREZZO
                        - QUANTITA'

OBIETTIVO: L'utente può aggiungere prodotti al carrello e vedere  una lista dei prodotti aggiunti
------------------------------------------------------------------------------
MILESTONE 3: 