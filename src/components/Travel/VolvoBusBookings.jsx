import React, { useState } from 'react';

const BusBookingForm = () => {
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [formData, setFormData] = useState([
    {
      fullName: '',
      ageOrDOB: '',
      gender: '',
      contactNo: '',
      email: '',
      pickupLocation: '',
      destination: '',
      travelDate: '',
      seatType: '',
      busNo: '',
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
        fullName: '',
        ageOrDOB: '',
        gender: '',
        contactNo: '',
        email: '',
        pickupLocation: '',
        destination: '',
        travelDate: '',
        seatType: '',
        busNo: '',
      });
    }
    while (updatedFormData.length > newNumberOfPersons) {
      updatedFormData.pop();
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFormData = formData.map(person => ({
      fullName: person.fullName,
      ageOrDOB: person.ageOrDOB,
      gender: person.gender,
      contactNo: person.contactNo,
      email: person.email,
      pickupLocation: person.pickupLocation,
      destination: person.destination,
      travelDate: person.travelDate,
      seatType: person.seatType,
      busNo: person.busNo,
    }));
    console.log(allFormData);
  };
  

  return (
    <div className="min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <p className="bg-blue-900 p-2 text-white text-2xl font-bold w-full text-center">
            Volvo Bus Booking Request Form
          </p>
          <table className="w-full border border-black border-solid mb-5">
            <thead className="text-white bg-blue-900">
              <tr>
                <th className="border px-4 py-2">Tour Plan</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Date of Birth</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Contact Nos</th>
                <th className="border px-4 py-2">Email Id</th>
                <th className="border px-4 py-2">Pickup Location</th>
                <th className="border px-4 py-2">Destination</th>
                <th className="border px-4 py-2">Travel Date</th>
                <th className="border px-4 py-2">Seat Type</th>
                <th className="border px-4 py-2">Bus No</th>
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
                      name="ageOrDOB"
                      value={person.ageOrDOB}
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
                      name="pickupLocation"
                      value={person.pickupLocation}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="destination"
                      value={person.destination}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
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
                    <select
                      name="seatType"
                      value={person.seatType}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    >
                      <option value="">--Select--</option>
                      <option value="Sleeper">Sleeper</option>
                      <option value="Semi-Sleeper">Semi-Sleeper</option>
                      <option value="Regular">Regular</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="busNo"
                      value={person.busNo}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col justify-center">
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

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusBookingForm;

