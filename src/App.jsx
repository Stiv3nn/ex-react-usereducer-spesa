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

  // 7 --> CREARE LA FUNZIONE DEL FUNZIONAMENTO DEL BOTTONE AL CLICK, CHE PRENDERA' COME IMPASTO IL NOSRTO PRODUCT CHE CHIAMEREMO PRODUCT (MILESTONE 2)
  const addToCart = () => {
    // IL NOSTRO PRODUCT DOVRA' AIUTARCI SE C'E' GIA' UN PRODOTTO O NO CON LO STESSO NOME, UTILIZZANDO SOME CHE RITORNO UN BOOLEANO (MIELSTONE 2)
    const isProductAlreadyAdded = addedProducts.some(p => p.name === product.name);
    if (isProductAlreadyAdded) {
      return;
    }
    // 9 --> DICHIARANDO IL PRODOTTO NUOVO DEL PUNTO 9 (MILESTONE 2)
    const productToAdd = {
      ...product,
      quantity: 1
    }
    // 8 --> SE IL RPODOTTO NON E' PRESENTE (MILESTONE 2)
    setAddedProducts(curr => [...curr, productToAdd]);
  }

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
            </li>
          ))}
        </ul>
      </>)}
    </>
  )
}

export default App
