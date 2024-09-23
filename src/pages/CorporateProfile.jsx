import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateCorporateProfile } from "../redux/slices/authSlice";
import CorporateSidebar from "../components/CorporateDashboard/CorporateSidebar"; // Corporate Sidebar component

function CorporateProfile() {
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [gstError, setGstError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getProfile());
      setProfileData(response.payload.data);
    };
    fetchData();
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to validate GST number
  const validateGSTNumber = (gstNumber) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gstNumber);
  };

  const handleSave = () => {
    // Validate GST Number before saving
    if (!validateGSTNumber(profileData.gstNumber)) {
      setGstError("Invalid GST Number. Please enter a valid 15-character GST.");
      return;
    } else {
      setGstError("");
    }

    // Proceed to save the profile
    dispatch(updateCorporateProfile(profileData));
    setIsEditing(false);
  };

  return (
    <div className="flex bg-gradient-to-r from-blue-300 to-purple-500">
      <CorporateSidebar />
      <main className="min-h-screen overflow-auto w-full opacity-85 filter backdrop-blur-md dark:backdrop-blur-md dark:opacity-80 p-8">
        <h2 className="text-2xl font-bold mb-4 text-center uppercase">
          <a href="corporatedashboard">Corporate Profile</a>
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={profileData.industry}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={profileData.companyName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Company ID
            </label>
            <input
              type="text"
              name="companyId"
              value={localStorage.getItem("companyId") || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Zip Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={profileData.zipCode}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              City
            </label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              State
            </label>
            <input
              type="text"
              name="state"
              value={profileData.state}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Address 1
            </label>
            <input
              type="text"
              name="address1"
              value={profileData.address1}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              value={profileData.address2}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Address 3
            </label>
            <input
              type="text"
              name="address3"
              value={profileData.address3}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Address 4
            </label>
            <input
              type="text"
              name="address4"
              value={profileData.address4}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Country Code
            </label>
            <input
              type="text"
              name="countryCode"
              value={profileData.countryCode}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Landline Number
            </label>
            <input
              type="text"
              name="landlineNumber"
              value={profileData.landlineNumber}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Landline Country Code
            </label>
            <input
              type="text"
              name="landlineCountryCode"
              value={profileData.landlineCountryCode}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Landline City Code
            </label>
            <input
              type="text"
              name="landlineCityCode"
              value={profileData.landlineCityCode}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Contact Department
            </label>
            <input
              type="text"
              name="contactDepartment"
              value={profileData.contactDepartment}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Contact Person First Name
            </label>
            <input
              type="text"
              name="contactPersonFirstName"
              value={profileData.contactPersonFirstName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Contact Person Second Name
            </label>
            <input
              type="text"
              name="contactPersonSecondName"
              value={profileData.contactPersonSecondName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Contact Person Last Name
            </label>
            <input
              type="text"
              name="contactPersonLastName"
              value={profileData.contactPersonLastName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Contact Person Gender
            </label>
            <select
              name="contactPersonGender"
              value={profileData.contactPersonGender}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Website
            </label>
            <input
              type="text"
              name="website"
              value={profileData.website}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              GST Number
            </label>
            <input
              type="text"
              name="gstNumber"
              value={profileData.gstNumber}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full p-2 border ${
                gstError ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {gstError && <p className="text-red-500 text-xs">{gstError}</p>}
          </div>

          {/* Repeat for all other fields like zipCode, country, etc. */}
        </div>

        {isEditing ? (
          <div className="flex justify-between mt-6">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mt-6"
          >
            Edit Profile
          </button>
        )}
      </main>
    </div>
  );
}

export default CorporateProfile;
