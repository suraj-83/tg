import React, { useState } from "react";
import Select from "react-select";
import { zipCodeMapping, industryOptions } from "../data.js";
import corprateImg from "../assets/img.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { corporateSignup } from "../redux/slices/authSlice.js";
import { FaPlus } from "react-icons/fa";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormData = {
    industry: "",
    companyName: "",
    zipCode: "",
    country: "",
    city: "",
    state: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    phoneNumber: "",
    countryCode: "",
    landlineNumber: "",
    landlineCountryCode: "",
    landlineCityCode: "",
    contactDepartment: "",
    contactPersonFirstName: "",
    contactPersonSecondName: "",
    contactPersonLastName: "",
    contactPersonGender: "",
    email: "",
    password: "",
    website: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const [landlineNumberVisible, setLandLineNumberVisible] = useState(false);
  const [currentAddressStep, setCurrentAddressStep] = useState(1);

  const handleNextAddress = () => {
    setCurrentAddressStep((prevStep) => prevStep + 1);
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

    const isAllFieldsFilled = Object.entries(formData)
  .filter(
    ([key]) =>
      !["address2", "address3", "address4", "contactPersonSecondName"].includes(
        key
      )
  )
  .every(([, value]) => value !== "") && formData.phoneNumber !== "" && formData.landlineNumber !== "";

// Now you can run the signup logic if fields are filled
if (isAllFieldsFilled) {
  console.log(formData);

  const response = await dispatch(corporateSignup(formData));

  if (response?.payload?.data?.success) {
    navigate("/main-login");
  }
  setFormData(initialFormData); // Reset form data to initial state
} else {
  alert("Please fill all the required fields");
}

  };

  return (
    <>
      {/* <div className='sticky top-0'>            <Header/></div> */}

      <div className="h-screen w-full mx-auto flex">
        <div className="w-1/2 h-screen hidden md:block">
          <img src={corprateImg} alt="" className="bg-contain h-full" />
        </div>
        <div className="w-full  lg:w-1/2 h-screen overflow-y-scroll">
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 ">
            <h1 className="pb-9 font-bold  text-center uppercase text-2xl underline"><a href="/">
              Corporate Sign Up
            </a>
            </h1>

            <div className=" min-h-[90vh]">
              <div className="flex flex-wrap sm:flex-wrap gap-3">
                <div className="flex justify-between w-full gap-3">
                  <div className="mb-4">
                    {/* <label htmlFor="country" className="block mb-2 font-semibold">Country</label> */}
                    <input
                      type="text"
                      id="country"
                      placeholder="Country"
                      value={formData.country || "India"}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  {/* Company Name */}
                  <div className="mb-4">
                    {/* <label htmlFor="companyName" className="block mb-2 font-semibold">Company Name</label> */}
                    <input
                      type="text"
                      id="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          companyName: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4 w-[35vh]">
                    {/* <label htmlFor="industry" className="block mb-2 font-semibold">Type of Industry/Business</label> */}
                    <Select
                      id="industry"
                      placeholder="Type of Industry/Business"
                      value={industryOptions.find(
                        (option) => option.value === formData.industry
                      )}
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          industry: e.value,
                        }))
                      }
                      options={industryOptions}
                      className="rounded"
                    />
                  </div>
                </div>

                {/* Address 1 */}
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                  {currentAddressStep >= 1 && (
                    <div className="mb-4 flex gap-2">
                      <input
                        type="text"
                        id="address1"
                        placeholder="Address-1"
                        value={formData.address1}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            address1: e.target.value,
                          }))
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                      {formData.address1 && currentAddressStep === 1 && (
                        <button
                          type="button"
                          className="p-2 bg-blue-500 text-white rounded shadow-md hover:shadow-lg transition duration-200"
                          onClick={handleNextAddress}
                        >
                          <FaPlus />
                        </button>
                      )}
                    </div>
                  )}

                  {currentAddressStep >= 2 && formData.address1 && (
                    <div className="mb-4 flex gap-2">
                      <input
                        type="text"
                        id="address2"
                        placeholder="Address-2"
                        value={formData.address2}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            address2: e.target.value,
                          }))
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                      {formData.address2 && currentAddressStep === 2 && (
                        <button
                          type="button"
                          className="p-2 bg-blue-500 text-white rounded"
                          onClick={handleNextAddress}
                        >
                          <FaPlus />
                        </button>
                      )}
                    </div>
                  )}

                  {currentAddressStep >= 3 && formData.address2 && (
                    <div className="mb-4 flex gap-2">
                      <input
                        type="text"
                        id="address3"
                        placeholder="Address-3"
                        value={formData.address3}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            address3: e.target.value,
                          }))
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                      {formData.address3 && currentAddressStep === 3 && (
                        <button
                          type="button"
                          className="p-2 bg-blue-500 text-white rounded"
                          onClick={handleNextAddress}
                        >
                          <FaPlus />
                        </button>
                      )}
                    </div>
                  )}

                  {currentAddressStep >= 4 && formData.address3 && (
                    <div className="mb-4">
                      <input
                        type="text"
                        id="address4"
                        placeholder="Address-4"
                        value={formData.address4}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            address4: e.target.value,
                          }))
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 w-full">
                {/* ZIP Code */}
                <div className="mb-4 w-full">
                  {/* <label htmlFor="zipCode" className="block mb-2 font-semibold">ZIP Code</label> */}
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="ZIP/PIN Code"
                    value={formData.zipCode}
                    onChange={handleZipCodeChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                {/* City */}
                <div className="mb-4 w-full">
                  {/* <label htmlFor="city" className="block mb-2 font-semibold">City</label> */}
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
                <div className="mb-4 w-full">
                  {/* <label htmlFor="state" className="block mb-2 font-semibold">State</label> */}
                  <input
                    type="text"
                    id="state"
                    placeholder="State"
                    value={formData.state}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-wrap">
                {/* Contact Person */}
                <div className="mb-4">
                  <p className="w-full py-2 font-semibold">Contact Details</p>
                  <div className="flex gap-4 pb-4">
                    <select
                      value={
                        formData.contactDepartment
                          ? formData.contactDepartment.title
                          : ""
                      }
                      onChange={(e) => {
                        if (e.target.value === "Other") {
                          setFormData((prevState) => ({
                            ...prevState,
                            contactDepartment: {
                              ...prevState.contactDepartment,
                              title: e.target.value,
                              otherTitle: "",
                            },
                          }));
                        } else {
                          setFormData((prevState) => ({
                            ...prevState,
                            contactDepartment: {
                              ...prevState.contactDepartment,
                              title: e.target.value,
                            },
                          }));
                        }
                      }}
                      className=" p-2 border border-gray-300 rounded"
                    >
                      <option value="">-- Select Department --</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Hr/Human Resources">
                        Hr/Human Resources
                      </option>
                      <option value="Finance">Finance</option>
                      <option value="Travel Desk">Travel Desk</option>
                      <option value="Other">Other</option>
                    </select>
                    {formData.contactDepartment &&
                      formData.contactDepartment.title === "Other" && (
                        <input
                          type="text"
                          placeholder="Other Department"
                          value={formData.contactDepartment.otherTitle}
                          onChange={(e) =>
                            setFormData((prevState) => ({
                              ...prevState,
                              contactDepartment: {
                                ...prevState.contactDepartment,
                                otherTitle: e.target.value,
                              },
                            }))
                          }
                          className=" p-2 border border-gray-300 rounded mt-2"
                        />
                      )}
                  </div>
                  <div className="grid grid-cols-3 gap-4 justify-between w-full">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.contactPersonFirstName || ""}
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          contactPersonFirstName: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Second Name"
                      value={formData.contactPersonSecondName || ""}
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          contactPersonSecondName: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.contactPersonLastName || ""}
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          contactPersonLastName: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                {/* Gender */}
                <div className="mb-4">
                  <fieldset>
                    {/* <legend className="block mb-2 font-semibold">Gender</legend> */}
                    <div className="flex items-center justify-center gap-8">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="contactPersonGender"
                          id="gender-male"
                          value="male"
                          checked={formData.contactPersonGender === "male"}
                          onChange={(e) =>
                            setFormData((prevState) => ({
                              ...prevState,
                              contactPersonGender: e.target.value,
                            }))
                          }
                        />
                        <label htmlFor="gender-male" className="ml-2">
                          Male
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="contactPersonGender"
                          id="gender-female"
                          value="female"
                          checked={formData.contactPersonGender === "female"}
                          onChange={(e) =>
                            setFormData((prevState) => ({
                              ...prevState,
                              contactPersonGender: e.target.value,
                            }))
                          }
                        />
                        <label htmlFor="gender-female" className="ml-2">
                          Female
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="contactPersonGender"
                          id="gender-transgender"
                          value="transgender"
                          checked={
                            formData.contactPersonGender === "transgender"
                          }
                          onChange={(e) =>
                            setFormData((prevState) => ({
                              ...prevState,
                              contactPersonGender: e.target.value,
                            }))
                          }
                        />
                        <label htmlFor="gender-transgender" className="ml-2">
                          Transgender
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              {/* Phone Number */}
              <>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={phoneNumberVisible}
                      onChange={() =>
                        setPhoneNumberVisible((prevVisible) => !prevVisible)
                      }
                      className="mr-2"
                    />
                    Mobile Number
                    <input
                      type="checkbox"
                      checked={formData.landlineNumberVisible}
                      onChange={() =>
                        setLandLineNumberVisible((prevVisible) => !prevVisible)
                      }
                      className="ml-4 mr-2"
                    />
                    Landline Number
                  </div>
                  {phoneNumberVisible && (
                    <div className="flex flex-wrap">
                      <div className="flex gap-2 mt-2">
                        <input
                          type="text"
                          maxLength={4}
                          minLength={3}
                          value={
                            formData.countryCode
                              ? `+${formData.countryCode}`
                              : ""
                          }
                          onChange={(e) =>
                            setFormData((prevState) => ({
                              ...prevState,
                              countryCode: e.target.value
                                .replace(/^0+/, "")
                                .replace(/\D/g, ""),
                            }))
                          }
                          className="w-32 p-2 border border-gray-300 rounded"
                          placeholder="Country Code"
                        />
                        <input
                          type="text"
                          maxLength={10}
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData((prevState) => ({
                              ...prevState,
                              phoneNumber: e.target.value,
                            }))
                          }
                          className="w-40 p-2 border border-gray-300 rounded"
                          placeholder="Phone Number"
                        />
                        {formData.phoneNumber.length < 10 && (
                          <p className="text-red-600 text-sm">
                            Please enter a valid phone number.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  {landlineNumberVisible && (
                    <div className="flex flex-wrap mt-2">
                      <input
                        type="text"
                        maxLength={4}
                        minLength={3}
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
                        className="w-32 p-2 border border-gray-300 rounded mr-2"
                        placeholder="CountryCode"
                        style={{ color: "gray" }}
                        aria-label="Country Code"
                      />

                      <input
                        type="text"
                        maxLength={4}
                        minLength={3}
                        value={formData.landlineCityCode}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            landlineCityCode: e.target.value,
                          }))
                        }
                        className="w-28 p-2 border border-gray-300 rounded mr-2"
                        placeholder="City Code"
                      />
                      <input
                        type="text"
                        maxLength={7}
                        minLength={6}
                        value={formData.landlineNumber}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            landlineNumber: e.target.value,
                          }))
                        }
                        className="w-40 p-2 border border-gray-300 rounded"
                        placeholder="Landline Number"
                      />
                      {formData.landlineNumber.length < 7 && (
                        <p className="text-red-500 text-sm">
                          Landline Number should have at least 7 digits
                        </p>
                      )}
                    </div>
                  )}
                </div>
                {/* Email */}
              </>

              <div className="mb-4 flex items-center gap-4 w-full">
                {/* <label htmlFor="email" className="block mb-2 font-semibold">Email</label> */}
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
                <input
                  type="text"
                  id="website"
                  placeholder="Website Adress"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      website: e.target.value.replace(/[^a-zA-Z0-9.-]/g, ""),
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              {/* Industry/Business Type */}

              {/* Submit Button */}
              <div className="mb-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
