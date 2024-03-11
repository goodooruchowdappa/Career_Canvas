import React from "react";

const Education = ({ educations, onAddEducation, onChange }) => {
  return (
    <div className="education">
      <h2>Education</h2>
      <button onClick={onAddEducation}>Add Education</button>
      {educations.map((education, index) => (
        <div key={index} className="education-item">
          <label htmlFor={`institution-${index}`}>Institution:</label>
          <input
            type="text"
            id={`institution-${index}`}
            name={`education[${index}].institution`}
            value={education.institution}
            onChange={onChange}
          />
          <label htmlFor={`degree-${index}`}>Degree:</label>
          <input
            type="text"
            id={`degree-${index}`}
            name={`education[${index}].degree`}
            value={education.degree}
            onChange={onChange}
          />
          <label htmlFor={`dates-${index}`}>Dates:</label>
          <input
            type="text" // You can customize the input type (e.g., date)
            id={`dates-${index}`}
            name={`education[${index}].dates`}
            value={education.dates}
            onChange={onChange}
          />
          {/* Add more fields for major, coursework, etc. */}
        </div>
      ))}
    </div>
  );
};

export default Education;
