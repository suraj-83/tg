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
    <div className="min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <p className="bg-sky-900 p-2 text-white text-2xl font-bold w-full text-center">
            Flight Booking Request Form
          </p>
          <table className="w-full border border-black border-solid mb-5">
            <thead className="text-white bg-sky-900">
              <tr>
                <th className="border px-4 py-2">Tour Plan</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Date of Birth</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Contact Nos</th>
                <th className="border px-4 py-2">Email Id</th>
                <th className="border px-4 py-2">From</th>
                <th className="border px-4 py-2">To</th>
                <th className="border px-4 py-2">Class to Travel</th>
                <th className="border px-4 py-2">Travel Date</th>
                <th className="border px-4 py-2">Flight No</th>
                <th className="border px-4 py-2">Time Preference</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((person, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="number"
                      value={index + 1}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="fullName"
                      value={person.fullName}
                      onChange={(e) => handleChange(e, index)}
                      className="px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="dob"
                      value={person.dob}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="gender"
                      value={person.gender}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="gender"
                      className="px-2 py-2 border border-gray-300 rounded focus:outline-none"
                      list="genderOptions"
                    />
                    <datalist id="genderOptions">
                      <option value="Male" />
                      <option value="Female" />
                      <option value="Other" />
                    </datalist>
                  </td>
                  <td>
                    <input
                      type="text"
                      maxLength="10"
                      title="10 digit mobile number"
                      pattern="[0-9]{10}"
                      name="contactNo"
                      value={person.contactNo}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={person.email}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="travelFrom"
                      value={person.travelFrom}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="travelTo"
                      value={person.travelTo}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <select
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
                  </td>
                  <td>
                    <input
                      type="date"
                      name="travelDate"
                      value={person.travelDate}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="flightNo"
                      value={person.flightNo}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Flight No."
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="timePreference"
                      value={person.timePreference}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Time Preference"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col justify-center">
            <label
              className="w-full text-gray-700 font-bold mb-2"
              htmlFor="numberOfPersons"
            >
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

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightBookingForm;
