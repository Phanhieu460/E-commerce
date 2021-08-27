import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    const res = await commerce.cart.retrieve();
    setCarts(res);
  };
  const handleAddCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    //console.log(item);
    setCarts(item.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(carts);
  return (
    <div className="App">
      <Navbar totalItem={carts.total_items} />
      <Products products={products} onAddCart={handleAddCart} />
    </div>
  );
}

export default App;
