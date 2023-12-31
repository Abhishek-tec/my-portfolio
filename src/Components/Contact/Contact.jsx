import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ognsswp",
        "template_a1mavne",
        form.current,
        "Y9gxYcnRpYwN213pn"
      )
  };
  return (
    <section className="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea className="msg" name="message" />
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </section>
  );
};
export default Contact;
