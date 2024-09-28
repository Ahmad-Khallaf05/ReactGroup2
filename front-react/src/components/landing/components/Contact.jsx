import React, { useState } from 'react';
import axios from 'axios';
import '../css/style.css'; // Keep your custom CSS here

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/contacts', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      setResponseMessage('Message sent successfully!');
      console.log(response.data);

      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch(error => {
      setResponseMessage('Failed to send the message.');
      console.error(error);
    });
  };

  return (
    <div>
      {/* Contact Form Start */}
      <div className="container my-5">
        <h2 className="text-dark mb-4 display-5" style={{ textAlign: 'center' }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
          <br></br>
        {responseMessage && <p className="mt-3">{responseMessage}</p>}
        </form>
      </div>
      {/* Contact Form End */}
    </div>
  );
}
