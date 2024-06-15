import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { updateUserProfile } from "../redux/slices/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const initialProfileData = {
    firstName: user?.retailUser?.firstName || "",
    lastName: user?.retailUser?.lastName || "",
    email: user?.email || "",
    phone: user?.retailUser?.phoneNumber1 || "",
    address1: user?.retailUser?.residentialAddress || "",
    address2: user?.address2 || "",
    city: user?.city || "",
    state: user?.state || "",
    zipCode: user?.zipCode || "",
    country: user?.country || "",
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user?.retailUser?.firstName || "",
        lastName: user?.retailUser?.lastName || "",
        email: user?.email || "",
        phone: user?.retailUser?.phoneNumber1 || "",
        address1: user?.retailUser?.residentialAddress || "",
        address2: user?.address2 || "",
        city: user?.city || "",
        state: user?.state || "",
        zipCode: user?.zipCode || "",
        country: user?.country || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateUserProfile(profileData));
    setIsEditing(false);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-950">
      <div className="bg-white mt-10 p-6 rounded shadow-md max-w-md mx-auto opacity-85">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        <div className=" grid grid-cols-3  gap-5">
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
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
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address 1</label>
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
            <label className="block text-gray-700">Address 2</label>
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
            <label className="block text-gray-700">City</label>
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
            <label className="block text-gray-700">State</label>
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
            <label className="block text-gray-700">ZIP Code</label>
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
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              disabled
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        {isEditing ? (
          <div className="flex justify-between">
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
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
