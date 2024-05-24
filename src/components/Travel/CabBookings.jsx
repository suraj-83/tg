import React, { useState } from "react";
import { createCabTravel } from "../../redux/slices/travelSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const inputClasses =
  "mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm";
const labelClasses = "block font-medium";

const TourForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tourPlan: "",
    name: "",
    country: "",
    contact: "",
    email: "",
    cabRequiredFor: "",
    pickUpDate: "",
    pickUpAddress: "",
    dropDate: "",
    dropAddress: "",
    cabDuration: "",
    noOfCab: "",
    typeOfCab: "",
    noOfPersons: "",
    travelingWithInfant: "",
    otherRequirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(createCabTravel(formData));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/");
    }

    console.log(JSON.stringify(formData, null, 2));
    setFormData({
      tourPlan: "",
      name: "",
      country: "",
      contact: "",
      email: "",
      cabRequiredFor: "",
      pickUpDate: "",
      pickUpAddress: "",
      dropDate: "",
      dropAddress: "",
      cabDuration: "",
      noOfCab: "",
      typeOfCab: "",
      noOfPersons: "",
      travelingWithInfant: "",
      otherRequirements: "",
    });
  };

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-100 p-5 rounded-lg flex flex-wrap gap-7 w-full lg:w-1/2 shadow-[0_0_10px_black]"
      >
        <div>
          <label htmlFor="tour-plan" className={labelClasses}>
            Tour Plan
          </label>
          <input
            type="text"
            id="tour-plan"
            name="tourPlan"
            className={inputClasses}
            value={formData.tourPlan}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={inputClasses}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClasses}>
            Pick Up Country / Nationality
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className={inputClasses}
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contact" className={labelClasses}>
            Contact No
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className={inputClasses}
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={inputClasses}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cab-required-for" className={labelClasses}>
            Cab Required For
          </label>
          <select
            id="cab-required-for"
            name="cabRequiredFor"
            className={inputClasses}
            value={formData.cabRequiredFor}
            onChange={handleChange}
          >
            <option>Select</option>
            <option value="Airport Transfer / Drop">
              Airport Transfer / Drop
            </option>
            <option value="Outstation Travel">Outstation Travel</option>
            <option value="One Way Drop">One Way Drop</option>
            <option value="Multiple City Travel & Drop">
              Multiple City Travel & Drop
            </option>
            <option value="Round Trip">Round Trip</option>
            <option value="Local Travel">Local Travel</option>
          </select>
        </div>
        <div>
          <label htmlFor="pick-up-date" className={labelClasses}>
            Pick up Date & Time
          </label>
          <input
            type="datetime-local"
            id="pick-up-date"
            name="pickUpDate"
            className={inputClasses}
            value={formData.pickUpDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pick-up-address" className={labelClasses}>
            Pick up Address with Landmark / Location
          </label>
          <input
            type="text"
            id="pick-up-address"
            name="pickUpAddress"
            className={inputClasses}
            value={formData.pickUpAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="drop-date" className={labelClasses}>
            Drop Date & Time
          </label>
          <input
            type="datetime-local"
            id="drop-date"
            name="dropDate"
            className={inputClasses}
            value={formData.dropDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="drop-address" className={labelClasses}>
            Drop Address with Landmark / Location
          </label>
          <input
            type="text"
            id="drop-address"
            name="dropAddress"
            className={inputClasses}
            value={formData.dropAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cab-duration" className={labelClasses}>
            Cab Duration i.e. No of Days
          </label>
          <input
            type="number"
            id="cab-duration"
            name="cabDuration"
            className={inputClasses}
            value={formData.cabDuration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="no-of-cab" className={labelClasses}>
            No of Cab Required
          </label>
          <input
            type="number"
            id="no-of-cab"
            name="noOfCab"
            className={inputClasses}
            value={formData.noOfCab}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="type-of-cab" className={labelClasses}>
            Type of Cab Required
          </label>
          <input
            type="text"
            id="type-of-cab"
            name="typeOfCab"
            className={inputClasses}
            value={formData.typeOfCab}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="no-of-persons" className={labelClasses}>
            No of Person(s) Travelling
          </label>
          <input
            type="number"
            id="no-of-persons"
            name="noOfPersons"
            className={inputClasses}
            value={formData.noOfPersons}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="traveling-with-infant" className={labelClasses}>
            Traveling with Infant (Below 5 Yrs) / Child (Above 5 Yrs)
          </label>
          <select
            id="traveling-with-infant"
            name="travelingWithInfant"
            className={inputClasses}
            value={formData.travelingWithInfant}
            onChange={handleChange}
          >
            <option>Select</option>
            <option value="Infant">Infant</option>
            <option value="Child">Child</option>
          </select>
        </div>
        <div>
          <label htmlFor="other-requirements" className={labelClasses}>
            Any other Requirement
          </label>
          <textarea
            id="other-requirements"
            name="otherRequirements"
            className={inputClasses}
            rows="3"
            value={formData.otherRequirements}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TourForm;
