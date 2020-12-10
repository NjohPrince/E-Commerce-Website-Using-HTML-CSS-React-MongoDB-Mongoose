import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import "./App.css";

const openMenu = () => {
  document.querySelector(".side-bar").classList.add("open");
};

const closeMenu = () => {
  document.querySelector(".side-bar").classList.remove("open");
};

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/" >Vehicles Pro</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a className="login" href="login.html">
              Login
            </a>
            <a className="btn" href="signUp.html">
              Sign Up
            </a>
            <a className="developer" href="developer.html">
              Developer
            </a>
          </div>
        </header>
        <aside className="side-bar">
          <h3>Shopping Categories</h3>
          <button className="close-side-bar" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="index.html">Cars</a>
            </li>
            <li>
              <a href="index.html">Motocycles</a>
            </li>
            <li>
              <a href="index.html">Tractors</a>
            </li>
            <li>
              <a href="index.html">Sports Motocycles</a>
            </li>
          </ul>
          <div className="L-S-D-container">
            <a href="login.html">Login</a>
            <a href="developer.html">Developer</a>
            <a className="btn" href="signUp.html">
              Sign Up
            </a>
          </div>
        </aside>
        <main className="main">
          <div className="products-container">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

            
          </div>
        </main>
        <footer className="footer">
          Best Vehicle Shop | Strawby-Design &copy; | All Rights Reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
