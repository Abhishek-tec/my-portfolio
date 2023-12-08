import React from "react";
import "./Contact.css";
import emailjs from "react";
import form from "react";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    );
    e.target.reset();
  };
  return (
    <section className="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact-conainer">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
