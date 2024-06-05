import React, { useState } from "react";

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
  passportFile: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formObject = Object.fromEntries(data.entries());
    formObject.travelDuration = {
      entryDate: data.get("entryDate"),
      exitDate: data.get("exitDate"),
    };
    console.log(JSON.stringify(formObject, null, 2));
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500857527770-d5289b39e342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="min-h-[100vh] flex items-center justify-center p-24">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 bg-opacity-95 p-5 rounded-lg w-full lg:w-1/2 shadow-[0_0_10px_black]"
        >
          <h1 className="pb-4 font-bold text-center text-blue-700 uppercase text-2xl underline">
            Traveller Information
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Total No of Travellers
              </label>
              <input
                type="number"
                name="totalNoOfTravellers"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Nationality</label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    nationality: e.target.value,
                  }))
                }
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              >
                <option value="">Select Nationality</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Australian">Australian</option>
                <option value="Brazilian">Brazilian</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Italian">Italian</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Mexican">Mexican</option>
                <option value="Russian">Russian</option>
                <option value="South African">South African</option>
                <option value="Turkish">Turkish</option>
                <option value="Egyptian">Egyptian</option>
                <option value="Nepalese">Nepalese</option>
                <option value="Bangladeshi">Bangladeshi</option>
                <option value="South Korean">South Korean</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Filipino">Filipino</option>
                <option value="Philippine">Philippine</option>
                <option value="Malaysian">Malaysian</option>
                <option value="Thai">Thai</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Sri Lankan">Sri Lankan</option>
                <option value="Canadian">Canadian</option>
                {/* add more options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Nominee Name</label>
              <input
                type="text"
                name="nomineeName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Nominee Gender
              </label>
              <select
                name="nomineeGender"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Contact No</label>
              <input
                type="text"
                name="contactNo"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                I Hold A Passport From
              </label>
              <select
                name="holdPassportFrom"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
              >
                <option value="">Select Country</option>
                {/* Add more options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Travel Duration
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Entry Date
                  </label>
                  <input
                    type="date"
                    name="entryDate"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Exit Date</label>
                  <input
                    type="date"
                    name="exitDate"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
