import React from "react";

const Experience = ({ experiences, onAddExperience, onChange }) => {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <button onClick={onAddExperience}>Add Experience</button>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <label htmlFor={`company-${index}`}>Company:</label>
          <input
            type="text"
            id={`company-${index}`}
            name={`experience[${index}].company`}
            value={experience.company}
            onChange={onChange}
          />
          <label htmlFor={`role-${index}`}>Role:</label>
          <input
            type="text"
            id={`role-${index}`}
            name={`experience[${index}].role`}
            value={experience.role}
            onChange={onChange}
          />
          <label htmlFor={`dates-${index}`}>Dates:</label>
          <input
            type="text" // You can customize the input type (e.g., date)
            id={`dates-${index}`}
            name={`experience[${index}].dates`}
            value={experience.dates}
            onChange={onChange}
          />
          {/* Add more fields for responsibilities, achievements, etc. */}
        </div>
      ))}
    </div>
  );
};

export default Experience;
