import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Seller from './Components/Seller/Seller'
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/seller">Seller</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
