import React from "react";

const UserDetails = ({ userDetails }) => {
  if (!userDetails || userDetails.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      {userDetails.map((user) => (
        <div key={user.id} className="bg-white p-4 rounded shadow-md mb-4">
          <div className="mb-4">
            <h2 className="font-semibold">Company Information</h2>
            <p><strong>Company Name:</strong> {user.companyName}</p>
            <p><strong>Industry:</strong> {user.industry}</p>
            <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Address</h2>
            <p><strong>Country:</strong> {user.country}</p>
            <p><strong>State:</strong> {user.state}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>ZIP Code:</strong> {user.zipCode}</p>
            <p><strong>Address 1:</strong> {user.address1}</p>
            {user.address2 && <p><strong>Address 2:</strong> {user.address2}</p>}
            {user.address3 && <p><strong>Address 3:</strong> {user.address3}</p>}
            {user.address4 && <p><strong>Address 4:</strong> {user.address4}</p>}
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Contact Person</h2>
            <p><strong>First Name:</strong> {user.contactPersonFirstName}</p>
            <p><strong>Second Name:</strong> {user.contactPersonSecondName}</p>
            <p><strong>Last Name:</strong> {user.contactPersonLastName}</p>
            <p><strong>Gender:</strong> {user.contactPersonGender}</p>
            <p><strong>Department:</strong> {user.contactDepartment}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Contact Information</h2>
            {user.phoneNumber && (
              <>
                <p><strong>Mobile Number:</strong> +{user.countryCode}-{user.stateCode}-{user.phoneNumber}</p>
              </>
            )}
            {user.landlineNumber && (
              <>
                <p><strong>Landline Number:</strong> +{user.landlineCountryCode}-{user.landlineCityCode}-{user.landlineNumber}</p>
              </>
            )}
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
