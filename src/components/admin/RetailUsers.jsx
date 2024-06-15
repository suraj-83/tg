import React from "react";
import { useSelector } from "react-redux";

const UserDetails = () => {
  // Assuming that the user details are stored in the Redux state under `userDetails`
  const userDetails = useSelector((state) => state.auth.userDetails);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <h2 className="font-semibold">Personal Information</h2>
          <p><strong>First Name:</strong> {userDetails.firstName}</p>
          <p><strong>Second Name:</strong> {userDetails.secondName}</p>
          <p><strong>Last Name:</strong> {userDetails.lastName}</p>
          <p><strong>Gender:</strong> {userDetails.gender}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold">Address</h2>
          <p><strong>Residential Address:</strong> {userDetails.residentialAddress}</p>
          <p><strong>ZIP Code:</strong> {userDetails.zipCode}</p>
          <p><strong>City:</strong> {userDetails.city}</p>
          <p><strong>State:</strong> {userDetails.state}</p>
          <p><strong>Country:</strong> {userDetails.country}</p>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold">Contact Information</h2>
          <p><strong>Phone Number:</strong> +{userDetails.countryCode}-{userDetails.stateCode}-{userDetails.phoneNumber1}</p>
          {userDetails.phoneNumber2 && (
            <p><strong>Alternate Phone Number:</strong> {userDetails.phoneNumber2}</p>
          )}
        </div>

        <div className="mb-4">
          <h2 className="font-semibold">Account Details</h2>
          <p><strong>Username:</strong> {userDetails.username}</p>
          <p><strong>How did you come to know about TGES:</strong> {userDetails.howDidYouKnow}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
