import React, { useState } from "react";
import { createTrainTravel } from "../../redux/slices/travelSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const TrainBookingForm = () => {
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
      trainNo: "",
      timePreference: "",
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

    const response = await dispatch(createTrainTravel(formData));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/");
    }

    console.log(formData);
  };

  return (
    <div className="bg-cover bg-center" style={{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
    
    <div className="min-h-[100vh] flex items-center justify-center p-24">
    <form
      onSubmit={handleSubmit}
      className="bg-blue-100 bg-opacity-95 p-5 rounded-lg  w-full lg:w-1/2 shadow-[0_0_10px_black]"
    >
        <div>
        <h1 className="pb-4 font-bold  text-center text-blue-700 uppercase text-2xl underline">
            Train Booking Request Form
          </h1>
        </div>        
        {formData.map((person, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Person {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
                  Contact No
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
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`travelFrom-${index}`}>
                  From
                </label>
                <input
                  type="text"
                  name="travelFrom"
                  value={person.travelFrom}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`travelTo-${index}`}>
                  To
                </label>
                <input
                  type="text"
                  name="travelTo"
                  value={person.travelTo}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`classOfTravel-${index}`}>
                  Class to Travel
                </label>
                <select
                  name="classOfTravel"
                  value={person.classOfTravel}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="Anubhuti Class (EA)">Anubhuti Class (EA)</option>
                  <option value="AC First Class (1A)">AC First Class (1A)</option>
                  <option value="Vistadome AC (EV)">Vistadome AC (EV)</option>
                  <option value="Exec. Chair Car (EC)">Exec. Chair Car (EC)</option>
                  <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
                  <option value="First Class (FC)">First Class (FC)</option>
                  <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
                  <option value="AC 3 Economy (3E)">AC 3 Economy (3E)</option>
                  <option value="Vistadome Chair Car (VC)">Vistadome Chair Car (VC)</option>
                  <option value="AC Chair car (CC)">AC Chair car (CC)</option>
                  <option value="Sleeper (SL)">Sleeper (SL)</option>
                  <option value="Vistadome Non AC (VS)">Vistadome Non AC (VS)</option>
                  <option value="Second Sitting (2S)">Second Sitting (2S)</option>
                </select>
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
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`trainNo-${index}`}>
                  Train No
                </label>
                <input
                  type="text"
                  name="trainNo"
                  value={person.trainNo}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Train No."
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
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
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`timePreference-${index}`}>
                  Time Preference
                </label>
                <input
                  type="time"
                  name="timePreference"
                  value={person.timePreference}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Time Preference"
                  className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />              
              </div> 
            </div>
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
          </div>
        ))}
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

export default TrainBookingForm;
