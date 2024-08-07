import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeSidebar from "./EmployeeSidebar";
import { getCabTravelDetails } from "../../redux/slices/travelSlice";

const CabBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getCabTravelDetails());
      setTravelDetails(response.payload.data);
    };
    fetchData();
  }, []);

  const cancelBooking = async (id) => {
    // TODO: Implement cancel booking logic
  };

  return (
    <div className="flex flex-col h-screen">
      <EmployeeHeader />
      <div className="flex flex-1">
        <EmployeeSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl font-bold uppercase">
              Cab Booking Details
            </h1>
          </div>
          <table className="text-sm bg-white w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">
                  Pickup Country
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Nationality
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Tour Plan
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Name</th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Contact No
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Alternate Contact No
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Email</th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Cab Required At
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Cab Required For
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Local Travel Kms Limit
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Pickup Date & Time
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Pickup Address
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Pickup Landmark
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Drop Date & Time
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Drop Address
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Drop Landmark
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Cab Duration
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  No of Cabs Required
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Type of Cab Required
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  No of Persons Travelling
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  No of Infants
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  No of Children
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Other Requirements
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails?.map((detail, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.pickupCountry}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.nationality}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.tourPlan}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.contactNo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.alternateContactNo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.cabRequiredAt}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.cabRequiredFor}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.localTravelKmsLimit}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.pickupDateTime}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.pickupAddress}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.pickupLandmark}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.dropDateTime}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.dropAddress}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.dropLandmark}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.cabDuration}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.noOfCabsRequired}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.typeOfCabRequired}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.noOfPersonsTravelling}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.noOfInfants}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.noOfChildren}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.otherRequirements}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => cancelBooking(detail.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default CabBookingDetails;
