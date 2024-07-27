import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addBranch } from "../redux/slices/authSlice.js";
import CorporateSidebar from "../components/CorporateDashboard/CorporateSidebar";

function AddBranchForm() {
  const dispatch = useDispatch();
  const initialFormData = {
    name: "",
    address: {
      city: "",
      state: "",
      zipcode: "",
      addLine1: "",
      addLine2: "",
    },
    contactNo: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleAddressChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [id]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await dispatch(addBranch(formData));
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
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  value={formData.address.city}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  value={formData.address.state}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="zipcode"
                  placeholder="ZIP/PIN Code"
                  value={formData.address.zipcode}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="addLine1"
                  placeholder="Address Line 1"
                  value={formData.address.addLine1}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="addLine2"
                  placeholder="Address Line 2"
                  value={formData.address.addLine2}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="contactNo"
                  placeholder="Contact Number"
                  value={formData.contactNo}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      contactNo: e.target.value,
                    }))
                  }
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
