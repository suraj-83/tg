import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { branchSignup } from "../redux/slices/authSlice.js"
import CorporateSidebar from "../components/CorporateDashboard/CorporateSidebar";
import { zipCodeMapping } from "../data";

function AddBranchForm() {
  const dispatch = useDispatch();
  const initialFormData = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    addLine1: "",
    addLine2: "",
    contactNo: "",
    email: "",
    countryCode: "",
    stateCode: "",
    phoneNumber: "",
    landlineCountryCode: "",
    landlineCityCode: "",
    landlineNumber: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const [landlineNumberVisible, setLandLineNumberVisible] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleZipCodeChange = (e) => {
    const zipCode = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      zipcode: zipCode,
      city: zipCodeMapping[zipCode]?.city || "",
      state: zipCodeMapping[zipCode]?.state || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await dispatch(branchSignup(formData))
    if (response?.payload?.data?.success) {
      alert("Branch added successfully!");
    }
    setFormData(initialFormData); // Reset form data to initial state
  };

  return (
    <div className="flex">
      <CorporateSidebar />
      <main className="w-full">
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6">
          <h1 className="pb-9 font-bold text-center uppercase text-2xl underline">
            Add Branch
          </h1>
          <div className="min-h-[90vh]">
            <div className="grid grid-cols-3 gap-3">
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Branch Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="zipcode"
                  placeholder="ZIP/PIN Code"
                  value={formData.zipcode}
                  onChange={handleZipCodeChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="addLine1"
                  placeholder="Address Line 1"
                  value={formData.addLine1}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="addLine2"
                  placeholder="Address Line 2"
                  value={formData.addLine2}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center mb-4 w-full">
                <input
                  type="checkbox"
                  checked={phoneNumberVisible}
                  onChange={() => setPhoneNumberVisible((prevVisible) => !prevVisible)}
                  className="mr-2"
                />
                Mobile Number
                <input
                  type="checkbox"
                  checked={landlineNumberVisible}
                  onChange={() => setLandLineNumberVisible((prevVisible) => !prevVisible)}
                  className="ml-4 mr-2"
                />
                Landline Number
              </div>
              {phoneNumberVisible && (
                <div className="mb-4 w-full flex flex-wrap">
                  <div className="flex mt-2 w-full">
                    <input
                      type="text"
                      id="countryCode"
                      maxLength={4}
                      minLength={3}
                      value={formData.countryCode ? `+${formData.countryCode}` : ""}
                      onChange={handleInputChange}
                      className="w-28 p-2 border border-gray-300 rounded"
                      placeholder="Country Code"
                    />
                    <input
                      type="text"
                      id="stateCode"
                      maxLength={2}
                      minLength={2}
                      value={formData.stateCode || ""}
                      onChange={handleInputChange}
                      className="w-28 p-2 border border-gray-300 rounded ml-2 mr-2"
                      placeholder="State Code"
                    />
                    <input
                      type="text"
                      id="phoneNumber"
                      maxLength={10}
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              )}
              {landlineNumberVisible && (
                <div className="mb-4 w-full flex mt-2">
                  <input
                    type="text"
                    id="landlineCountryCode"
                    maxLength={4}
                    minLength={3}
                    value={formData.landlineCountryCode ? `+${formData.landlineCountryCode}` : ""}
                    onChange={handleInputChange}
                    className="w-20 p-2 border border-gray-300 rounded mr-2"
                    placeholder="Country Code"
                    aria-label="Country Code"
                  />
                  <input
                    type="text"
                    id="landlineCityCode"
                    maxLength={4}
                    minLength={3}
                    value={formData.landlineCityCode}
                    onChange={handleInputChange}
                    className="w-20 p-2 border border-gray-300 rounded mr-2"
                    placeholder="City Code"
                  />
                  <input
                    type="text"
                    id="landlineNumber"
                    maxLength={7}
                    minLength={6}
                    value={formData.landlineNumber}
                    onChange={handleInputChange}
                    className="w-40 p-2 border border-gray-300 rounded"
                    placeholder="Landline Number"
                  />
                </div>
              )}
              <div className="mb-4 w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      email: e.target.value.replace(/[^\w.@+-]/g, ""),
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Add Branch
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddBranchForm;
