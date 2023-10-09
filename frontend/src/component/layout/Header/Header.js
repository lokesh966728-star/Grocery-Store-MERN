import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import searchicon from "../../../images/searchicon.png";
import cart from "../../../images/cart-icon.png";
import login from "../../../images/login.png";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav id="nav">
        <div className="navbar">
          <ul>
            <li className="logo">
              <a href="e-commerce.com">
                <img src={logo} alt="E-commerce" />
              </a>
            </li>

            <li className="search-icon">
              <a href="/search">
                <img src={searchicon} alt="Search" />
              </a>
            </li>

            <li className="login-icon">
              <a href="/login">
                <img src={login} alt="Login/Sign Up" />
              </a>
            </li>

            <li className="cart">
              <a href="/shop">
                <img src={cart} alt="Add to Cart" />
              </a>
            </li>
          </ul>
        </div>
        <div
          className={menuOpen ? "cross" : "menu"}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div>
          <ul className={menuOpen ? "open" : "close"}>
            <li>
              <NavLink
                to="/home"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                {" "}
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                {" "}
                Contact Us{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                {" "}
                About{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                {" "}
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
