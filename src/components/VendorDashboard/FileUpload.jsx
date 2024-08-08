import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // Handle file upload logic here
      console.log('Uploading file:', file);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 uppercase">Upload Rate Card</h2>
      <input type="file" onChange={handleFileChange} className="mb-4 rounded-lg border-2 border-solid border-gray-300 bg-gradient-to-r from-blue-300 to-purple-500 py-1 opacity-40 px-4" />
      <button onClick={handleUpload} className="bg-blue-500 text-white py-2 px-4 rounded ml-2">
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
