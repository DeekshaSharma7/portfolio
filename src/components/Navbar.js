// src/components/Navbar.jsx
import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <img
      src="https://api.logo.com/api/v2/images?logo=lg_zC3qX7V7bhataFH84m&width=128&height=128&fit=contain&margins=24&format=webp&quality=60&u=1730035369472"
      alt="Logo"
      className="navbar-logo"
    />
    <ul>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
