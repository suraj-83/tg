import React, { useState } from "react";
import Select from "react-select";
import { zipCodeMapping, industryOptions } from "../data.js";
import corprateImg from "../assets/Image/y.jpg";
import {  vendorSignup } from "../redux/slices/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormData = {
    areaOfWork: "",
    companyName: "",
    zipCode: "",
    country: "",
    city: "",
    state: "",
    email: "",
    password: "",
    website: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    phoneNumber: "",
    countryCode: "",
    landlineNumber: "",
    landlineCountryCode: "",
    landlineCityCode: "",
    contactPersonFirstName: "",
    contactPersonSecondName: "",
    contactPersonLastName: "",
    contactPersonGender: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const [landlineNumberVisible, setLandLineNumberVisible] = useState(false);

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

    const response = await dispatch(vendorSignup(formData));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/vendor-login");
    }

    console.log(formData);
    // console.log(JSON.stringify(formattedData, null, 4)); // Log formatted form data to the console
    setFormData(initialFormData); // Reset form data to initial state
  };

  return (
    <>
      {/* <div className='sticky top-0'><Header/></div> */}

      <div className="h-screen w-full mx-auto flex">
        <div className="w-1/2 h-screen hidden md:block">
          <img src={corprateImg} alt="" className="bg-contain h-full" />
        </div>
        <div className="w-full lg:-ml-10 md:-ml-0  lg:w-1/2 h-screen overflow-y-scroll">
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 ">
            <h1 className="pb-9 font-bold  text-center uppercase text-2xl underline">
              Vendor Sign Up
            </h1>

            <div className="min-h-[90vh]">
              <div className="flex flex-wrap sm:flex-wrap gap-3">
              <div className="grid lg:grid-cols-3 gap-2">
  {/* Country Field */}
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

  {/* Area of Work Selection */}
  <div className="mb-4">
    <select
      value={formData?.areaOfWork || ""}
      onChange={(e) => {
        setFormData((prevState) => ({
          ...prevState,
          areaOfWork: e.target.value,
        }));
      }}
      className="w-full p-2 border border-gray-300 rounded"
    >
      <option value="">Select Area of Work*</option>
      <option value="Cab Vendor">Cab / Tempo Travelers</option>
      <option value="Hotel Vendor">Hotel Vendor</option>
      <option value="Air Vendor">Air Vendor</option>
      <option value="Train Vendor">Train Vendor</option>
      <option value="Visa Vendor">Visa Vendor</option>
      <option value="Insurance Vendor">Insurance Vendor</option>
      <option value="Volvo Bus Vendor">Volvo Bus Vendor</option>
      <option value="Foreign Exchange Vendor">Foreign Exchange Vendor</option>
      <option value="Tour Guide Vendor">Tour Guide Vendor</option>
      <option value="Travel DMC">DMC (Direct Marketing Company)</option>
      <option value="Travel agents">Travel Agents</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* Other Department Field (Conditional) */}
  {formData.areaOfWork.trim() === "Other" && (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Other Department"
        value={formData.otherDepartment || ""}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            otherDepartment: e.target.value,
          }))
        }
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  )}

  {/* Company Name Field */}
  <div className="mb-4">
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
</div>

                {/* Address 1 */}
                <div className="mb-4">
                  {/* <label htmlFor="address1" className="block mb-2 font-semibold">Address Line 1</label> */}
                  <input
                    type="text"
                    id="address1"
                    placeholder="Address-1"
                    value={formData.address1 || ""}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        address1: e.target.value,
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {formData.address1 && (
                  <>
                    <div className="mb-4">
                      {/* <label htmlFor="address2" className="block mb-2 font-semibold">Address Line 2</label> */}
                      <input
                        type="text"
                        id="address2"
                        placeholder="Address-2"
                        value={formData.address2 || ""}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            address2: e.target.value,
                          }))
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    {formData.address2 && (
                      <>
                        <div className="mb-4">
                          {/* <label htmlFor="address3" className="block mb-2 font-semibold">Address Line 3</label> */}
                          <input
                            type="text"
                            id="address3"
                            placeholder="Address-3"
                            value={formData.address3 || ""}
                            onChange={(e) =>
                              setFormData((prevState) => ({
                                ...prevState,
                                address3: e.target.value,
                              }))
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                          />
                        </div>

                        {formData.address3 && (
                          <>
                            <div className="mb-4">
                              {/* <label htmlFor="address4" className="block mb-2 font-semibold">Address Line 4</label> */}
                              <input
                                type="text"
                                id="address4"
                                placeholder="Address-4"
                                value={formData.address4 || ""}
                                onChange={(e) =>
                                  setFormData((prevState) => ({
                                    ...prevState,
                                    address4: e.target.value,
                                  }))
                                }
                                className="w-full p-2 border border-gray-300 rounded"
                              />
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
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
                    <legend className="sr-only">Gender</legend>
                    <div className="flex items-center justify-center gap-8">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="contactPersonGender"
                          id="gender-male"
                          value="male"
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
                          className="w-28 p-2 border border-gray-300 rounded"
                          placeholder="CountryCode"
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
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  )}
                  {landlineNumberVisible && (
                    <div className="flex mt-2">
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
                        className="w-20 p-2 border border-gray-300 rounded mr-2"
                        placeholder="CountryCode"
                        style={{ color: "gray" }}
                        aria-label="CountryCode"
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
                        className="w-20 p-2 border border-gray-300 rounded mr-2"
                        placeholder="CityCode"
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
