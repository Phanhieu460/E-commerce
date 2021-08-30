import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    const res = await commerce.cart.retrieve();
    setCart(res);
  };
  const handleAddCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    //console.log(item);
    setCart(item.cart);
  };
  const hanldeUpdateCartQuantity = async (productId, quantity) => {
    const res = await commerce.cart.update(productId, { quantity });
    setCart(res.cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const res = await commerce.cart.remove(productId);
    setCart(res.cart);
  };
  const handleEmptyCart = async () => {
    const res = await commerce.cart.empty();
    setCart(res.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);
  return (
    <Router>
      <Navbar totalItem={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddCart={handleAddCart} />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            onUpdateCart={hanldeUpdateCartQuantity}
            onRemoveCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
