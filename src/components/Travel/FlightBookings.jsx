import React, { useState } from "react";
import { createAirTravel } from "../../redux/slices/travelSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FlightBookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [formData, setFormData] = useState([
    {
      fullName: "",
      dob: "",
      gender: "",
      contactNo: "",
      email: "",
      travelFrom: "",
      travelTo: "",
      classOfTravel: "",
      travelDate: "",
      remarks: "",
      flightNo: "",
      timePreference: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const handleNumberOfPersonsChange = (e) => {
    const newNumberOfPersons = parseInt(e.target.value, 10);
    setNumberOfPersons(newNumberOfPersons);
    const updatedFormData = [...formData];
    while (updatedFormData.length < newNumberOfPersons) {
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
        remarks: "",
        flightNo: "",
        timePreference: "",
      });
    }
    while (updatedFormData.length > newNumberOfPersons) {
      updatedFormData.pop();
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(createAirTravel(formData));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/");
    }

    console.log(formData);
  };

  return (
    <div className="bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1500857527770-d5289b39e342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
    
    <div className="min-h-[100vh] flex items-center justify-center p-24">
    <form
      onSubmit={handleSubmit}
      className="bg-blue-100 bg-opacity-95 p-5 rounded-lg  w-full lg:w-1/2 shadow-[0_0_10px_black]"
    >
        <div>
        <h1 className="pb-4 font-bold  text-center text-blue-700 uppercase text-2xl underline">
            Flight Booking Request Form
          </h1> 
          <div className=" justify-between flex mb-4">
            <label className="w-full text-gray-700 font-bold mb-2" htmlFor="numberOfPersons">
              Number of Persons
            </label>
            <select
              name="numberOfPersons"
              value={numberOfPersons}
              onChange={handleNumberOfPersonsChange}
              className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              {[...Array(50)].map((_, i) => (
                <option key={i} value={i + 1} className="py-2 px-4">
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          {formData.map((person, index) => (
            <div key={index} className="border border-gray-300 p-4 mb-4 w-full">
              <h2 className="text-xl font-bold mb-4">Passenger {index + 1}</h2>
              <div className="mb-4 flex flex-wrap gap-4 justify-between">
              <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`fullName-${index}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id={`fullName-${index}`}
                  name="fullName"
                  value={person.fullName}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`dob-${index}`}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  id={`dob-${index}`}
                  name="dob"
                  value={person.dob}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`gender-${index}`}>
                  Gender
                </label>
                <input
                  type="text"
                  id={`gender-${index}`}
                  name="gender"
                  value={person.gender}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Gender"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  list="genderOptions"
                />
                <datalist id="genderOptions">
                  <option value="Male" />
                  <option value="Female" />
                  <option value="Other" />
                </datalist>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`contactNo-${index}`}>
                  Contact No
                </label>
                <input
                  type="text"
                  id={`contactNo-${index}`}
                  name="contactNo"
                  maxLength="10"
                  title="10 digit mobile number"
                  pattern="[0-9]{10}"
                  value={person.contactNo}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`email-${index}`}>
                  Email
                </label>
                <input
                  type="email"
                  id={`email-${index}`}
                  name="email"
                  value={person.email}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`travelFrom-${index}`}>
                  Travel From
                </label>
                <input
                  type="text"
                  id={`travelFrom-${index}`}
                  name="travelFrom"
                  value={person.travelFrom}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              </div>
              <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`travelTo-${index}`}>
                  Travel To
                </label>
                <input
                  type="text"
                  id={`travelTo-${index}`}
                  name="travelTo"
                  value={person.travelTo}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>            
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`classOfTravel-${index}`}>
                Travellers & Class
                </label>
                <select
                  id={`classOfTravel-${index}`}
                  name="classOfTravel"
                  value={person.classOfTravel}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`travelDate-${index}`}>
                  Travel Date
                </label>
                <input
                  type="date"
                  id={`travelDate-${index}`}
                  name="travelDate"
                  value={person.travelDate}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`flightNo-${index}`}>
                  Flight No
                </label>
                <input
                  type="text"
                  id={`flightNo-${index}`}
                  name="flightNo"
                  value={person.flightNo}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Flight No."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor={`timePreference-${index}`}>
                  Time Preference
                </label>
                <input
                  type="time"
                  id={`timePreference-${index}`}
                  name="timePreference"
                  value={person.timePreference}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Time Preference"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`adult-${index}`}>
                  Adult (12 Yrs and above)
                </label>
                <select
                  name="adult"
                  value={person.adult}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`children-${index}`}>
                  Children (06-12 Yrs)
                </label>
                <select
                  name="children"
                  value={person.children}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                </div>
              </div>
              </div>
            </div>
          ))}
          
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FlightBookingForm;
