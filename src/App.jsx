import { useState } from "react";
import PLANTS from "./data";

import Cart from "./cart/Cart";
import Plants from "./plants/Plants";

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      );
    } else {
      const item = {...plant, quantity: 1};
      setCart([...cart, item]);
    }
  };

  cosnt removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) => 
          item.id === itemToRemove.id
            ? {...item, quantity: item.quantity - 1}
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
  <>
    <header>Proper Plants</header>
    <h1>Plants</h1>
    <main>
      <Plants plants={PLANTS} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </main>
  </>
  );
}
