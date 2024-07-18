import React, { useState } from "react";
import {
  zipCodeMapping,
  branchOptions,
  departmentOptions,
  positionOptions,
} from "../data.js";
import empImg from "../assets/img.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { employeeSignup } from "../redux/slices/authSlice.js";

function EmployeeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormData = {
    empId: "",
    name: "",
    gender: "",
    dob: "",
    zipCode: "",
    country: "",
    city: "",
    state: "",
    email: "",
    password: "",
    phoneNo: "",
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
      navigate("/employee-login");
    }
    setFormData(initialFormData); // Reset form data to initial state
  };

  return (
    <div className="h-screen w-full mx-auto flex">
      <div className="w-1/2 h-screen hidden md:block">
        <img src={empImg} alt="" className="bg-contain h-full" />
      </div>
      <div className="w-full lg:w-1/2 min-h-screen overflow-y-scroll">
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6">
          <h1 className="pb-9 font-bold text-center uppercase text-2xl underline">
            Employee Sign Up
          </h1>
          <div className="min-h-[90vh]">
            <div className="grid grid-cols-3 gap-3">
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="empId"
                  placeholder="Employee ID"
                  value={formData.empId}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      empId: e.target.value,
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
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      dob: e.target.value,
                    }))
                  }
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
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="phoneNo"
                  placeholder="Phone Number"
                  value={formData.phoneNo}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      phoneNo: e.target.value,
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
      </div>
    </div>
  );
}

export default EmployeeForm;
