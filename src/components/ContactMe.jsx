import { useState } from "react";
import {Container} from "react-bootstrap";
import "../styles/Contact.css";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const errors = {
      name: !formData.name.trim(),
      email: !validateEmail(formData.email),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
    };

    setFormErrors(errors);

    // Check if there are any errors
    if (Object.values(errors).some(Boolean)) {
      // Handle validation errors
      return;
    }

    // Form is valid, send the email (You might need a backend for this)

    // Display a success message or redirect to a thank you page
    alert("Message sent successfully!");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false, // Clear error when user types
    }));
  };

  return (
    <Container className="Contact_Me">
    <div className="contact-me-section" id="contact-me">
      <div className="text-center mb-4">
        <h1 className="section-header">Contact Me</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control ${formErrors.name ? "error" : ""}`}
              required
            />
          </div>
          <div className="form-group">
            <label>Your Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${formErrors.email ? "error" : ""}`}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Your Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`form-control ${formErrors.subject ? "error" : ""}`}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Your Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${formErrors.message ? "error" : ""}`}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
    </Container>
  );
}

export default ContactMe;
