import React, { useState } from "react";
import NavBar from "../NavBar";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic form validation (optional)
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitted(true);
    setErrorMessage("");

    try {
      // Replace with your actual form submission logic (e.g., email API, form service)
      const response = await fetch("https://your-form-submission-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(
          "An error occurred while submitting the form. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsSubmitted(false); // Reset loading state after submission attempt
    }
  };

  return (
    <>
      <NavBar />
      <section className="contact-form">
        <h1 style={{ color: "#007bff" }}>Contact Us</h1>
        {isSubmitted ? (
          <p className="success-message" style={{ color: "green" }}>
            Thank you for your message! We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" style={{ color: "#007bff" }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ color: "#007bff" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{ color: "#007bff" }}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {errorMessage && (
              <p className="error-message" style={{ color: "red" }}>
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </section>
    </>
  );
};

export default Contact;
