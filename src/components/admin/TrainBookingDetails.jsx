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
    <div className="flex flex-col">
            <AdminHeader />
        <div className="flex">
                <AdminSidebar />
    <main className="min-h-screen bg-gray-100 w-screen"  style={{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
      <div className="container mx-auto bg-gray-100 shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center uppercase underline">
          Train Booking Details
        </h1>
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div> */}
        
          <table className="min-w-full bg-gray-100 text-sm sm:w-[10%]">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">Date of Birth</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Contact No</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">From</th>
                <th className="py-2 px-4 border-b">To</th>
                <th className="py-2 px-4 border-b">Class</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Train No</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails && travelDetails.map((booking, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{booking.fullName}</td>
                  <td className="py-2 px-4 border-b">{booking.dob}</td>
                  <td className="py-2 px-4 border-b">{booking.gender}</td>
                  <td className="py-2 px-4 border-b">{booking.contactNo}</td>
                  <td className="py-2 px-4 border-b">{booking.email}</td>
                  <td className="py-2 px-4 border-b">{booking.travelFrom}</td>
                  <td className="py-2 px-4 border-b">{booking.travelTo}</td>
                  <td className="py-2 px-4 border-b">
                    {booking.classOfTravel}
                  </td>
                  <td className="py-2 px-4 border-b">{booking.travelDate}</td>
                  <td className="py-2 px-4 border-b">{booking.trainNo}</td>
                  <td className="py-2 px-4 border-b">
                    {booking.timePreference}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </main>
    </div>
    </div>
  );
};

export default TrainBookingDetails;
