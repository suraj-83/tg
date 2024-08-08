import React, { useState } from "react";
import userImg from "../../assets/new.jpg";
import VendorSidebar from "./VendorSidebar";

const RateCardForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    fourHours: "",
    eightHours: "",
    extraHour: "",
    extraKm: "",
    nightCharge: "",
    outstationKm: "",
    driverAllowance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data:", formData);
  };

  return (
    <div
      className="bg-fixed bg-cover bg-center flex"
      style={{
        backgroundImage: `url('${userImg}')`,
      }}
    >
      <VendorSidebar />
      <main className="min-h-screen w-full overflow-auto">
        <div className="min-h-[90vh] flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="font-extrabold bg-opacity-95 rounded-lg"
          >
            <div class="py-8 px-6 max-w-md bg-white bg-opacity-40 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
              <div>
                <h1 className="text-2xl font-bold text-center mb-4 uppercase">
                  Add Rate Card
                </h1>
              </div>
              {Object.keys(formData).map((field) => (
                <div key={field} className="grid grid-cols-2 mb-4">
                  <label className="block mb-2 capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="border p-2 rounded bg-white text-extrabold text-black opacity-40 w-full"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RateCardForm;
