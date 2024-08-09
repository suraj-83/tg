import React, { useState } from "react";
import userImg from "../../assets/new.jpg";
import VendorSidebar from "./VendorSidebar";

const RateCardForm = () => {
  const [formData, setFormData] = useState([
    {
      vehicleType: "",
      fourHours: "",
      eightHours: "",
      extraHour: "",
      extraKm: "",
      nightCharge: "",
      outstationKm: "",
      driverAllowance: "",
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  const handleAddVehicle = () => {
    setFormData([
      ...formData,
      {
        vehicleType: "",
        fourHours: "",
        eightHours: "",
        extraHour: "",
        extraKm: "",
        nightCharge: "",
        outstationKm: "",
        driverAllowance: "",
      },
    ]);
  };

  const handleRemoveVehicle = (index) => {
    const newFormData = formData.filter((_, i) => i !== index);
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <main className="min-h-screen w-full overscroll-y-auto">
        <>
          <form
            onSubmit={handleSubmit}
            className="font-extrabold bg-opacity-95 rounded-lg w-full"
          >
            <div className="p-6 overflow-y-auto bg-white bg-opacity-40 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
              <h1 className="text-2xl font-bold text-center mb-4 uppercase">
                Add Rate Card
              </h1>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2">Vehicle Type</th>
                    <th className="border p-2">4 Hours</th>
                    <th className="border p-2">8 Hours</th>
                    <th className="border p-2">Extra Hour</th>
                    <th className="border p-2">Extra Km</th>
                    <th className="border p-2">Night Charge</th>
                    <th className="border p-2">Outstation Km</th>
                    <th className="border p-2">Driver Allowance</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((data, index) => (
                    <tr key={index} className="text-center">
                      {Object.keys(data).map((field) => (
                        <td key={field} className="border p-2">
                          <input
                            type="text"
                            name={field}
                            value={data[field]}
                            onChange={(e) => handleChange(index, e)}
                            className="border p-2 rounded bg-white text-extrabold text-black opacity-40 w-full"
                          />
                        </td>
                      ))}
                      <td className="border p-2">
                        {formData.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveVehicle(index)}
                            className="bg-red-500 text-white py-2 px-4 rounded"
                          >
                            Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleAddVehicle}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Add Vehicle
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </>
      </main>
    </div>
  );
};

export default RateCardForm;
