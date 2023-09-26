import { useState } from "react";
import "./styles.css";

function App() {
  //state
  const [compteur, setCompteur] = useState(19);

  //comportement
  const incremente = () => {
    setCompteur(compteur + 1);
  };
  //render
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={incremente}>incrementer</button>
    </div>
  );
}
export default App;
