import { useState } from "react";
import "./styles.css";

function App() {
  //state
  //const [compteur, setCompteur] = useState(19);

  const [fruits, setFruits] = useState([
    { id: 1, nom: "Orange" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Mangue" },
  ]);
  //comportement
  const incremente = () => {
    setCompteur(compteur + 1);
  };

  const deleteFruit = (ind) => {
    //copie du tab
    //console.log(ind);
    const fruitCopy = fruits.slice();

    //modification
    const fruitCopyUpdated = fruitCopy.filter((fruit) => fruit.id != ind);
    setFruits(fruitCopyUpdated);
  };

  //render
  return (
    <div>
      <h1>Liste des Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}
            <button onClick={() => deleteFruit(fruit.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
