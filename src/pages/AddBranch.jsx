import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { branchSignup } from "../redux/slices/authSlice.js";
import CorporateSidebar from "../components/CorporateDashboard/CorporateSidebar";
import { zipCodeMapping } from "../data";

function AddBranchForm() {
  const dispatch = useDispatch();
  const initialFormData = {
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    countryCode: "",
    contactNo: "",
    landlineCountryCode: "",
    landlineCityCode: "",
    landlineNumber: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialFormData);

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
      zipCode: zipCode,
      country: zipCodeMapping[zipCode]?.country || "",
      city: zipCodeMapping[zipCode]?.city || "",
      state: zipCodeMapping[zipCode]?.state || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await dispatch(branchSignup(formData));
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
          <div className="min-h-screen">
            <div className="grid grid-cols-4 gap-3">
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
              <div className="mb-4">
                    <input
                      type="text"
                      id="country"
                      placeholder="Country"
                      value={formData.country || "India"}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="zipCode"
                  placeholder="ZIP/PIN Code"
                  value={formData.zipCode}
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
                  id="address1"
                  placeholder="Address Line 1"
                  value={formData.address1}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="address2"
                  placeholder="Address Line 2"
                  value={formData.address2}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
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
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="contactNo"
                  maxLength={10}
                  minLength={10}
                  placeholder="Contact Number"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 flex gap-2">
                <input
                  type="text"
                  maxLength={4}
                  minLength={1}
                  value={
                    formData.landlineCountryCode
                      ? `+${formData.landlineCountryCode}`
                      : ""
                  }
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      landlineCountryCode: e.target.value
                        .replace(/^0+/, "")
                        .replace(/\D/g, ""),
                    }))
                  }
                  className="w-28 text-sm text-center p-2 border border-gray-300 rounded "
                  placeholder="Country Code"
                  style={{ color: "gray" }}
                  aria-label="CountryCode"
                />
                <input
                  type="text"
                  id="landlineCityCode"
                  maxLength={4}
                  minLength={3}
                  value={formData.landlineCityCode}
                  onChange={handleInputChange}
                  className="w-24 text-center text-sm p-2 border border-gray-300 rounded"
                  placeholder="City Code"
                />
                <input
                  type="text"
                  id="landlineNumber"
                  maxLength={7}
                  minLength={6}
                  value={formData.landlineNumber}
                  onChange={handleInputChange}
                  className="w-40 p-2 text-sm border border-gray-300 rounded"
                  placeholder="Landline Number"
                />
              </div>
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
        </form>
      </main>
    </div>
  );
}

export default AddBranchForm;
