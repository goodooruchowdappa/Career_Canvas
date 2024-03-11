import React, { useState } from "react";

const Skills = ({ skills, onAddSkill, onRemoveSkill }) => {
  const [newSkill, setNewSkill] = useState("");

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      onAddSkill(newSkill.trim()); // Add trimmed skill to prevent empty skills
      setNewSkill(""); // Clear the input field after adding
    }
  };

  const handleRemoveSkill = (skillIndex) => {
    onRemoveSkill(skillIndex);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => handleRemoveSkill(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newSkill}
        onChange={handleSkillChange}
        placeholder="Add Skill"
      />
      <button onClick={handleAddSkill}>Add</button>
    </div>
  );
};

export default Skills;
