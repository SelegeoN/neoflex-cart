import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data";
import { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";

const parseCart = JSON.parse(localStorage.getItem("cart")) || "[]";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState(parseCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((product) => product !== productToRemove));
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <AppRouter
        products={products}
        onAdd={onAdd}
        cartItems={cartItems}
        onRemove={onRemove}
        Remove={removeFromCart}
      ></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
