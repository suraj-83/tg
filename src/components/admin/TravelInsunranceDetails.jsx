import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchHealthInsurances } from "../../redux/slices/dashboardSlice";

const TravelInsuranceDetails = () => {
  const dispatch = useDispatch();
  const travelInsurances = useSelector((state) => state.travel.travelInsurances);
  const [selectedInsurance, setSelectedInsurance] = useState(null);

//   useEffect(() => {
    // dispatch(fetchTravelInsurances());
//   }, [dispatch]);

  const handleSelectInsurance = (insurance) => {
    setSelectedInsurance(insurance);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8">
      <h1 className="pb-4 font-bold text-center text-blue-700 uppercase text-2xl underline">
        Travel Insurance Details
      </h1>
      <div className="w-full lg:w-2/3">
        <table className="w-full table-auto border-collapse bg-white shadow-md">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Date of Birth</th>
              <th className="border px-4 py-2">Contact No</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {travelInsurances && travelInsurances.map((insurance) => (
              <tr key={insurance.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{insurance.name}</td>
                <td className="border px-4 py-2">{insurance.gender}</td>
                <td className="border px-4 py-2">{insurance.dateOfBirth}</td>
                <td className="border px-4 py-2">{insurance.contactNo}</td>
                <td className="border px-4 py-2">{insurance.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleSelectInsurance(insurance)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedInsurance && (
        <div className="mt-8 p-6 bg-blue-100 rounded-lg w-full lg:w-2/3 shadow-[0_0_10px_black]">
          <h2 className="text-xl font-bold mb-4">Insurance Details</h2>
          <p><strong>Name:</strong> {selectedInsurance.name}</p>
          <p><strong>Gender:</strong> {selectedInsurance.gender}</p>
          <p><strong>Date of Birth:</strong> {selectedInsurance.dateOfBirth}</p>
          <p><strong>Address:</strong> {selectedInsurance.address}</p>
          <p><strong>Contact No:</strong> {selectedInsurance.contactNo}</p>
          <p><strong>Email:</strong> {selectedInsurance.email}</p>
          <p><strong>Trip Type:</strong> {selectedInsurance.tripType}</p>
          <p><strong>Start Date:</strong> {selectedInsurance.startDate}</p>
          <p><strong>End Date:</strong> {selectedInsurance.endDate}</p>
          <p><strong>Pre-Existing Disease:</strong> {selectedInsurance.preExistingDisease}</p>
          {selectedInsurance.preExistingDisease === "Yes" && (
            <p><strong>Disease Name:</strong> {selectedInsurance.diseaseName}</p>
          )}
          <p><strong>Smoker:</strong> {selectedInsurance.smoker}</p>
          <p><strong>Passport No:</strong> {selectedInsurance.passportNo}</p>
          <p><strong>Date of Issue:</strong> {selectedInsurance.dateOfIssue}</p>
          <p><strong>Date of Expiry:</strong> {selectedInsurance.dateOfExpiry}</p>
          <p><strong>Nominee Name:</strong> {selectedInsurance.nomineeName}</p>
          <p><strong>Nominee Gender:</strong> {selectedInsurance.nomineeGender}</p>
          <p><strong>Nominee Relationship:</strong> {selectedInsurance.nomineeRelationship}</p>
          {selectedInsurance.proofOfBirthAndAddress && (
            <div>
              <strong>Proof of Birth and Address:</strong>
              <img
                src={selectedInsurance.proofOfBirthAndAddress}
                alt="Proof"
                className="mt-2 border rounded-md"
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TravelInsuranceDetails;
