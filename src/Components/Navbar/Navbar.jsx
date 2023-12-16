import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#");

  const handleSetActive = (sectionId) => {
    setActiveNavbar(sectionId);
  };

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
              onClick={() => handleSetActive("#")}
              className={activeNavbar === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleSetActive("#about")}
              className={activeNavbar === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => handleSetActive("#experience")}
              className={activeNavbar === "#experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => handleSetActive("#services")}
              className={activeNavbar === "#services" ? "active" : ""}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleSetActive("#contact")}
              className={activeNavbar === "#contact" ? "active" : ""}
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
