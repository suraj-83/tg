import React, { useState } from "react";
import { createTrainTravel } from "../../redux/slices/travelSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const TrainBookingForm = () => {
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
      trainNo: "",
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
  const handleRemovePerson = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
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
      trainNo: "",
      timePreference: "",
      adult: "",
      children: "",
    });
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
      const response = await dispatch(createTrainTravel(formData));
      console.log(response);

      if (response?.payload?.data?.success) {
        navigate("/");
      }
    } else {
      alert("Please fill all the fields");
    }

    console.log(formData);
  };


  return (
    <div
      className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
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
              Train Booking Request Form
            </h1>
          </div>
          <div className="overflow-auto">
            <table className="min-w-full bg-blue-100  text-sm">
              <thead>
                <tr>
                  <th className="border px-2 border-gray-300 py-2">
                    Full Name
                  </th>
                  <th className="border px-2 border-gray-300 py-2">
                    Date of Birth
                  </th>
                  <th className="border px-2 border-gray-300 py-2">Gender</th>
                  <th className="border px-2 border-gray-300 py-2">
                    Contact No
                  </th>
                  <th className="border px-2 border-gray-300 py-2">Email Id</th>
                  <th className="border px-2 border-gray-300 py-2">From</th>
                  <th className="border px-2 border-gray-300 py-2">To</th>
                  <th className="border px-2 border-gray-300 py-2">
                    Class to Travel
                  </th>
                  <th className="border px-2 border-gray-300 py-2">
                    Travel Date
                  </th>
                  <th className="border px-2 border-gray-300 py-2">Train No</th>
                  <th className="border px-2 border-gray-300 py-2">
                    Adult (12 Yrs and above)
                  </th>
                  <th className="border px-2 border-gray-300 py-2">
                    Children (06-12 Yrs)
                  </th>
                  <th className="border px-2 border-gray-300 py-2">
                    Time Preference
                  </th>
                  <th className="border px-2 border-gray-300 py-2">
                  Action
                  </th>
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
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border px-2 border-gray-300 py-2">
                      <input
                        type="date"
                        name="dob"
                        value={person.dob}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 bg-blue-100 border border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border px-2 border-gray-300 py-2">
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
                    <td className="border px-2 border-gray-300 bg-blue-100 py-2">
                      <input
                        type="text"
                        maxLength="10"
                        title="10 digit mobile number"
                        pattern="[0-9]{10}"
                        name="contactNo"
                        value={person.contactNo}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border px-2 border-gray-300 py-2">
                      <input
                        type="email"
                        name="email"
                        value={person.email}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border px-2 border-gray-300 py-2">
                      <input
                        type="text"
                        name="travelFrom"
                        value={person.travelFrom}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border px-2 border-gray-300  py-2">
                      <input
                        type="text"
                        name="travelTo"
                        value={person.travelTo}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border px-2 border-gray-300 py-2">
                      <select
                        name="classOfTravel"
                        value={person.classOfTravel}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      >
                        <option value="">--Select--</option>
                        <option value="Anubhuti Class (EA)">
                          Anubhuti Class (EA)
                        </option>
                        <option value="AC First Class (1A)">
                          AC First Class (1A)
                        </option>
                        <option value="Vistadome AC (EV)">
                          Vistadome AC (EV)
                        </option>
                        <option value="Exec. Chair Car (EC)">
                          Exec. Chair Car (EC)
                        </option>
                        <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
                        <option value="First Class (FC)">
                          First Class (FC)
                        </option>
                        <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
                        <option value="AC 3 Economy (3E)">
                          AC 3 Economy (3E)
                        </option>
                        <option value="Vistadome Chair Car (VC)">
                          Vistadome Chair Car (VC)
                        </option>
                        <option value="AC Chair car (CC)">
                          AC Chair car (CC)
                        </option>
                        <option value="Sleeper (SL)">Sleeper (SL)</option>
                        <option value="Vistadome Non AC (VS)">
                          Vistadome Non AC (VS)
                        </option>
                        <option value="Second Sitting (2S)">
                          Second Sitting (2S)
                        </option>
                      </select>
                    </td>
                    <td className="border px-2 border-gray-300 py-2">
                      <input
                        type="date"
                        name="travelDate"
                        value={person.travelDate}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border px-2 border-gray-300 py-2">
                      <input
                        type="text"
                        name="trainNo"
                        value={person.trainNo}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Train No."
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
                    </td>
                    <td className="border px-2 border-gray-300 py-2">
                      <select
                        name="adult"
                        value={person.adult}
                        onChange={(e) => handleChange(e, index)}
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
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
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
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
                      <input
                        type="time"
                        name="timePreference"
                        value={person.timePreference}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Time Preference"
                        className="block w-full px-2 py-2 border bg-blue-100 border-gray-300 rounded focus:outline-none"
                      />
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
          <div className="flex bg-blue-100 w-full justify-between">
            {formData.length < MAX_PERSONS && (
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 mt-4 mb-4 ml-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleAddPerson}
              >
                Add Person
              </button>
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 mt-4 mb-4 mr-4 uppercase rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Book now
            </button>
          </div>
        </form>
      </div>

      {/* Smaller and medium screens */}
      <div className="block lg:hidden">
        <div className="min-h-[40vh] flex text-sm items-center justify-center md:p-24">
          <form
            onSubmit={handleSubmit}
            className="bg-blue-100 bg-opacity-95 p-5 rounded-lg  w-full shadow-[0_0_10px_black]"
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
                Train Booking Request Form
              </h1>
            </div>
            {formData.map((person, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Person {index + 1}
                </h3>
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`fullName-${index}`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={person.fullName}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border border-gray-300 bg-blue-100 opacity-95 rounded focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`dob-${index}`}
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={person.dob}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`gender-${index}`}
                    >
                      Gender
                    </label>
                    <input
                      type="text"
                      name="gender"
                      value={person.gender}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Gender"
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
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
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`contactNo-${index}`}
                    >
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
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`email-${index}`}
                    >
                      Email Id
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={person.email}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`travelFrom-${index}`}
                    >
                      From
                    </label>
                    <input
                      type="text"
                      name="travelFrom"
                      value={person.travelFrom}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`travelTo-${index}`}
                    >
                      To
                    </label>
                    <input
                      type="text"
                      name="travelTo"
                      value={person.travelTo}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`classOfTravel-${index}`}
                    >
                      Class to Travel
                    </label>
                    <select
                      name="classOfTravel"
                      value={person.classOfTravel}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
                    >
                      <option value="">--Select--</option>
                      <option value="Anubhuti Class (EA)">
                        Anubhuti Class (EA)
                      </option>
                      <option value="AC First Class (1A)">
                        AC First Class (1A)
                      </option>
                      <option value="Vistadome AC (EV)">
                        Vistadome AC (EV)
                      </option>
                      <option value="Exec. Chair Car (EC)">
                        Exec. Chair Car (EC)
                      </option>
                      <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
                      <option value="First Class (FC)">First Class (FC)</option>
                      <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
                      <option value="AC 3 Economy (3E)">
                        AC 3 Economy (3E)
                      </option>
                      <option value="Vistadome Chair Car (VC)">
                        Vistadome Chair Car (VC)
                      </option>
                      <option value="AC Chair car (CC)">
                        AC Chair car (CC)
                      </option>
                      <option value="Sleeper (SL)">Sleeper (SL)</option>
                      <option value="Vistadome Non AC (VS)">
                        Vistadome Non AC (VS)
                      </option>
                      <option value="Second Sitting (2S)">
                        Second Sitting (2S)
                      </option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`travelDate-${index}`}
                    >
                      Travel Date
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={person.travelDate}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`trainNo-${index}`}
                    >
                      Train No
                    </label>
                    <input
                      type="text"
                      name="trainNo"
                      value={person.trainNo}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Train No."
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`adult-${index}`}
                    >
                      Adult (12 Yrs and above)
                    </label>
                    <select
                      name="adult"
                      value={person.adult}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
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
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`children-${index}`}
                    >
                      Children (06-12 Yrs)
                    </label>
                    <select
                      name="children"
                      value={person.children}
                      onChange={(e) => handleChange(e, index)}
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
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
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`timePreference-${index}`}
                    >
                      Time Preference
                    </label>
                    <input
                      type="time"
                      name="timePreference"
                      value={person.timePreference}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Time Preference"
                      className="block w-full px-3 py-2 border bg-blue-100 opacity-95 border-gray-300 rounded focus:outline-none"
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

export default TrainBookingForm;
