import React from "react";
import "./Services.css";
import IMAGE2 from "../../assets/image2.jpg";
import IMAGE3 from "../../assets/image3.jpg";
import IMAGE4 from "../../assets/image4.jpg";

const Services = () => {
  return (
    <section className="services">
      <h5>I Offer This</h5>
      <h2>Services</h2>

      <div className="service-container">
        <article className="services-card">
          <div className="service-title">
            <h3>Forntend Web Developer</h3>
            <img src={IMAGE3} alt="" />
          </div>

          <ul className="service-list">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
          </ul>
        </article>
        <article className="services-card">
          <div className="service-title">
            <h3>Web Designer</h3>
            <img src={IMAGE2} alt="" />
          </div>

          <ul className="service-list">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
          </ul>
        </article>
        <article className="services-card">
          <div className="service-title">
            <h3>Figma Designer</h3>
            <img src={IMAGE4} alt="" />
          </div>

          <ul className="service-list">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis natus autem!
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
