import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { updateVendorProfile } from "../../redux/slices/vendorDashboardSlice";
import VendorSidebar from "./VendorSidebar";
import { getProfile } from "../../redux/slices/authSlice";

function VendorProfile() {
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState({});
  const [newService, setNewService] = useState(""); // For adding new services
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getProfile());
      const profile = response.payload.data;
      
      // Ensure services is an array
      const services = Array.isArray(profile.services) ? profile.services : [];
      
      setProfileData({
        ...profile,
        services,
      });
    };
    fetchData();
  }, [dispatch]);
  
  console.log(profileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddService = () => {
    if (newService && !profileData.services.includes(newService)) {
      setProfileData((prevState) => ({
        ...prevState,
        services: [...prevState.services, newService],
      }));
      setNewService("");
    }
  };

  const handleSave = () => {
    // Dispatch to save the updated profile
    dispatch(updateVendorProfile({
      ...profileData, 
      services: profileData.services // Ensure services array is passed
    })).then(response => {
      console.log("Profile updated successfully:", response);
      
      dispatch(getProfile()).then(response => {
        const profile = response.payload.data;
        setProfileData({
          ...profile,
          services: Array.isArray(profile.services) ? profile.services : [],
        });
        setIsEditing(false);
      }).catch(error => {
        console.error("Failed to fetch updated profile:", error);
      });
    }).catch(error => {
      console.error("Failed to update profile:", error);
    });
  };
  

  return (
    <div className="flex bg-gradient-to-r from-green-300 to-blue-500">
    <VendorSidebar />
    <main className="min-h-screen w-full overflow-auto opacity-85 filter backdrop-blur-md dark:backdrop-blur-md dark:opacity-80 p-6">
   
        <h2 className="text-2xl font-bold mb-4 text-center uppercase">
          <a href="vendordashboard">Vendor Profile</a>
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Existing Form Fields */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Area of Work
            </label>
            <input
              type="text"
              name="areaOfWork"
              value={profileData.areaOfWork}
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
              Website
            </label>
            <input
              type="url"
              name="website"
              value={profileData.website}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* New Address and Location Fields */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">
              Address Line 1
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
              Address Line 2
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
              Address Line 3
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
              Address Line 4
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
            <label className="block text-gr9y- font-extrabold uppercase">
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
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profileData.email}
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
          {/* Contact Person Fields (existing) */}
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
              Contact Person Middle Name
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
          {/* ...other fields for contact person */}
        </div>

        {/* Add Services Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Services</h3>
          {/* <ul className="list-disc pl-6">
            {profileData.services &&
              JSON.parse(profileData.services).map((service, index) => (
                <li key={index}>{service}</li>
              ))}
          </ul> */} 
<ul className="list-disc pl-6">
  {profileData.services && profileData.services.length > 0 ? (
    profileData.services.map((service, index) => (
      <li key={index}>{service}</li>
    ))
  ) : (
    <li>No services added yet.</li>
  )}
</ul>

{isEditing && (
            <div className="mt-4">
              <select
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                className="p-2 border border-gray-300 rounded mr-2"
              >
                <option value="">Select Service</option>
                <option value="Cab">Cab</option>
                <option value="Hotel">Hotel</option>
                <option value="Event">Event</option>
              </select>
              <button
                onClick={handleAddService}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Add Service
              </button>
            </div>
          )}
        </div>

        {/* Edit and Save Buttons */}
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

export default VendorProfile;
