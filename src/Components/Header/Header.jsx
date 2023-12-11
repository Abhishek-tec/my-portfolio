import React from "react";
import "./Header.css";
import DEV1 from "../../assets/dev1.jpg";
import CV from "../../assets/cv.pdf";

const Header = () => {
  return (
    <header>
      <section className="HeaderSection">
        <div className="leftSection">
          Hlo, I'm Abhishek
          <div>and I am a Frontend Web Developer, and also Web Designer.</div>
          <button className="buttons">
            <a href={CV} download className="btn">
              Downlode CV
            </a>
            <a href="#contact me" className="btn">
              Connect me
            </a>
          </button>
        </div>
        <div className="rightSection">
          <img src={DEV1} alt="" />
        </div>
      </section>
    </header>
  );
};
export default Header;
