import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import menuBurger from "../Assets/menu_burger.png";
import menuCloser from "../Assets/close.png";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const [activeMenu, setactiveMenu] = useState(null);
  const { logout, user } = useContext(AuthContext);

  const handleClick = (index) => {
    setactiveMenu(index);
  };

  const { getTotalCartItem } = useContext(ShopContext);

  const menuRef = useRef();

  const menuOpen = () => {
    menuRef.current.style.right = "0";
  };
  const menuClose = () => {
    menuRef.current.style.right = "-250px";
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo_div">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <div className="nav_area" ref={menuRef}>
        <ul>
          <div className="close_nav" onClick={menuClose}>
            <img src={menuCloser} alt="logo" className="menuCloser" />
          </div>
          <li
            className={activeMenu === 0 ? "active" : ""}
            onClick={() => {
              handleClick(0);
            }}
          >
            <Link to="/">Shop</Link>
          </li>
          <li
            className={activeMenu === 1 ? "active" : ""}
            onClick={() => {
              handleClick(1);
            }}
          >
            <Link to="/men">Men</Link>
          </li>
          <li
            className={activeMenu === 2 ? "active" : ""}
            onClick={() => {
              handleClick(2);
            }}
          >
            <Link to="/women">Women</Link>
          </li>
          <li
            className={activeMenu === 3 ? "active" : ""}
            onClick={() => {
              handleClick(3);
            }}
          >
            <Link to="/kid">Kids</Link>
          </li>
        </ul>
      </div>
      <div className="header_log_area">
        {!user && (
          <Link to="/login">
            <button className="log_btn">Login</button>
          </Link>
        )}
        {user && (
          <button className="log_btn" onClick={logout}>
            Logout
          </button>
        )}
        <Link to="/cart">
          <p className="cart_btn">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>{getTotalCartItem()}</span>
          </p>
        </Link>
        <div className="toggle_menu" onClick={menuOpen}>
          <img src={menuBurger} alt="logo" className="menuBurger" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
