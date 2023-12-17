import React from "react";
import "./Experience.css";
import DEV2 from "../../assets/dev2.jpg";
import DEV3 from "../../assets/dev3.jpg";
import DEV4 from "../../assets/dev4.jpg";
import DEV5 from "../../assets/dev5.jpg";
import DEV6 from "../../assets/dev6.jpg";
import DEV7 from "../../assets/dev7.jpg";

const Experience = () => {
  return (
    <>
      <hr />
      <section className="exp_Section">
        <h5>My Skills</h5>
        <h2>My Experience</h2>

        <div className="experience-container">
          <div className="vertical-line">
            <img className="image-top" src={DEV2} alt="" />
            <div className="vertical-text">
              <h3>HTML DEVELOPER</h3>
              <p>
                HTML5 - Editor, Basics, Attributes, Paragraph, Formatting,
                Lists, Tables.
              </p>
            </div>
          </div>
          <div className="vertical-line">
            <img className="image-top" src={DEV3} alt="" />
            <div className="vertical-text">
              <h3>CSS DEVELOPER</h3>
              <p>CSS - Basics, Secletors, properties, Designing, Functions.</p>
            </div>
          </div>
          <div className="vertical-line">
            <img className="image-top" src={DEV4} alt="" />
            <div className="vertical-text">
              <h3>JAVASCRIPT DEVELOPER</h3>
              <p>JS - Array, String, Object, Operator, Set, map.</p>
            </div>
          </div>
          <div className="vertical-line">
            <img className="image-top" src={DEV5} alt="" />
            <div className="vertical-text">
              <h3>REACT DEVELOPER</h3>
              <p>Creat React App, CLI Tools, Components, Rendering, Hooks.</p>
            </div>
          </div>
          <div className="vertical-line">
            <img className="image-top" src={DEV6} alt="" />
            <div className="vertical-text">
              <h3>BOOTSTRAP DEVELOPER</h3>
              <p>Navs, Navbar, Forms, Input, etc.</p>
            </div>
          </div>
          <div className="vertical-line">
            <img className="image-top" src={DEV7} alt="" />
            <div className="vertical-text">
              <h3>TAILWIND CSS</h3>
              <p>
                Core Concepts, Spacing, Sizing, Typography, Backgrounds,Borders,
                etc...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
