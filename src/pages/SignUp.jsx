import React, { useState } from "react";
import { zipCodeMapping } from "../data.js";
import userImg from "../assets/userImg.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { retailSignup } from "../redux/slices/authSlice.js";

function RetailForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormData = {
    firstName: "",
    secondName: "",
    lastName: "",
    country: "",
    email: "",
    zipCode: "",
    state: "",
    city: "",
    countryCode: "",
    phoneNumber1: "",
    phoneNumber2: "",
    username: "",
    password: "",
    residentialAddress: "",
    gender: "",
    howDidYouKnow: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.countryCode.trim()) {
      newErrors.countryCode = "Country code is required";
    }
    if (!formData.phoneNumber1.trim()) {
      newErrors.phoneNumber1 = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber1)) {
      newErrors.phoneNumber1 = "Invalid phone number format";
    }
    if (!formData.phoneNumber2.trim()) {
      newErrors.phoneNumber2 = "Alternate phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber2)) {
      newErrors.phoneNumber2 = "Invalid alternate phone number format";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }
    if (!formData.residentialAddress.trim()) {
      newErrors.residentialAddress = "Residential address is required";
    }
    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleZipCodeChange = (e) => {
    const zipCode = e.target.value;
    const mappedData = zipCodeMapping[zipCode];
    if (mappedData) {
      setFormData((prevState) => ({
        ...prevState,
        zipCode: zipCode,
        country: mappedData.country || "",
        city: mappedData.city || "",
        state: mappedData.state || "",
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        zipCode: zipCode,
        country: "",
        city: "",
        state: "",
      }));
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      password: newPassword,
    }));
    setIsValid(validatePassword(newPassword));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const response = await dispatch(retailSignup(formData));

      if (response?.payload?.data?.success) {
        navigate("/main-login");
      }

      console.log(JSON.stringify(formData, null, 4)); // Log the consolidated form data to the console

      setFormData(initialFormData); // Reset form data to initial state
    }
  };

  return (
    <div className="h-screen w-full mx-auto flex">
      <div className="w-1/2 h-screen hidden md:block">
        <img src={userImg} alt="" className="bg-contain h-full" />
      </div>
      <div className="w-full lg:w-1/2 h-screen overflow-y-scroll">
        <form onSubmit={handleSubmit} className="p-6">
          <h1 className="pb-11 font-bold text-center uppercase text-2xl underline">
            Retail Sign Up
          </h1>

          <div className="min-h-[90vh]">
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
              {/* First Name */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      firstName: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.firstName && (
                  <p className="text-red-500 mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Second Name */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="secondName"
                  placeholder="Second Name"
                  value={formData.secondName}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      secondName: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.secondName && (
                  <p className="text-red-500 mt-1">{errors.secondName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      lastName: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.lastName && (
                  <p className="text-red-500 mt-1">{errors.lastName}</p>
                )}
              </div>

              {/* Gender */}
              <div className="mb-4 w-full">
                <select
                  id="gender"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      gender: e.target.value,
                    }))
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 mt-1">{errors.gender}</p>
                )}
              </div>

              {/* Email */}
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
                {errors.email && (
                  <p className="text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Residential Address */}
              <div className="mb-4 w-full">
                <textarea
                  id="residentialAddress"
                  placeholder="Residential Address"
                  value={formData.residentialAddress}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      residentialAddress: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.residentialAddress && (
                  <p className="text-red-500 mt-1">
                    {errors.residentialAddress}
                  </p>
                )}
              </div>

              {/* Country */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      country: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.country && (
                  <p className="text-red-500 mt-1">{errors.country}</p>
                )}
              </div>

              {/* ZipCode */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleZipCodeChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.zipCode && (
                  <p className="text-red-500 mt-1">{errors.zipCode}</p>
                )}
              </div>

              {/* State */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      state: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.state && (
                  <p className="text-red-500 mt-1">{errors.state}</p>
                )}
              </div>

              {/* City */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      city: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.city && (
                  <p className="text-red-500 mt-1">{errors.city}</p>
                )}
              </div>
              <div className="mb-4">              
                  {/* Country Code */}
                  <input
                    type="text"
                    maxLength={4}
                    minLength={3}
                    value={formData.countryCode ? `+${formData.countryCode}` : ""}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        countryCode: e.target.value
                          .replace(/^0+/, "") // Removes leading zeros
                          .replace(/\D/g, ""), // Removes non-digit characters
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded mr-2"
                    placeholder="Country Code"
                  />
                  </div>
                  <div className="mb-4">
                  {/* Phone Number 1 */}
                  <input
                    type="text"
                    maxLength={10}
                    value={formData.phoneNumber1 || ""}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        phoneNumber1: e.target.value.replace(/\D/g, ""), // Removes non-digit characters
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Phone Number"
                  />                
              </div>
              {/* Alternate Phone Number */}
              <div className="mb-4">
                <input
                  type="text"
                  maxLength={10}
                  value={formData.phoneNumber2}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      phoneNumber2: e.target.value.replace(/\D/g, ""), // Removes non-digit characters
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Alternate Phone Number"
                />
              </div>

              {/* Username */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.username && (
                  <p className="text-red-500 mt-1">{errors.username}</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4 w-full">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handlePasswordChange}
                  className={`w-full p-2 border ${
                    isValid ? "border-gray-300" : "border-red-500"
                  } rounded`}
                />
                {errors.password && (
                  <p className="text-red-500 mt-1">{errors.password}</p>
                )}
              </div>

              {/* How Did You Know */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="howDidYouKnow"
                  placeholder="How Did You Know?"
                  value={formData.howDidYouKnow}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      howDidYouKnow: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 text-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RetailForm;
