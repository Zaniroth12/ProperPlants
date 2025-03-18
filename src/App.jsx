import { useState } from "react";
import PLANTS from "./data";

export default function App() {
  const plants = useState(PLANTS[0]);
  const [selectedPlant, setSelectedPlant] = useState();
  
  

  return (
  <>
    <header>Proper Plants</header>
    <h1>Plants</h1>
    <section className="plant">
      {plants.image}
      {plants.name}
      <button>Add to cart</button>
    </section>
    <section className="cart">
      <h1>Cart</h1>
      {plants.image}
      {plants.name}
      <button>-</button>
      <p></p>
      <button>+</button>
    </section>
  </>
  );
}
