import "./App.css";

import React, { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Cartitem from "./components/Cartitem";

function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Navbar cart={cart} setShow={setShow} />
      {show ? (
        <Body cart={cart} setCart={setCart} />
      ) : (
        <Cartitem cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default App;
