import React, { useState } from "react";
import { createVolvoBusTravel } from "../../redux/slices/travelSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BusBookingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const [formData, setFormData] = useState([
    {
      fullName: "",
      dob: "",
      gender: "",
      contactNo: "",
      email: "",
      pickupLocation: "",
      destination: "",
      travelDate: "",
      seatType: "",
      busNo: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  let MAX_PERSONS=10

  const handleAddPerson = () => {
    const updatedFormData = [...formData];
    updatedFormData.push({
      fullName: "",
      dob: "",
      gender: "",
      contactNo: "",
      email: "",
      travelFrom: "",
      travelTo: "",
      classOfTravel: "",
      travelDate: "",
      trainNo: "",
      timePreference: "",
    });
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(createVolvoBusTravel(formData));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/");
    }
  };

  return (
    <div className="bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
    
    <div className="min-h-[100vh] flex items-center justify-center p-24">
    <form
      onSubmit={handleSubmit}
      className="bg-blue-100 bg-opacity-95 p-5 rounded-lg  w-full lg:w-1/2 shadow-[0_0_10px_black]"
    >
        <div>
        <h1 className="pb-4 font-bold  text-center text-blue-700 uppercase text-2xl underline">
            Volvo Bus Booking Request Form
          </h1>
        </div>        
        {formData.map((person, index) => (
          <div key={index} className="mb-6 border-b-2 border-gray-300 pb-4">
            <h3 className="text-xl font-semibold mb-4">Person {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gridd-col-3 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`fullName-${index}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={person.fullName}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`dob-${index}`}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={person.dob}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`gender-${index}`}>
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  value={person.gender}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Gender"
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  list="genderOptions"
                />
                <datalist id="genderOptions">
                  <option value="Male" />
                  <option value="Female" />
                  <option value="Other" />
                </datalist>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`contactNo-${index}`}>
                  Contact Nos
                </label>
                <input
                  type="text"
                  maxLength="10"
                  title="10 digit mobile number"
                  pattern="[0-9]{10}"
                  name="contactNo"
                  value={person.contactNo}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`email-${index}`}>
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  value={person.email}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`pickupLocation-${index}`}>
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={person.pickupLocation}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`destination-${index}`}>
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={person.destination}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`travelDate-${index}`}>
                  Travel Date
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={person.travelDate}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`seatType-${index}`}>
                  Seat Type
                </label>
                <select
                  name="seatType"
                  value={person.seatType}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="Sleeper">Sleeper</option>
                  <option value="Semi-Sleeper">Semi-Sleeper</option>
                  <option value="Regular">Regular</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`busNo-${index}`}>
                  Bus No
                </label>
                <input
                  type="text"
                  name="busNo"
                  value={person.busNo}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
            </div>
          </div>
        ))}
        {formData.length < MAX_PERSONS && (
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleAddPerson}
            >
              Add Person
            </button>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default BusBookingForm;
