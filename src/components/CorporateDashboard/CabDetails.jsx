import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserSidebar from "./CorporateSidebar";
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
    <div className="flex">
      <UserSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex bg-white justify-center  p-5">
          <h1 className="w-full text-2xl font-bold uppercase text-center">
            Corporate Cab Booking Details
          </h1>
        </div>
        <div className="overflow-auto">
          <table className="text-sm bg-white w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-200">Country</th>
                <th className="py-2 px-4 border border-gray-200">
                  Nationality
                </th>
                <th className="py-2 px-4 border border-gray-200">Tour_Plan</th>
                <th className="py-2 px-4 border border-gray-200">Name</th>
                <th className="py-2 px-4 border border-gray-200">Contact_No</th>
                <th className="py-2 px-4 border border-gray-200">
                  Alternate_Contact_No
                </th>
                <th className="py-2 px-4 border border-gray-200">Email</th>
                <th className="py-2 px-4 border border-gray-200">
                  Cab_Required_At
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Cab_Required_For
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Local_Travel_Kms_Limit
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Pickup_Date_&_Time
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Pickup_Address
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Pickup_Landmark
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Drop_Date_&_Time
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Drop_Address
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Drop_Landmark
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Cab_Duration
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  No_of_Cabs_Required
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Type_of_Cab_Required
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  No_of_Persons_Travelling
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  No_of_Infants
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  No_of_Children
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Other_Requirements
                </th>
                <th className="py-2 px-4 border border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails?.map((detail, index) => (
                <tr key={index}>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.pickupCountry}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.nationality}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.tourPlan}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.name}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.contactNo}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.alternateContactNo}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.email}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.cabRequiredAt}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.cabRequiredFor}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.localTravelKmsLimit}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.pickupDateTime}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.pickupAddress}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.pickupLandmark}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.dropDateTime}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.dropAddress}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.dropLandmark}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.cabDuration}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.noOfCabsRequired}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.typeOfCabRequired}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.noOfPersonsTravelling}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.noOfInfants}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.noOfChildren}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
                    {detail.otherRequirements}
                  </td>
                  <td
                    className="py-2 px-4 border
                  border-gray-200"
                  >
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
        </div>
      </main>
    </div>
  );
};

export default CabBookingDetails;
