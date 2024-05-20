import React, { useState } from 'react';

const VolvoBusBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    ageOrDOB: '',
    gender: '',
    contactNo: '',
    email: '',
    pickupLocation: '',
    destination: '',
    travelDate: '',
    seatType: '',
    remarks: '',
    numberOfPersons: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNumberOfPersonsChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      numberOfPersons: parseInt(value, 10),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <h2 className="bg-sky-900 p-2 text-white text-2xl font-bold w-full text-center">Volvo Bus Ticket Booking Request Form</h2>
          <table className="w-full border border-black border-solid mb-5">
            <thead className="text-white bg-sky-900">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Age/Date of Birth</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Contact No</th>
                <th className="border px-4 py-2">Email Id</th>
                <th className="border px-4 py-2">Pickup Location</th>
                <th className="border px-4 py-2">Destination</th>
                <th className="border px-4 py-2">Travel Date</th>
                <th className="border px-4 py-2">Seat Type</th>
                <th className="border px-4 py-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(formData.numberOfPersons)].map((_, i) => (
                <tr key={i}>
                  <td><input type="text" name={`fullName-${i}`} value={formData[`fullName-${i}`] || ''} onChange={handleChange} className="px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                  <td>
                    <input type="date" name={`ageOrDOB-${i}`} value={formData[`ageOrDOB-${i}`] || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" />
                  </td>
                  <td>
                    <input type="text" name={`gender-${i}`} value={formData[`gender-${i}`] || ''} onChange={handleChange} placeholder='gender' className="px-2 py-2 border border-gray-300 rounded focus:outline-none" list="genderOptions" />
                    <datalist id="genderOptions">
                      <option value="Male" />
                      <option value="Female" />
                      <option value="Other" />
                    </datalist>
                  </td>
                  <td><input type="text" name={`contactNo-${i}`} value={formData[`contactNo-${i}`] || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                  <td><input type="email" name={`email-${i}`} value={formData[`email-${i}`] || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                  <td><input type="text" name={`pickupLocation-${i}`} value={formData[`pickupLocation-${i}`] || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                  <td><input type="text" name={`destination-${i}`} value={formData[`destination-${i}`] || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                  <td><input type="date" name={`travelDate-${i}`} value={formData[`travelDate-${i}`] || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                  <td><input type="text" name={`seatType-${i}`} value={formData[`seatType-${i}`] || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                  <td><textarea name={`remarks-${i}`} value={formData[`remarks-${i}`] || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"></textarea></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col justify-center">
            <label className="block w-full text-gray-700 font-bold mb-2" htmlFor="numberOfPersons">Number of People:</label>
            <select name="numberOfPersons" value={formData.numberOfPersons} onChange={handleNumberOfPersonsChange} className="block appearance-none w-40 bg-white border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              {[...Array(50)].map((_, i) => (
                <option key={i} value={i+1} className="py-2 px-4">{i+1}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default VolvoBusBookingForm;

