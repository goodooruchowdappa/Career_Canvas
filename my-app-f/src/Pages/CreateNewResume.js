import React, { useState } from "react";
import ContactInfo from "../components/ContactInfo";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";


// import Templates from "./Templates";

function CreateNewResume() {
  const [resumeData, setResumeData] = useState({
    contact: {
      name: "",
      email: "",
      phone: "",
    },
    experience: [],
    education: [],
    skills: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value, // Update nested object based on event target name
    }));
  };

  const addExperience = () => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { company: "", role: "", dates: "" },
      ],
    }));
  };

  const addEducation = () => {
    setResumeData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { institution: "", degree: "", dates: "" },
      ],
    }));
  };

  const addSkill = (skill) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skill],
    }));
  };

  const removeSkill = (skillIndex) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, index) => index !== skillIndex),
    }));
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <ContactInfo resumeData={resumeData} onChange={handleInputChange} />
      <Experience
        experiences={resumeData.experience}
        onAddExperience={addExperience}
        onChange={handleInputChange}
      />
      <Education
        educations={resumeData.education}
        onAddEducation={addEducation}
        onChange={handleInputChange}
      />
      <Skills
        skills={resumeData.skills}
        onAddSkill={addSkill}
        onRemoveSkill={removeSkill}
      />
      {/* Add more sections (Projects, etc.) */}
    </div>
  );
  // <>
  //   <Templates />
  // </>;
}

export default CreateNewResume;
