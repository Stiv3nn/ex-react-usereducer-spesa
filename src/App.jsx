import { useState } from "react";

function App() {

  // 1 --> Creazione dell'array (MILESOTNE 1)
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 }
  ];

  // 4 --> CREO IL MIO STATE (MILESTONE 2)
  const [addedProducts, setAddedProducts] = useState([]);
  // 13 --> CREO LA FUNZIONE DEL PUNTO 12 upadateProductQuantity E PASSIAMO IL NAME E QUANTITY (MILESTONE 3)
  const upadateProductQuantity = (name, quantity) => {
    // 14 --> QUESTA FUNZIONE DEVE MODIFICARCI SETADDEDPRODUCTS, FACENDOLO CON UN MAP
    setAddedProducts(curr => curr.map(p => {
      if (p.name === name) {
        return {
          ...p,
          quantity
        }
      }
      return p;
    }))
  }

  // 7 --> CREARE LA FUNZIONE DEL FUNZIONAMENTO DEL BOTTONE AL CLICK, CHE PRENDERA' COME IMPASTO IL NOSRTO PRODUCT CHE CHIAMEREMO PRODUCT (MILESTONE 2)
  // const addToCart = product => {
  //   // IL NOSTRO PRODUCT DOVRA' AIUTARCI SE C'E' GIA' UN PRODOTTO O NO CON LO STESSO NOME, UTILIZZANDO SOME CHE RITORNO UN BOOLEANO (MIELSTONE 2)
  //   const isProductAlreadyAdded = addedProducts.some(p => p.name === product.name);
  //   if (isProductAlreadyAdded) {
  //     return;
  //   }
  // HO COMMENTATO LA FUNZIONE SOPRA PERCHE' DEVO FARE UTILIZZARE IL METODO FIND PER IL PRODOTTO GIA' PRESENTE (MILESTONE 3 )
  const addToCart = product => {
    // IL NOSTRO PRODUCT DOVRA' AIUTARCI SE C'E' GIA' UN PRODOTTO O NO CON LO STESSO NOME, UTILIZZANDO SOME CHE RITORNO UN BOOLEANO (MIELSTONE 2)
    const alreadyAddedProduct = addedProducts.find(p => p.name === product.name);
    if (alreadyAddedProduct) {
      // 12 --> CREAZIONE DELLA FUNZIONE PER INCREMENTARE IL PRODOTTO SE è GIA' PRESENTE (MILESOTNE 3)
      upadateProductQuantity(alreadyAddedProduct.name, alreadyAddedProduct.quantity + 1)
      return;
    }
    // // 9 --> DICHIARANDO IL PRODOTTO NUOVO DEL PUNTO 9 (MILESTONE 2)
    // const productToAdd = {
    //   ...product,
    //   quantity: 1
    // }
    // // 8 --> SE IL RPODOTTO NON E' PRESENTE (MILESTONE 2)
    // setAddedProducts(curr => [...curr, productToAdd]);

    // 11 --> UNIONE TRA IL PUNTO 8 E 9 (MILESTON 2)
    setAddedProducts(curr => [...curr, {
      ...product,
      quantity: 1
    }])
  }

  // 16 --> CREAZIONE DELLA FUNZIONE DEL PUNTO 15 PER IMUOVERE IL PRODTTO DAL CARRELLO (MILESTONE 3)
  const removeFromCart = product => {
    // 17 --> PER RIMUOVERE IL PRODOTTO UTILIZZIAMO IL FILTER, !== NON è UGUALE A (MILESTONE 3)
    setAddedProducts(curr => curr.filter(p => p.name !== product.name));
  }

  // 18 --> CREAZIONE DELLA VARIABILE PER IL CALCOLO TOTALE (MILESTONE 3)
  const totalToPay = addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  return (
    <>
      {/* 2 --> CREAZIONE DEL COMPONENTE CHE MOSTRERA' LA LISTA DEI PRODOTTI (MILESOTNE 1) */}
      <h1>Prodotti tra cui scegliere</h1>
      {/* 3 --> FUNZIONE PER MOSTRARE I PRODOTTI IN UNA LISTA DI <li> (MILESOTNE 1) */}
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <p>{p.name} ({p.price.toFixed(2)})</p>
            {/* 5 --> CREAZIONE DI UN BOTTONE PER OGNI PRODOTTO DELLA LISTA (MILESTONE 2) */}
            {/* 6 --> INSERIMENTO DELLA FUNZIONE ADDTOCART AL CLICK PER AGGIUNGERE IL PRODOTTO (MILESTONE 2) */}
            <button onClick={() => addToCart(p)}>Aggiugni al carello</button>
          </li>
        ))}
      </ul>
      {/* 10 -->  (MIELSTONE 3)*/}
      {addedProducts.length > 0 && (<>
        <h2>Carrello</h2>
        <ul>
          {addedProducts.map((p, i) => (
            <li key={i}>
              <p>{p.quantity} x {p.name} ({p.price.toFixed(2)})</p>
              {/* 15 --> CREAZIONE DEL BOTTONE PER RIMUOVERE IL PRODOTTO DAL CARRELLO (MILESTONE 3) */}
              <button onClick={() => removeFromCart(p)}>Rimuovi dal carrello</button>
            </li>
          ))}
        </ul>
        {/* 19 --> ANDIAMO A STAMPARE IL TOTALTOPAY IN FONDO ALLA PAGINA (MILESOTNE 3) */}
          <h3>Totale da pagare: {totalToPay.toFixed(2)}</h3>
      </>)}
    </>
  )
}

export default App
