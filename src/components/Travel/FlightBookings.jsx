import React, { useState } from 'react'

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
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
    flightNosPreference: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center">
        <p className="bg-sky-900 p-2 text-white text-2xl font-bold w-full text-center">Flight Booking Request Form</p>
        <table className="w-full border border-black border-solid mb-5">
          <thead className='text-white bg-sky-900'>
            <tr>
              <th className="border px-4 py-2">Tour Plan</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Date of Birth</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Contact Nos</th>
              <th className="border px-4 py-2">Email Id</th>            
              <th className="border px-4 py-2">From</th>
              <th className="border px-4  py-2">To</th>              
              <th className="border px-4  py-2">Class to Travel</th>
              <th className="border px-4 py-2">Travel Date</th>
              <th className="border  px-4 py-2">Remarks
                <th className="border px-4 py-2">Flight No</th>
              <th className="border px-4 py-2">Time Preference</th>
              </th>              
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
                <td> <td><input type="text" maxLength="10" title="10 digit mobile number" pattern="[0-9]{10}" name={`contactNo${i}`} value={formData[`contactNo${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td></td>
                <td><input type="email" name={`email${i}`} value={formData[`email${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td><input type="text" name={`travelFrom${i}`} value={formData[`travelFrom${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td><input type="text" name={`travelTo${i}`} value={formData[`travelTo${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td>
                  <select name={`classToTravel${i}`} value={formData[`classToTravel${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none">
                    <option value="">--Select--</option>
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="First Class">First Class</option>
                  </select>
                </td>
                <td><input type="date" name={`travelDate${i}`} value={formData[`travelDate${i}`]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td>
                <td><input type="text" name={`flightNo${i}`} value={formData[`flightNo${i}`]} onChange={handleChange} placeholder='Flight No.' className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" /></td>
                <td>
                  <input type="time" name={`timePreference${i}`} value={formData[`timePreference${i}`]} onChange={handleChange} placeholder='Time Preference' className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" />
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col justify-center">
        <label className=" w-full text-gray-700 font-bold mb-2" htmlFor="numberOfPersons">Number of Persons</label>
        <select name="numberOfPersons" value={formData.numberOfPersons} onChange={handleChange} className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            {[...Array(50)].map((_, i) => (
              <option key={i} value={i+1} className="py-2 px-4">{i+1}</option>
            ))}
          </select>
        </div>
          
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default FlightBookingForm
