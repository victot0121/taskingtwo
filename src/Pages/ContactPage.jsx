import React from 'react';
import { useState } from 'react';
import Navbar from '../Components/Navbar'
import '../Pages/ContactPage.css';

 const ContactPage = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (form not yet connected to backend)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <div>
    <Navbar />
    <div className="information">
      <h2 className="h2">Contact Me</h2>
      <form onSubmit={handleSubmit} className="confirm">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="info"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="info-1"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="5"
          className="info-2"
        ></textarea>
        <button
          type="submit"
          className="btn-black"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>

    </>
  );
}

export default ContactPage;