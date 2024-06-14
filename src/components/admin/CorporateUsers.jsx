import React from "react";
import { useSelector } from "react-redux";

const UserDetails = () => {
  // Assuming that the user details are stored in the Redux state under `userDetails`
  const userDetails = useSelector((state) => state.userDetails);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <h2 className="font-semibold">Company Information</h2>
          <p><strong>Company Name:</strong> {userDetails.companyName}</p>
          <p><strong>Industry:</strong> {userDetails.industry}</p>
          <p><strong>Website:</strong> <a href={userDetails.website} target="_blank" rel="noopener noreferrer">{userDetails.website}</a></p>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold">Address</h2>
          <p><strong>Country:</strong> {userDetails.country}</p>
          <p><strong>State:</strong> {userDetails.state}</p>
          <p><strong>City:</strong> {userDetails.city}</p>
          <p><strong>ZIP Code:</strong> {userDetails.zipCode}</p>
          <p><strong>Address 1:</strong> {userDetails.address1}</p>
          {userDetails.address2 && <p><strong>Address 2:</strong> {userDetails.address2}</p>}
          {userDetails.address3 && <p><strong>Address 3:</strong> {userDetails.address3}</p>}
          {userDetails.address4 && <p><strong>Address 4:</strong> {userDetails.address4}</p>}
        </div>

        <div className="mb-4">
          <h2 className="font-semibold">Contact Person</h2>
          <p><strong>First Name:</strong> {userDetails.contactPersonFirstName}</p>
          <p><strong>Second Name:</strong> {userDetails.contactPersonSecondName}</p>
          <p><strong>Last Name:</strong> {userDetails.contactPersonLastName}</p>
          <p><strong>Gender:</strong> {userDetails.contactPersonGender}</p>
          <p><strong>Department:</strong> {userDetails.contactDepartment.title}</p>
          {userDetails.contactDepartment.title === "Other" && <p><strong>Other Department:</strong> {userDetails.contactDepartment.otherTitle}</p>}
        </div>

        <div className="mb-4">
          <h2 className="font-semibold">Contact Information</h2>
          {userDetails.phoneNumber && (
            <>
              <p><strong>Mobile Number:</strong> +{userDetails.countryCode}-{userDetails.stateCode}-{userDetails.phoneNumber}</p>
            </>
          )}
          {userDetails.landlineNumber && (
            <>
              <p><strong>Landline Number:</strong> +{userDetails.landlineCountryCode}-{userDetails.landlineCityCode}-{userDetails.landlineNumber}</p>
            </>
          )}
          <p><strong>Email:</strong> {userDetails.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
