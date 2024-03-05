import React, { useState } from "react";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <h2>Upload PDF or Word File</h2>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          {/* You can use 'selectedFile' here to upload the file or display its details */}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
