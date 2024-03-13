import "../style/navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sex Toys Emporium</h1>
        <nav>
          <ul>
            <li>
              <a href="#">SHOP ALL</a>
            </li>
            <li>
              <a href="#">BESTSELLERS</a>
            </li>
            <li>
              <a href="#">NEW</a>
            </li>
            <li>
              <a href="#">DILDOS</a>
            </li>
            <li>
              <a href="#">MALE TOYS</a>
            </li>
            <li>
              <a href="#">BDSM</a>
            </li>
            <li>
              <a href="#">VIBRATORS</a>
            </li>
            <li>
              <a href="#">MORE</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
