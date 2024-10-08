import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitCabRateCard } from "./../../redux/slices/vendorDashboardSlice"; // Adjust the import path if needed
import userImg from "../../assets/new.jpg";
import VendorSidebar from "./VendorSidebar";

const RateCardForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([
    {
      vehicleType: "",
      fourHours: "",
      eightHours: "",
      twelveHours: "",  // Added for the 12 hrs / 120 kms option
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

    // Enforce the max limit for "outstationKm"
    if (name === "outstationKm" && value > 250) {
      newFormData[index][name] = 250;
    } else {
      newFormData[index][name] = value;
    }

    setFormData(newFormData);
  };

  const handleAddVehicle = () => {
    setFormData([
      ...formData,
      {
        vehicleType: "",
        fourHours: "",
        eightHours: "",
        twelveHours: "",  // Added for the 12 hrs / 120 kms option
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
    // Dispatch submitCabRateCard thunk with the form data
    dispatch(submitCabRateCard(formData))
      .unwrap() // To handle resolved/rejected state directly
      .then((data) => {
        // Handle successful submission, e.g., show a success message or redirect
        console.log("Rate card submitted successfully:", data);
        setFormData([
          {
            vehicleType: "",
            fourHours: "",
            eightHours: "",
            twelveHours: "",  // Reset for the 12 hrs / 120 kms option
            extraHour: "",
            extraKm: "",
            nightCharge: "",
            outstationKm: "",
            driverAllowance: "",
          },
        ]); // Reset form data on success
      })
      .catch((error) => {
        // Handle error, if any
        console.error("Failed to submit rate card:", error);
      });
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
                  <th className="py-2 px-4 border min-w-[100px]">Vehicle Type</th>
                  <th className="py-2 px-4 border min-w-[100px]">4 Hrs / 40 Kms</th>
                  <th className="py-2 px-4 border min-w-[100px]">8 Hrs / 80 Kms</th>
                  <th className="py-2 px-4 border min-w-[100px]">12 Hrs / 120 Kms</th> {/* Added header */}
                  <th className="py-2 px-4 border min-w-[100px]">Extra Hour</th>
                  <th className="py-2 px-4 border min-w-[100px]">Extra Km</th>
                  <th className="py-2 px-4 border min-w-[100px]">Night Charge</th>
                  <th className="py-2 px-4 border min-w-[100px]">Outstation Km</th>
                  <th className="py-2 px-4 border min-w-[100px]">Driver Allowance</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((data, index) => (
                  <tr key={index} className="text-center">
                    {Object.keys(data).map((field) => (
                      <td key={field} className="border p-2">
                        <input
                          type="text" // Keep input type as text
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
      </main>
    </div>
  );
};

export default RateCardForm;
