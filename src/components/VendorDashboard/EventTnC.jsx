import { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceTermsConditions = ({ defaultTnC }) => {
  const [vendorTnC, setVendorTnC] = useState(null);  // Vendor T&C state

  // Handle vendor's T&C upload
  const handleTnCUpload = (e) => {
    setVendorTnC(e.target.files[0]);  // Store uploaded file
  };

  return (
    <div className="p-6 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Service Terms & Conditions</h2>
      
      {/* Upload vendor's T&C */}
      <div className="mb-4 text-sm">
        <label className="block text-gray-700 font-bold mb-2">Upload Your T&C (optional):</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleTnCUpload}
          className="block w-full border border-gray-300 rounded p-2"
        />
      </div>

      {/* Display Vendor's T&C if uploaded, otherwise show TGES T&C */}
      <div className="mb-4">
        <h3 className="text-md font-semibold">Current T&C:</h3>
        {vendorTnC ? (
          <p>Vendor T&C: {vendorTnC.name}</p>
        ) : (
          <div>
            <p className="text-gray-700">TGES Terms & Conditions (Default):</p>
            <div className="flex justify-end">
              <Link to="/event-terms-and-conditions">
                <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View TGES Terms & Conditions
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceTermsConditions;
