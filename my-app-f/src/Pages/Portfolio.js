// App.js
import React, { useState } from "react";
import "./portfolio.css";
import PortfolioPrev from "../components/Portfolio/PortfolioPrev";
import NavBar from "../NavBar";

function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    projects: "",
    photo: "", // Add photo field to the initial state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevState) => ({
        ...prevState,
        photo: reader.result, // Save photo data as base64 string
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      <NavBar />
      <h1>Portfolio Generator</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Skills:</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Experience:</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Projects:</label>
            <textarea
              name="projects"
              value={formData.projects}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Upload Photo:</label>
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </div>
          <button type="submit">Generate Portfolio</button>
        </form>
      </div>
      <PortfolioPrev formData={formData} />
    </div>
  );
}

export default Portfolio;
