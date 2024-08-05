import React, { useState } from "react";
import { createAirTravel } from "../../redux/slices/travelSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FlightBookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      flightNo: "",
      timePreference: "",
      adult: "",
      children: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  let MAX_PERSONS = 10;

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
      flightNo: "",
      timePreference: "",
      adult: "",
      children: "",
    });
    setFormData(updatedFormData);
  };

  const handleRemovePerson = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(createAirTravel(formData));
    if (response?.payload?.data?.success) {
      navigate("/");
    }
  };

  return (
    <div
      className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500857527770-d5289b39e342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Larges Screens */}
      <div className="hidden lg:block">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-100 bg-opacity-75 rounded-lg min-w-screen min-h-screen shadow-[0_0_10px_black]"
      >
        <h1 className="pb-4 font-bold pt-4 text-center bg-blue-100 text-blue-700 uppercase text-2xl underline">
          Flight Booking Request Form
        </h1>
        <div className="overflow-auto">
          <table className="min-w-full bg-blue-100 text-sm">
            <thead>
              <tr>
                <th className="border px-2 border-gray-300 py-2">Full Name</th>
                <th className="border px-2 border-gray-300 py-2">DOB</th>
                <th className="border px-2 border-gray-300 py-2">Gender</th>
                <th className="border px-2 border-gray-300 py-2">Contact No</th>
                <th className="border px-2 border-gray-300 py-2">Email</th>
                <th className="border px-2 border-gray-300 py-2">Travel From</th>
                <th className="border px-2 border-gray-300 py-2">Travel To</th>
                <th className="border px-2 border-gray-300 py-2">Class</th>
                <th className="border px-2 border-gray-300 py-2">Travel Date</th>
                <th className="border px-2 border-gray-300 py-2">Flight No</th>
                <th className="border px-2 border-gray-300 py-2">Time Preference</th>
                <th className="border px-2 border-gray-300 py-2">Adult</th>
                <th className="border px-2 border-gray-300 py-2">Children</th>
                <th className="border px-2 border-gray-300 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((person, index) => (
                <tr key={index}>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="text"
                      name="fullName"
                      value={person.fullName}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="date"
                      name="dob"
                      value={person.dob}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="text"
                      name="gender"
                      value={person.gender}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Gender"
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                      list="genderOptions"
                    />
                    <datalist id="genderOptions">
                      <option value="Male" />
                      <option value="Female" />
                      <option value="Other" />
                    </datalist>
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="text"
                      name="contactNo"
                      maxLength="10"
                      title="10 digit mobile number"
                      pattern="[0-9]{10}"
                      value={person.contactNo}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="email"
                      name="email"
                      value={person.email}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="text"
                      name="travelFrom"
                      value={person.travelFrom}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="text"
                      name="travelTo"
                      value={person.travelTo}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <select
                      name="classOfTravel"
                      value={person.classOfTravel}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    >
                      <option value="">--Select--</option>
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="date"
                      name="travelDate"
                      value={person.travelDate}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="text"
                      name="flightNo"
                      value={person.flightNo}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Flight No."
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <input
                      type="time"
                      name="timePreference"
                      value={person.timePreference}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Time Preference"
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <select
                      name="adult"
                      value={person.adult}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
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
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <select
                      name="children"
                      value={person.children}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-2 bg-blue-100 py-2 border border-gray-300 rounded focus:outline-none"
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
                  </td>
                  <td className="border px-2 border-gray-300 py-2">
                    <button
                      type="button"
                      onClick={() => handleRemovePerson(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between bg-blue-100">
          {formData.length < MAX_PERSONS && (
            <button
              type="button"
              className="bg-blue-500 text-white mb-4 px-4 py-2 mt-4 ml-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleAddPerson}
            >
              Add Person
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 mb-4 py-2 mt-4 mr-4 uppercase rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      </form>
      </div>
      {/* Smaller and medium screens */}
      <div className="block lg:hidden">
      <div className="md:min-h-[40vh] flex items-center text-sm justify-center md:p-24">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 bg-opacity-95 p-5 rounded-lg  w-full shadow-[0_0_10px_black]"
        >
          <div>
            <h1 className="pb-4 font-bold  text-center text-blue-700 uppercase sm:text-sm md:text-2xl underline">
              Flight Booking Request Form
            </h1>            
            {formData.map((person, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 mb-4 w-full"
              >
                <h2 className="text-md font-medium mb-4">
                  Passenger {index + 1}
                </h2>
                <div className="min-h-[60vh]">
                
                    <div className="mb-4 grid grid-cols-1">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`fullName-${index}`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id={`fullName-${index}`}
                        name="fullName"
                        value={person.fullName}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`dob-${index}`}
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id={`dob-${index}`}
                        name="dob"
                        value={person.dob}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`gender-${index}`}
                      >
                        Gender
                      </label>
                      <input
                        type="text"
                        id={`gender-${index}`}
                        name="gender"
                        value={person.gender}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Gender"
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                        list="genderOptions"
                      />
                      <datalist id="genderOptions">
                        <option value="Male" />
                        <option value="Female" />
                        <option value="Other" />
                      </datalist>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`contactNo-${index}`}
                      >
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
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`email-${index}`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id={`email-${index}`}
                        name="email"
                        value={person.email}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`travelFrom-${index}`}
                      >
                      Travel From
                      </label>
                      <input
                        type="text"
                        id={`travelFrom-${index}`}
                        name="travelFrom"
                        value={person.travelFrom}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>                
                  <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`travelTo-${index}`}
                      >
                      Travel To
                      </label>
                      <input
                        type="text"
                        id={`travelTo-${index}`}
                        name="travelTo"
                        value={person.travelTo}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    </div> 
                    <div className="grid grid-cols-3 gap-4">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`classOfTravel-${index}`}
                      >
                      Travel Class
                      </label>
                      <select
                        id={`classOfTravel-${index}`}
                        name="classOfTravel"
                        value={person.classOfTravel}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      >
                        <option value="">--Select--</option>
                        <option value="Economy">Economy</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`travelDate-${index}`}
                      >
                        Travel Date
                      </label>
                      <input
                        type="date"
                        id={`travelDate-${index}`}
                        name="travelDate"
                        value={person.travelDate}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`flightNo-${index}`}
                      >
                        Flight No
                      </label>
                      <input
                        type="text"
                        id={`flightNo-${index}`}
                        name="flightNo"
                        value={person.flightNo}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Flight No."
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`timePreference-${index}`}
                      >
                        Time preference
                      </label>
                      <input
                        type="time"
                        id={`timePreference-${index}`}
                        name="timePreference"
                        value={person.timePreference}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Time Preference"
                        className="w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`adult-${index}`}
                      >
                        Adult(12+ Years)
                      </label>
                      <select
                        name="adult"
                        value={person.adult}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
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
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor={`children-${index}`}
                      >
                        Children (2-12 Years)
                      </label>
                      <select
                        name="children"
                        value={person.children}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-3 bg-blue-100 opacity-90 py-2 border border-gray-300 rounded focus:outline-none"
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

{formData.length > 1 && (
            <div className="flex justify-start absolute m:top-[139%]">
                <button
                  type="button"
                  className="border-red-500 text-red-500 px-4 py-1.5 mt-4 border  hover:border-red-900 focus:outline-none focus:bg-red-600"
                  onClick={() => handleRemovePerson(formData.length - 1)}
                >
                  Remove Person
                </button>
            
            </div>
              )}
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
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;
