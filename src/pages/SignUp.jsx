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
  const [isValid, setIsValid] = useState(true);

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

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
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

    const response = await dispatch(retailSignup(formData));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/retail-login");
    }

    console.log(JSON.stringify(formData, null, 4)); // Log the consolidated form data to the console

    setFormData(initialFormData); // Reset form data to initial state
  };

  return (
    <>
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
              <div className="flex flex-wrap gap-3">
                {/* First Name */}
                <div className="mb-4">
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
                </div>
                {/* Second Name */}
                <div className="mb-4">
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
                </div>
                {/* Last Name */}
                <div className="mb-4">
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
                </div>
                {/* Gender */}
                <div className="mb-4">
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
                </div>
                {/* Email */}
                <div className="mb-4">
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
                {/* Residential Address */}
                <div className="mb-4">
                  <input
                    type="text"
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
                </div>
                {/* Zip/Post Code */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="ZIP/PIN code"
                    value={formData.zipCode}
                    onChange={handleZipCodeChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                {/* City */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="city"
                    placeholder="City"
                    value={formData.city}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                {/* State */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="state"
                    placeholder="State"
                    value={formData.state}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                {/* Country */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="country"
                    placeholder="Country"
                    value={formData.country}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                {/* Contact Number */}
                <div className="mb-4">
                  <div className="flex">
                    <input
                      type="text"
                      maxLength={4}
                      minLength={3}
                      value={
                        formData.countryCode ? `+${formData.countryCode}` : ""
                      }
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          countryCode: e.target.value
                            .replace(/^0+/, "")
                            .replace(/\D/g, ""),
                        }))
                      }
                      className="w-28 p-2 border border-gray-300 rounded mr-2"
                      placeholder="Country Code"
                    />
                    <input
                      type="text"
                      maxLength={10}
                      value={formData.phoneNumber1 || ""}
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          phoneNumber1: e.target.value.replace(/\D/g, ""),
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Phone Number"
                    />
                  </div>
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
                        phoneNumber2: e.target.value.replace(/\D/g, ""),
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Alternate Phone Number"
                  />
                </div>
                {/* Username and Password */}
                <div className="mb-4 w-full flex items-center gap-4">
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
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handlePasswordChange}
                    className="p-2 border border-gray-300 rounded"
                  />
                  {!isValid && (
                    <p className="text-red-500 mt-1">
                      Password must be at least 8 characters long and contain at
                      least one uppercase letter, one lowercase letter, one
                      number, and one special character
                    </p>
                  )}
                </div>
                {/* How did you come to know about TGES */}
                <div className="mb-4 w-full pr-px">
                  <textarea
                    id="howDidYouKnow"
                    placeholder="How did you come to know about TGES ?"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    value={formData.howDidYouKnow}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        howDidYouKnow: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  SignUp
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RetailForm;
