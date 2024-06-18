import React from "react";

const UserDetails = () => {

  const context = React.useContext(React.createContext())
  const { userDetails = [] } = context || {}

  if (!userDetails || userDetails.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      {userDetails.map((user) => (
        <div key={user.id} className="bg-white p-4 rounded shadow-md mb-4">
          <div className="mb-4">
            <h2 className="font-semibold">Personal Information</h2>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Second Name:</strong> {user.secondName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {user.Occupation && <p><strong>Occupation:</strong> {user.Occupation}</p>}
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Address</h2>
            <p><strong>Residential Address:</strong> {user.residentialAddress}</p>
            <p><strong>ZIP Code:</strong> {user.zipCode}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>State:</strong> {user.state}</p>
            <p><strong>Country:</strong> {user.country}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Contact Information</h2>
            <p><strong>Phone Number:</strong> +{user.countryCode}-{user.stateCode}-{user.phoneNumber1}</p>
            {user.phoneNumber2 && (
              <p><strong>Alternate Phone Number:</strong> {user.phoneNumber2}</p>
            )}
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Account Details</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>How did you come to know about TGES:</strong> {user.howDidYouKnow}</p>
            {user.preferredCurrency && <p><strong>Preferred Currency:</strong> {user.preferredCurrency}</p>}
            {user.website && <p><strong>Website:</strong> {user.website}</p>}
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Company Information</h2>
            {user.companyName && <p><strong>Company Name:</strong> {user.companyName}</p>}
            {user.designation && <p><strong>Designation:</strong> {user.designation}</p>}
            {user.companyAddress && <p><strong>Company Address:</strong> {user.companyAddress}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
