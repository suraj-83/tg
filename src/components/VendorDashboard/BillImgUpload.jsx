import { useState } from "react";

const BillUpload = () => {
  const [billImages, setBillImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setBillImages(files);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold uppercase mb-4">Upload Bill Images</h2>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageUpload}
        className="block w-full border border-gray-300 rounded p-2"
      />
      <div className="mt-4">
        <h3 className="text-sm font-semibold whitespace-nowrap">Uploaded Images:</h3>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {billImages.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Bill ${index + 1}`}
              className="w-full h-32 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillUpload;
