// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateRetailProfile } from "../redux/slices/authSlice";
// import RetailSidebar from "../components/RetailDashboard/UserSidebar"; // Retail Sidebar component

// function RetailProfile() {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   const [profileData, setProfileData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(null); // Store the uploaded profile photo
//   const [previewPhoto, setPreviewPhoto] = useState(null); // Store preview of the profile photo

//   useEffect(() => {
//     setProfileData(user);
//     setPreviewPhoto(user?.profilePhoto || ""); // Set the initial profile photo if exists
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleProfilePhotoChange = (e) => {
//     const file = e.target.files[0];
//     setProfilePhoto(file); // Store the selected file
//     setPreviewPhoto(URL.createObjectURL(file)); // Preview the selected image
//   };

//   const handleSave = () => {
//     const updatedData = { ...profileData, profilePhoto }; // Include profilePhoto in the update
//     dispatch(updateRetailProfile(updatedData));
//     setIsEditing(false);
//   };
//   return (
//     <div className="flex bg-gradient-to-r from-green-300 to-blue-500">
//       <RetailSidebar />
//       <main className="min-h-screen w-full overflow-auto opacity-85 filter backdrop-blur-md dark:backdrop-blur-md dark:opacity-80 p-6">
//       <h2 className="text-2xl font-bold mb-10 mt-10 text-center uppercase">
//           <a href="retaildashboard">Retail Profile</a>
//         </h2>
//         {/* Profile Photo Upload */}
//         <div className="grid grid-cols-5 gap-2">
//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={profileData.firstName}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
          
//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Second Name</label>
//             <input
//               type="text"
//               name="secondName"
//               value={profileData.secondName}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={profileData.lastName}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Residential Address</label>
//             <input
//               type="text"
//               name="residentialAddress"
//               value={profileData.residentialAddress}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={profileData.email}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Zip Code</label>
//             <input
//               type="text"
//               name="zipCode"
//               value={profileData.zipCode}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Country</label>
//             <input
//               type="text"
//               name="country"
//               value={profileData.country}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">City</label>
//             <input
//               type="text"
//               name="city"
//               value={profileData.city}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">State</label>
//             <input
//               type="text"
//               name="state"
//               value={profileData.state}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Phone Number 1</label>
//             <input
//               type="text"
//               name="phoneNumber1"
//               value={profileData.phoneNumber1}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Phone Number 2</label>
//             <input
//               type="text"
//               name="phoneNumber2"
//               value={profileData.phoneNumber2}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">State Code</label>
//             <input
//               type="text"
//               name="stateCode"
//               value={profileData.stateCode}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Country Code</label>
//             <input
//               type="text"
//               name="countryCode"
//               value={profileData.countryCode}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Gender</label>
//             <select
//               name="gender"
//               value={profileData.gender}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Occupation</label>
//             <input
//               type="text"
//               name="occupation"
//               value={profileData.occupation}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Company Name</label>
//             <input
//               type="text"
//               name="companyName"
//               value={profileData.companyName}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Designation</label>
//             <input
//               type="text"
//               name="designation"
//               value={profileData.designation}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Company Address</label>
//             <input
//               type="text"
//               name="companyAddress"
//               value={profileData.companyAddress}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">How Did You Know</label>
//             <input
//               type="text"
//               name="howDidYouKnow"
//               value={profileData.howDidYouKnow}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Preferred Currency</label>
//             <input
//               type="text"
//               name="preferredCurrency"
//               value={profileData.preferredCurrency}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-900 font-extrabold uppercase">Website</label>
//             <input
//               type="text"
//               name="website"
//               value={profileData.website}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//         </div>

//         <div className="flex justify-between">
//           {!isEditing ? (
//             <button
//               onClick={() => setIsEditing(true)}
//               className="bg-blue-600 text-white px-4 py-2 w-full rounded-lg shadow-md hover:bg-blue-700"
//             >
//               Edit
//             </button>
//           ) : (
//             <>
//               <button
//                 onClick={handleSave}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setIsEditing(false)}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 ml-2"
//               >
//                 Cancel
//               </button>
//             </>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default RetailProfile;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRetailProfile } from "../redux/slices/authSlice";
import RetailSidebar from "../components/RetailDashboard/UserSidebar"; // Retail Sidebar component

function RetailProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileData(user);
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
    dispatch(updateRetailProfile(profileData));
    setIsEditing(false);
  };

  return (
    <div className="flex bg-gradient-to-r from-green-300 to-blue-500">
      <RetailSidebar />
      <main className="min-h-screen w-full overflow-auto opacity-85 filter backdrop-blur-md dark:backdrop-blur-md dark:opacity-80 p-6">
        <h2 className="text-2xl font-bold mb-10 mt-10 text-center uppercase">
          <a href="retaildashboard">Retail Profile</a>
        </h2>
        {/* Profile Input Fields */}
        <div className="grid grid-cols-5 gap-2">
          {/* First Name Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Second Name Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Second Name</label>
            <input
              type="text"
              name="secondName"
              value={profileData.secondName || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Last Name Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Residential Address Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Residential Address</label>
            <input
              type="text"
              name="residentialAddress"
              value={profileData.residentialAddress || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Zip Code Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={profileData.zipCode || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Country Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Country</label>
            <input
              type="text"
              name="country"
              value={profileData.country || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* City Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">City</label>
            <input
              type="text"
              name="city"
              value={profileData.city || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* State Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">State</label>
            <input
              type="text"
              name="state"
              value={profileData.state || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Phone Number 1 Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Phone Number 1</label>
            <input
              type="text"
              name="phoneNumber1"
              value={profileData.phoneNumber1 || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Phone Number 2 Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Phone Number 2</label>
            <input
              type="text"
              name="phoneNumber2"
              value={profileData.phoneNumber2 || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* State Code Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">State Code</label>
            <input
              type="text"
              name="stateCode"
              value={profileData.stateCode || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Country Code Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Country Code</label>
            <input
              type="text"
              name="countryCode"
              value={profileData.countryCode || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Gender</label>
            <select
              name="gender"
              value={profileData.gender || "Male"}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Occupation Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={profileData.occupation || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Company Name Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={profileData.companyName || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Designation Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">Designation</label>
            <input
              type="text"
              name="designation"
              value={profileData.designation || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* GST Field */}
          <div className="mb-4">
            <label className="block text-gray-900 font-extrabold uppercase">GST</label>
            <input
              type="text"
              name="gst"
              value={profileData.gst || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Edit and Save Button */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Edit
          </button>
          {isEditing && (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-6 py-2 rounded"
            >
              Save
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default RetailProfile;
