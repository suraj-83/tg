import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainDetails } from "../../redux/slices/dashboardSlice";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

const TrainBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(fetchTrainDetails());
      setTravelDetails(response.payload);
    };
    fetchData();
  }, []);

  // const filteredBookings = travelDetails.filter((booking) =>
  //   booking.fullName.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="flex">
        <AdminSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5  bg-white">            
        <h1 className="w-full text-2xl p-2 font-bold uppercase text-center">   Train Booking Details
          </h1>
          </div>        
      <div className="overflow-auto">
      <table className="min-w-full text-sm bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Full Name</th>
                <th className="py-2 px-4 border">Date of Birth</th>
                <th className="py-2 px-4 border">Gender</th>
                <th className="py-2 px-4 border">Contact No</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">From</th>
                <th className="py-2 px-4 border">To</th>
                <th className="py-2 px-4 border">Class</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Train No</th>
                <th className="py-2 px-4 border">Time</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails && travelDetails.map((booking, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{booking.fullName}</td>
                  <td className="py-2 px-4 border">{booking.dob}</td>
                  <td className="py-2 px-4 border">{booking.gender}</td>
                  <td className="py-2 px-4 border">{booking.contactNo}</td>
                  <td className="py-2 px-4 border">{booking.email}</td>
                  <td className="py-2 px-4 border">{booking.travelFrom}</td>
                  <td className="py-2 px-4 border">{booking.travelTo}</td>
                  <td className="py-2 px-4 border">
                    {booking.classOfTravel}
                  </td>
                  <td className="py-2 px-4 border">{booking.travelDate}</td>
                  <td className="py-2 px-4 border">{booking.trainNo}</td>
                  <td className="py-2 px-4 border">
                    {booking.timePreference}
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

export default TrainBookingDetails;
