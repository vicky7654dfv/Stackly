import React, { useContext } from "react";
import Style from "./Header.module.css";
import { Link } from "react-router-dom";
import ImgLogo from "../../assets/Header/logo-stackly.jpg";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={Style.headerWrap}
      style={{
        background: theme === "light" ? "#5da6ffff" : "#000",
        color: theme === "light" ? "#000" : "#5da6ffff",
      }}
    >
      <img src={ImgLogo} alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
      <button className={Style.colorButton} onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}
