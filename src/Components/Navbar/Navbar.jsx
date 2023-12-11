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
              onClick={() => setactiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setactiveNav("#experience")}
              className={activeNav === "#experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setactiveNav("#services")}
              className={activeNav === "#services" ? "active" : ""}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact me"
              onClick={() => setactiveNav("#contact me")}
              className={activeNav === "#contact me" ? "active" : ""}
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
