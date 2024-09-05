// FullStackPage.js
import React, { useState } from "react";
import FileUpload from "./FileUpload";
import "./FullStackPage.css";


const FullStackPage = () => {
  const [files, setFiles] = useState([]);

  // Function to handle file upload
  const handleUpload = (uploadedFiles) => {
    // Logic to handle the uploaded files
    setFiles(uploadedFiles);
  };

  // Function to handle download
  const handleDownload = () => {
    // Logic to trigger file download
  };

  return (
    <div className="full-stack-page">
      <h1>Full Stack Development</h1>
      <FileUpload onUpload={handleUpload} />
      <div className="uploaded-files">
        <h2>Upload Files:</h2>
        {/* Display uploaded files */}
        {files.map((file, index) => (
          <div className="file-item" key={index}>
            <span>{file.name}</span>
            {/* Add rating options here */}
          </div>
        ))}
        <button className="download-button" onClick={handleDownload}>Download Files</button>
      </div>
    </div>
  );
  
};

export default FullStackPage;
