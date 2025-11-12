import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "message") setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}: ${message}`);
    setName("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Get In Touch</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>

      <div className="contact-container">
        {/* Left side - Contact info */}
        <div className="contact-info">
          <div className="contact-item">
            <MdEmail size={30} color="#38bdf8" />
            <p>rishivardan@gmail.com</p>
          </div>
          <div className="contact-item">
            <MdPhone size={30} color="#38bdf8" />
            <p>+94 77 878 2774</p>
          </div>
          <div className="contact-item">
            <MdLocationOn size={30} color="#38bdf8" />
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>

        {/* Right side - Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
