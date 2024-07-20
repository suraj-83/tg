import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchCabDetails, rejectCabBooking } from "../../redux/slices/dashboardSlice";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

const CabBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [filter, setFilter] = useState("Upcoming");

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(fetchCabDetails());
      setTravelDetails(response.payload);
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (travelDetails) {
      const filteredDetails = travelDetails.filter(detail => detail.status === filter);
      setTravelDetails(filteredDetails);
    }
  }, [travelDetails, filter]);

  const rejectBooking = async (id) => {
    await dispatch(rejectCabBooking(id));
    // Refresh the cab details after rejecting a booking
    const response = await dispatch(fetchCabDetails());
    setTravelDetails(response.payload);
  };

  return (
      <div className="flex">
        <AdminSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
          <div className="flex justify-between p-5">
            <h1 className="w-full text-2xl font-bold uppercase text-center">Cab Booking Details</h1>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="border border-gray-300 justify-end p-2 rounded"
            >
              <option value="Upcoming">Upcoming</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled (by user)</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <table className="text-sm bg-white w-full">
            <thead>
              <tr>
                <th className="py-2 px-10 border border-gray-200">Pickup_Country</th>
                <th className="py-2 px-10 border border-gray-200">Nationality</th>
                <th className="py-2 px-10 border border-gray-200">TourPlan</th>
                <th className="py-2 px-10 border border-gray-200">Name</th>
                <th className="py-2 px-10 border border-gray-200">ContactNo</th>
                <th className="py-2 px-10 border border-gray-200">AlternateNo</th>
                <th className="py-2 px-10 border border-gray-200">Email</th>
                <th className="py-2 px-10 border border-gray-200">CabRequiredAt</th>
                <th className="py-2 px-10 border border-gray-200">CabRequiredFor</th>
                <th className="py-2 px-10 border border-gray-200">TravelLimit</th>
                <th className="py-2 px-10 border border-gray-200">PickupDate&Time</th>
                <th className="py-2 px-10 border border-gray-200">PickupAddress</th>
                <th className="py-2 px-10 border border-gray-200">PickupLandmark</th>
                <th className="py-2 px-10 border border-gray-200">DropDate&Time</th>
                <th className="py-2 px-10 border border-gray-200">DropAddress</th>
                <th className="py-2 px-10 border border-gray-200">DropLandmark</th>
                <th className="py-2 px-10 border border-gray-200">CabDuration</th>
                <th className="py-2 px-10 border border-gray-200">NoofCabsRequired</th>
                <th className="py-2 px-10 border border-gray-200">TypeofCabRequired</th>
                <th className="py-2 px-10 border border-gray-200">NoofPersonsTravelling</th>
                <th className="py-2 px-10 border border-gray-200">NoOfInfants</th>
                <th className="py-2 px-10 border border-gray-200">NoOfChildren</th>
                <th className="py-2 px-10 border border-gray-200">OtherRequirements</th>
                <th className="py-2 px-10 border border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails
                ?.filter(detail => detail.status === filter)
                ?.map((detail, index) => (
                <tr key={index}>
                  <td className="py-2 px-2 border border-gray-200">{detail.pickupCountry}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.nationality}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.tourPlan}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.name}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.contactNo}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.alternateContactNo}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.email}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.cabRequiredAt}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.cabRequiredFor}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.localTravelKmsLimit}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.pickupDateTime}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.pickupAddress}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.pickupLandmark}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.dropDateTime}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.dropAddress}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.dropLandmark}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.cabDuration}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.noOfCabsRequired}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.typeOfCabRequired}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.noOfPersonsTravelling}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.noOfInfants}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.noOfChildren}</td>
                  <td className="py-2 px-2 border border-gray-200">{detail.otherRequirements}</td>
                  <td className="py-2 px-2 border border-gray-200">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => rejectBooking(detail.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
  );
};

export default CabBookingDetails;
