import React from "react";

const ContactInfo = ({ resumeData, onChange }) => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="contact.name"
        value={resumeData.contact.name}
        onChange={onChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="contact.email"
        value={resumeData.contact.email}
        onChange={onChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="contact.phone"
        value={resumeData.contact.phone}
        onChange={onChange}
      />
    </div>
  );
};

export default ContactInfo;
