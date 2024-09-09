import React, { useState } from "react";
import { createVolvoBusTravel } from "../../redux/slices/travelSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/volvo-bus.webp"

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

  let MAX_PERSONS = 10;

  const handleAddPerson = () => {
    const updatedFormData = [...formData];
    updatedFormData.push({
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
    const isAllFieldsFilled =
      formData.every(
        (person) =>
          Object.values(person).every((value) => value !== "")
      );

    if (isAllFieldsFilled) {
      const response = await dispatch(createVolvoBusTravel(formData));
      console.log(response);

      if (response?.payload?.data?.success) {
        navigate("/");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
      <div className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover" style={{ backgroundImage: `url('${Img}')` }}>
        {/* Larges Screens */}
      <div className="hidden lg:block">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 bg-opacity-75  rounded-lg min-w-screen min-h-screen shadow-[0_0_10px_black]"
        >
          <div>
            <h1 className="pb-4 font-bold pt-4 text-center bg-blue-100 text-blue-700 uppercase text-2xl underline">
            
    <button type="button" onClick={() => navigate(-1)} className="flex items-center text-blue-500 hover:text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="no-underline block">Go Back</span>
    </button>
              Volvo Bus Booking Request Form
            </h1>
          </div>
          <div className="overflow-auto">
              <table className="min-w-full bg-blue-100  text-sm">
              <thead>
                <tr>
                  <th className="border px-4 border-gray-300 py-2">Full Name</th>
                  <th className="border px-4 border-gray-300 py-2">Date of Birth</th>
                  <th className="border px-4 border-gray-300 py-2">Gender</th>
                  <th className="border px-4 border-gray-300 py-2">Contact No</th>
                  <th className="border px-4 border-gray-300 py-2">Email Id</th>
                  <th className="border px-4 border-gray-300 py-2">Pickup Location</th>
                  <th className="border px-4 border-gray-300 py-2">Destination</th>
                  <th className="border px-4 border-gray-300 py-2">Travel Date</th>
                  <th className="border px-4 border-gray-300 py-2">Seat Type</th>
                  <th className="border px-4 border-gray-300 py-2">Bus No</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((person, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="fullName"
                        value={person.fullName}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-3 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="date"
                        name="dob"
                        value={person.dob}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="gender"
                        value={person.gender}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Gender"
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                        list="genderOptions"
                      />
                      <datalist id="genderOptions">
                        <option value="Male" />
                        <option value="Female" />
                        <option value="Other" />
                      </datalist>
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        maxLength="10"
                        title="10 digit mobile number"
                        pattern="[0-9]{10}"
                        name="contactNo"
                        value={person.contactNo}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="email"
                        name="email"
                        value={person.email}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="pickupLocation"
                        value={person.pickupLocation}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="destination"
                        value={person.destination}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="date"
                        name="travelDate"
                        value={person.travelDate}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <select
                        name="seatType"
                        value={person.seatType}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      >
                        <option value="">--Select--</option>
                        <option value="Sleeper">Sleeper</option>
                        <option value="Semi-Sleeper">Semi-Sleeper</option>
                        <option value="Regular">Regular</option>
                      </select>
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="busNo"
                        value={person.busNo}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex bg-blue-100 w-full justify-between">
          {formData.length < MAX_PERSONS && (
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 mt-4 mb-4 ml-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleAddPerson}
              >
                Add Person
              </button>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 uppercase
            text-white px-4 py-2 mt-4 mb-4 mr-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Book Now
          </button>
          </div>
        </form>
      </div>
      {/* Smaller and medium screens */}
      <div className="block lg:hidden">
      <div className="min-h-[40vh] flex items-center text-sm justify-center md:p-24">
    <form
      onSubmit={handleSubmit}
      className="bg-blue-100 bg-opacity-95 p-5 rounded-lg  w shadow-[0_0_10px_black]"
    >
        <div>
        <h1 className="pb-4 font-bold text-sm text-center text-blue-700 uppercase md:text-2xl underline">
        
    <button type="button" onClick={() => navigate(-1)} className="flex items-center text-blue-500 hover:text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="no-underline block">Go Back</span>
    </button>
        Volvo Bus Booking Request Form
          </h1>
        </div>        
        {formData.map((person, index) => (
          <div key={index} className="mb-6 border-b-2 border-gray-300 pb-4">
            <h3 className="text-xl font-semibold mb-4">Person {index + 1}</h3>
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`fullName-${index}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={person.fullName}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`dob-${index}`}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={person.dob}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
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
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
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
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
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
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
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
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
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
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              </div>
              <div className="grid grid-cols-3 gap-4">

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor={`travelDate-${index}`}>
                  Travel Date
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={person.travelDate}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
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
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
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
                  className="block w-full px-3 bg-blue-100 opacity-95 py-2 border border-gray-300 rounded focus:outline-none"
                />
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
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    
      </div>
      </div>
      
    
  );
};

export default BusBookingForm;
