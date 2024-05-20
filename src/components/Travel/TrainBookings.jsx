import React, { useState } from 'react';

const TrainBookingForm = () => {
const [formData, setFormData] = useState({
    serialNo: 1,
    fullName: '',
    ageOrDOB: '',
    gender: '',
    contactNo: '',
    email: '',
    travelFrom: '',
    travelTo: '',
    classToTravel: '',
    travelDate: '',
    remarks: '',
    flightNo: '',
    timePreference: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value,
    });

    if (name === 'ageOrDOB') {
    const dob = new Date(value);
    const today = new Date();
      const age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    e.target.parentNode.nextElementSibling.textContent = age;
    }
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
        <p className="bg-sky-900 p-2 text-white text-2xl font-bold w-full text-center">Train Booking Request Form</p>
        <table className="w-full border border-black border-solid mb-5">
          <thead className='text-white bg-sky-900'>
            <tr>
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Date of Birth</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Contact Nos</th>
              <th className="border px-4 py-2">Email Id</th>
              <th className="border px-4 py-2 " colspan="2"><span className='bottom-20 right-1'>Travel itinerary</span>
              <th className="border px-4 py-2">From</th>
              <th className="border px-4 py-2">To</th></th>
              <th className="border px-4 py-2">Class to Travel</th>
              <th className="border px-4 py-2">Travel Date</th>
              <th className="border px-4 py-2">Remarks
                <th className="border px-4 py-2">Train No</th>
              <th className="border px-4 py-2">Time Preference</th></th>              
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: formData.numberOfPersons || 1 }, (_, i) => (
              <tr key={i}>
                <td>
                  <input type="number" name={`serialNo${i}`} value={i+1} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" readOnly />
                </td>
                <td><input type="text" name={`fullName${i}`} value={formData[`fullName${i}`]} onChange={handleChange} className=" px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td>
                  <input type="date" name={`ageOrDOB${i}`} value={formData[`ageOrDOB${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" />    
                </td>
                <td><input type="text" name={`gender${i}`} value={formData[`gender${i}`]} onChange={handleChange} placeholder='gender' className="px-2 py-2 border border-gray-300 rounded focus:outline-none" list="genderOptions" /></td>
                <datalist id="genderOptions">
                  <option value="Male" />
                  <option value="Female" />
                  <option value="Other" />
                </datalist>
                <td><input type="text" maxLength="10" title="10 digit mobile number" pattern="[0-9]{10}" name={`contactNo${i}`} value={formData[`contactNo${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td><input type="email" name={`email${i}`} value={formData[`email${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td><input type="text" name={`travelFrom${i}`} value={formData[`travelFrom${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td><input type="text" name={`travelTo${i}`} value={formData[`travelTo${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td>
                  <select name={`classToTravel${i}`} value={formData[`classToTravel${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none">
                    <option value="">--Select--</option>
                    <option value="AC">1AC</option>
                    <option value="Non AC">2AC</option>
                    <option value="AC">3AC</option>
                    <option value="Non AC">Sleeper</option>
                    <option value="AC">General</option>
                  </select>
                </td>
                <td><input type="date" name={`travelDate${i}`} value={formData[`travelDate${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td>
                <td><input type="text" name={`remarks${i}`} value={formData[`remarks${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td><input type="text" name={`classToTravel${i}`} value={formData[`classToTravel${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <label className="text-white p-2 text-2xl font-bold w-40 text-center">Number of Persons</label>
        <select name="numberOfPersons" value={formData.numberOfPersons} onChange={handleChange} className="w-40 px-3 py-2 border border-gray-300 rounded focus:outline-none">
            {[...Array(50)].map((_, i) => (
              <option key={i} value={i+1}>{i+1}</option>
            ))}
          </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
);
};

export default TrainBookingForm;
