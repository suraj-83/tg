import React, { useState } from "react";
import { createCabTravel } from "../../redux/slices/travelSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CabBookingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    pickupCountry: "India",
    nationality: "Indian",
    tourPlan: "",
    name: "",
    contactNo: "",
    alternateContactNo: "",
    email: "",
    cabRequiredAt: "",
    cabRequiredFor: "",
    localTravelKmsLimit: "",
    pickupDateTime: "",
    pickupAddress: "",
    pickupLandmark: "",
    dropDateTime: "",
    dropAddress: "",
    dropLandmark: "",
    cabDuration: "",
    noOfCabsRequired: "",
    typeOfCabRequired: "",
    noOfPersonsTravelling: "",
    noOfInfants: "",
    noOfChildren: "",
    otherRequirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAllFieldsFilled =
      Object.values(formData).every((value) => value !== "") &&
      formData.phoneNumber !== "" &&
      formData.landlineNumber !== "";

    if (isAllFieldsFilled) {
      console.log(formData);
      const response = await dispatch(createCabTravel(formData));
      console.log(response);

      if (response?.payload?.data?.success) {
        navigate("/");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-sm">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="mb-4">
                <label
                  className="block text-gray-950 font-bold mb-2"
                  htmlFor="pickupCountry"
                >
                  Pickup Country
                </label>
                <select
                  name="pickupCountry"
                  value={formData.pickupCountry}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="nationality"
                >
                  Nationality
                </label>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="Indian">Indian</option>
                  <option value="American">American</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="tourPlan"
                >
                  Tour Plan
                </label>
                <select
                  name="tourPlan"
                  value={formData.tourPlan}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="Local">Local</option>
                  <option value="Outstation">Outstation</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="contactNo"
                >
                  Contact No
                </label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="alternateContactNo"
                >
                  Alternate No
                </label>
                <input
                  type="text"
                  name="alternateContactNo"
                  value={formData.alternateContactNo}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cabRequiredState"
                >
                  State
                </label>
                <input
                  type="text"
                  name="cabRequiredState"
                  value={formData.cabRequiredState}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cabRequiredCity"
                >
                  City
                </label>
                <input
                  type="text"
                  name="cabRequiredCity"
                  value={formData.cabRequiredCity}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cabRequiredPinCode"
                >
                  PinCode
                </label>
                <input
                  type="text"
                  name="cabRequiredPinCode"
                  value={formData.cabRequiredPinCode}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4 col-span-3 text-center">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="text-sm gap-3">
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cabRequiredAt"
                >
                  Cab Required At
                </label>
                <select
                  name="cabRequiredAt"
                  value={formData.cabRequiredAt}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="Airport">Airport</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Railway Station">Railway Station</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cabRequiredFor"
                >
                  Cab Required For
                </label>
                <select
                  name="cabRequiredFor"
                  value={formData.cabRequiredFor}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="Local Travel">Local Travel</option>
                  <option value="Outstation">Outstation</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="localTravelKmsLimit"
              >
                Local Travel Limit
              </label>
              <select
                name="localTravelKmsLimit"
                value={formData.localTravelKmsLimit}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              >
                <option value="">--Select--</option>
                <option value="4 Hrs & 40 Kms">4 Hrs & 40 Kms</option>
                <option value="8 Hrs & 80 Kms">8 Hrs & 80 Kms</option>
                <option value="12 Hrs & 120 Kms">12 Hrs & 120 Kms</option>
                <option value="Full Day">Full Day</option>
              </select>
            </div>
            <div className="mb-4 col-span-3 text-center">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none mr-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-sm">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="pickupDateTime"
                >
                  Pickup Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="pickupDateTime"
                  value={formData.pickupDateTime}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="pickupAddress"
                >
                  Pickup Address
                </label>
                <input
                  type="text"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="pickupLandmark"
                >
                  Pickup Landmark
                </label>
                <input
                  type="text"
                  name="pickupLandmark"
                  value={formData.pickupLandmark}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="dropDateTime"
                >
                  Drop Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="dropDateTime"
                  value={formData.dropDateTime}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="dropAddress"
                >
                  Drop Address
                </label>
                <input
                  type="text"
                  name="dropAddress"
                  value={formData.dropAddress}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="dropLandmark"
                >
                  Drop Landmark
                </label>
                <input
                  type="text"
                  name="dropLandmark"
                  value={formData.dropLandmark}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4 col-span-3 text-center">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none mr-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-sm">
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cabDuration"
                >
                  Cab Duration
                </label>
                <select
                  name="cabDuration"
                  value={formData.cabDuration}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="4 Hrs">4 Hrs</option>
                  <option value="8 Hrs">8 Hrs</option>
                  <option value="12 Hrs">12 Hrs</option>
                  <option value="24 Hrs">24 Hrs</option>
                  <option value="Full Day">Full Day</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="noOfCabsRequired"
                >
                  Number of Cabs Required
                </label>
                <input
                  type="number"
                  name="noOfCabsRequired"
                  value={formData.noOfCabsRequired}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="typeOfCabRequired"
                >
                  Type of Cab Required
                </label>
                <select
                  name="typeOfCabRequired"
                  value={formData.typeOfCabRequired}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Mini Bus">Mini Bus</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="noOfPersonsTravelling"
                >
                  Number of Persons Travelling
                </label>
                <input
                  type="number"
                  name="noOfPersonsTravelling"
                  value={formData.noOfPersonsTravelling}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4 col-span-3 text-center">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none mr-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-sm">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="noOfInfants"
              >
                Number of Infants
              </label>
              <input
                type="number"
                name="noOfInfants"
                value={formData.noOfInfants}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="noOfChildren"
              >
                Number of Children
              </label>
              <input
                type="number"
                name="noOfChildren"
                value={formData.noOfChildren}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="otherRequirements"
              >
                Other Requirements
              </label>
              <textarea
                name="otherRequirements"
                value={formData.otherRequirements}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4 col-span-3 text-center">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none mr-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="bg-cover  bg-center"
      style={{
        backgroundImage: `url('https://cdn.leonardo.ai/users/9419a3d8-5e1c-4610-bac3-e853525ff24c/generations/c07daa91-ea45-4bee-993e-3912bd313110/Default_Create_a_highresolution_background_image_for_a_cab_boo_1.jpg')`,
      }}
    >
      <div className="min-h-[100vh] flex items-center justify-center lg:p-[10%]">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 bg-opacity-65 p-5 rounded-lg w-full h-full shadow-[0_0_10px_black]"
        >
          <div>
            <h1 className="pb-4 font-bold text-sm text-center text-blue-700 uppercase md:text-2xl underline">
              Cab Booking
            </h1>
          </div>
          {renderStep()}
        </form>
      </div>
    </div>
  );
};

export default CabBookingForm;