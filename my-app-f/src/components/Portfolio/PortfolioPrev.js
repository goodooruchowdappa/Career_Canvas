import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

function PortfolioPrev({ formData }) {
  const [selectedOption, setSelectedOption] = useState(""); // State to store selected option

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDownload = () => {
    const portfolioElement = document.querySelector(".portfolio");
    html2canvas(portfolioElement).then((canvas) => {
      if (selectedOption === "pdf") {
        const pdf = new jsPDF("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        pdf.save("portfolio.pdf");
      } else if (selectedOption === "jpg") {
        const imgData = canvas.toDataURL("image/jpeg");
        saveAs(imgData, "portfolio.jpg");
      }
    });
  };

  return (
    <>
      <h1>My Portfolio Preview</h1>
      <div className="portfolio">
        <div className="preview">
          <div className="photo">
            <img src={formData.photo} alt="PortfolioPhoto" />
          </div>
          <div className="details">
            <h3>{formData.name}</h3>
            <p>Email: {formData.email}</p>
            <h4>Skills:</h4>
            <p>{formData.skills}</p>
            <h4>Experience:</h4>
            <p>{formData.experience}</p>
            <h4>Projects:</h4>
            <p>{formData.projects}</p>
          </div>
        </div>
      </div>
      <div className="options-container">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select Option</option>
          <option value="pdf">Download as PDF</option>
          <option value="jpg">Download as JPG</option>
        </select>
        <br />
        {selectedOption && <button onClick={handleDownload}>Download</button>}
      </div>
    </>
  );
}

export default PortfolioPrev;
