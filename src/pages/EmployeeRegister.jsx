import React, { useState } from "react";
import {
  zipCodeMapping,
  branchOptions,
  departmentOptions,
  positionOptions,
} from "../data.js";
import { useDispatch } from "react-redux";
import { employeeSignup } from "../redux/slices/authSlice.js";
import CorporateSidebar from "../components/CorporateDashboard/CorporateSidebar";

function EmployeeForm() {
  const dispatch = useDispatch();

  const initialFormData = {
    branchId: "",
    employeeId: "",
    name: "",
    gender: "",
    dob: "",
    age: "",
    zipCode: "",
    country: "",
    city: "",
    state: "",
    email: "",
    password: "",
    countryCode: "",
    contactNo: "",
    branch: "",
    department: "",
    position: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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
    const response = await dispatch(employeeSignup(formData));
    if (response?.payload?.data?.success) {
      alert("Employee added successfully");
    }
    setFormData(initialFormData); // Reset form data to initial state
  };

  return (
    <div className="flex">
      <CorporateSidebar />
      <main className="w-full min-h-screen">
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6">
          <h1 className="pb-9 font-bold text-center uppercase text-2xl underline">
            Employee Sign Up
          </h1>
          <div className="min-h-[90vh]">
            <div className="grid grid-cols-3 gap-3">
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="employeeId"
                  placeholder="Employee ID"
                  value={formData.employeeId}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      employeeId: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="branchId"
                  placeholder="Branch ID"
                  value={formData.branchId}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      branchId: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
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
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      gender: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">-- Select Gender --</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
              </div>
              <div className="mb-4 w-full">
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={(e) => {
                    const today = new Date();
                    const birthDate = new Date(e.target.value);
                    const age = Math.floor(
                      (today - birthDate) / (1000 * 60 * 60 * 24 * 365.25)
                    );
                    setFormData((prevState) => ({
                      ...prevState,
                      dob: e.target.value,
                      age,
                    }));
                  }}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="age"
                  value={formData.age || ""}
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
                  id="country"
                  placeholder="Country"
                  value={formData.country}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  value={formData.state}
                  readOnly
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
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 gap-2 flex w-full">
                <input
                  type="text"
                  maxLength={4}
                  minLength={3}
                  value={formData.countryCode ? `+${formData.countryCode}` : ""}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      countryCode: e.target.value
                        .replace(/^0+/, "")
                        .replace(/\D/g, ""),
                    }))
                  }
                  className="w-28 p-2 border border-gray-300 rounded"
                  placeholder="CountryCode"
                />{" "}
                <input
                  type="text"
                  id="contactNo"
                  maxLength={10}
                  minLength={10}
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
                <select
                  id="branch"
                  value={formData.branch}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      branch: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">-- Select Branch --</option>
                  {branchOptions.map((branch) => (
                    <option key={branch.value} value={branch.value}>
                      {branch.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 w-full">
                <select
                  id="department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      department: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">-- Select Department --</option>
                  {departmentOptions.map((department) => (
                    <option key={department.value} value={department.value}>
                      {department.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 w-full">
                <select
                  id="position"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      position: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">-- Select Position --</option>
                  {positionOptions.map((position) => (
                    <option key={position.value} value={position.value}>
                      {position.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EmployeeForm;
