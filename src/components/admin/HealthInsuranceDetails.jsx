import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHealthInsurances } from "../../redux/slices/dashboardSlice";
// import { fetchHealthInsurances } from "../../redux/slices/dashboardSlice";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

const HealthInsuranceDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      let response = await dispatch(fetchHealthInsurances());
      setTravelDetails(response.payload.data);
      setLoading(false);
    };
    fetchBookings();
  }, []);
  const handleSelectInsurance = (insurance) => {
    setSelectedInsurance(insurance);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5  bg-white">
          <h1 className="w-full text-2xl p-2 font-bold uppercase text-center">
            {" "}
            Health Insurance Details
          </h1>
        </div>
      <div className="overflow-auto">
      <table className="min-w-full text-sm bg-white">
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
              {travelDetails &&
                travelDetails.map((insurance) => (
                  <tr key={insurance.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{insurance.name}</td>
                    <td className="border px-4 py-2">{insurance.gender}</td>
                    <td className="border px-4 py-2">
                      {insurance.dateOfBirth}
                    </td>
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
            <p>
              <strong>Name:</strong> {selectedInsurance.name}
            </p>
            <p>
              <strong>Gender:</strong> {selectedInsurance.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong> {selectedInsurance.dateOfBirth}
            </p>
            <p>
              <strong>Address:</strong> {selectedInsurance.address}
            </p>
            <p>
              <strong>Contact No:</strong> {selectedInsurance.contactNo}
            </p>
            <p>
              <strong>Email:</strong> {selectedInsurance.email}
            </p>
            <p>
              <strong>Pre-Existing Disease:</strong>{" "}
              {selectedInsurance.preExistingDisease}
            </p>
            {selectedInsurance.preExistingDisease === "Yes" && (
              <p>
                <strong>Disease Name:</strong> {selectedInsurance.diseaseName}
              </p>
            )}
            <p>
              <strong>Smoker:</strong> {selectedInsurance.smoker}
            </p>
            <p>
              <strong>Nominee Name:</strong> {selectedInsurance.nomineeName}
            </p>
            <p>
              <strong>Nominee Gender:</strong> {selectedInsurance.nomineeGender}
            </p>
            <p>
              <strong>Nominee Relationship:</strong>{" "}
              {selectedInsurance.nomineeRelationship}
            </p>
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
      </main>
    </div>
  );
};

export default HealthInsuranceDetails;
