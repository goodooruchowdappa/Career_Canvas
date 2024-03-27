import React from "react";
import "./ContactInfo.css";

const ContactInfo = ({ resumeData, onChange }) => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      {/* Name */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="contact.name" // Make sure this path is correct in your resumeData object
        value={resumeData.contact.name} // Ensure that name is correctly accessed from the state
        onChange={onChange} // Make sure onChange is correctly updating the state
      />
      {/* Email */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="contact.email" // Make sure this path is correct in your resumeData object
        value={resumeData.contact.email} // Ensure that email is correctly accessed from the state
        onChange={onChange} // Make sure onChange is correctly updating the state
      />
      {/* Phone */}
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="contact.phone" // Make sure this path is correct in your resumeData object
        value={resumeData.contact.phone} // Ensure that phone is correctly accessed from the state
        onChange={onChange} // Make sure onChange is correctly updating the state
      />
    </div>
  );
};

export default ContactInfo;
