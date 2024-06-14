import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPassport } from "../redux/slices/travelSlice";

const initialFormData = {
  totalNoOfTravellers: "",
  name: "",
  nationality: "",
  dateOfBirth: "",
  gender: "",
  passportNo: "",
  passportIssueDate: "",
  passportExpiryDate: "",
  passportValidityPeriod: "",
  placeOfIssue: "",
  nomineeName: "",
  nomineeGender: "",
  addressWithPinCode: "",
  passportFile: "", // Field for base64 string of the PDF file
  contactNo: "",
  email: "",
  holdPassportFrom: "",
  applyFrom: "",
  goTo: "",
  travelDuration: {
    entryDate: "",
    exitDate: "",
  },
};

const PassportForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          passportFile: reader.result, // Store base64 string directly in passportFile
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));

    const response = await dispatch(createPassport(formData));

    if (response?.payload?.data?.success) {
      navigate("/");
    }
  };

  return (
    <div
      className="bg-cover bg-center "
      style={{ 
        
        backgroundImage: `url('https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="min-h-[100vh] flex items-start justify-start py-5 px-10">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 bg-opacity-65 p-5 rounded-lg w-full lg:w-1/2 shadow-[0_0_10px_black]"
        >
          <h1 className="pb-4 font-bold text-center text-blue-700 uppercase text-2xl underline">
            Traveller Information
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {/* Other form fields */}
            <div>
              <label className="block text-sm font-medium">
                Total No of Travellers
              </label>
              <input
                type="number"
                name="totalNoOfTravellers"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.totalNoOfTravellers}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Nationality</label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              >
                <option value="">Select Nationality</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="British">British</option>
                {/* Add more options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Passport No</label>
              <input
                type="text"
                name="passportNo"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.passportNo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Passport Issue Date
              </label>
              <input
                type="date"
                name="passportIssueDate"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.passportIssueDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Passport Expiry Date
              </label>
              <input
                type="date"
                name="passportExpiryDate"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.passportExpiryDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Passport Validity Period
              </label>
              <input
                type="text"
                name="passportValidityPeriod"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.passportValidityPeriod}
                onChange={handleChange}
                placeholder="Please mention Years Months & Day(s)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Place of Issue
              </label>
              <input
                type="text"
                name="placeOfIssue"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.placeOfIssue}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Nominee Name</label>
              <input
                type="text"
                name="nomineeName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.nomineeName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Nominee Gender
              </label>
              <select
                name="nomineeGender"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.nomineeGender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Address with Pin Code
              </label>
              <input
                type="text"
                name="addressWithPinCode"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.addressWithPinCode}
                onChange={handleChange}
                placeholder="As Mentioned on the Passport"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Options to Upload the Passport (Per Person) in PDF Format
              </label>
              <input
                type="file"
                name="passportFile"
                accept="application/pdf"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Contact No.</label>
              <input
                type="text"
                name="contactNo"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.contactNo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                I Hold A Passport From
              </label>
              <select
                name="holdPassportFrom"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.holdPassportFrom}
                onChange={handleChange}
              >
                <option value="">Select Country / Region</option>
                {/* Add more options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                I am Applying From
              </label>
              <select
                name="applyFrom"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.applyFrom}
                onChange={handleChange}
              >
                <option value="">Select Country / Region</option>
                {/* Add more options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">I Am Going to</label>
              <select
                name="goTo"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.goTo}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                {/* Add more options here */}
              </select>
            </div>
            <div>
              {/* <label className="block text-sm font-medium">
                Travel Duration
              </label> */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Entry Date
                  </label>
                  <input
                    type="date"
                    name="entryDate"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.travelDuration.entryDate}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        travelDuration: {
                          ...prevData.travelDuration,
                          entryDate: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Exit Date</label>
                  <input
                    type="date"
                    name="exitDate"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.travelDuration.exitDate}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        travelDuration: {
                          ...prevData.travelDuration,
                          exitDate: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PassportForm;
