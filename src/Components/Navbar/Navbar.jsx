import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setactiveNav] = useState("#");

  return (
    <nav>
      <div className="left">
        <h2>Abhishek's Portfolio</h2>
      </div>
      <div className="right">
        <ul>
          <li>
            <a
              href="#"
              onClick={() => setactiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setactiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setactiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setactiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact me"
              onClick={() => setactiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
