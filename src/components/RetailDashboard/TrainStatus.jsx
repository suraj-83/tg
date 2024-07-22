import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import UserSidebar from "./UserSidebar";
import { getTrainTravelDetails } from "../../redux/slices/travelSlice";
import { useDispatch } from "react-redux";

const TrainBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getTrainTravelDetails());
      setTravelDetails(response.payload.data);
    };
    fetchData();
  }, []);

  const handleCancel = (bookingId) => {
    setTravelDetails((prevDetails) =>
      prevDetails.filter((booking) => booking.id !== bookingId)
    );
  };

  return (
      <div className="flex">
        <UserSidebar />
        <main
          className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover overflow-auto"
 
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="container mx-auto bg-gray-100 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-center uppercase underline">
              Train Booking Details
            </h1>
            <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Full_Name</th>
                  <th className="py-2 px-4 border">Date_of_Birth</th>
                  <th className="py-2 px-4 border">Gender</th>
                  <th className="py-2 px-4 border">Contact_No</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">From</th>
                  <th className="py-2 px-14 border">To</th>
                  <th className="py-2 px-14 border">Class</th>
                  <th className="py-2 px-14 border">Date</th>
                  <th className="py-2 px-4 border">Train_No</th>
                  <th className="py-2 px-4 border">Time</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {travelDetails.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-2 px-4 text-center border">{booking.fullName}</td>
                    <td className="py-2 px-4 text-center border">{booking.dob}</td>
                    <td className="py-2 px-4 text-center border">{booking.gender}</td>
                    <td className="py-2 px-4 text-center border">{booking.contactNo}</td>
                    <td className="py-2 px-4 text-center border">{booking.email}</td>
                    <td className="py-2 px-4 text-center border">{booking.travelFrom}</td>
                    <td className="py-2 px-4 text-center border">{booking.travelTo}</td>
                    <td className="py-2 px-4 text-center border">{booking.classOfTravel}</td>
                    <td className="py-2 px-4 text-center border">{booking.travelDate}</td>
                    <td className="py-2 px-4 text-center border">{booking.trainNo}</td>
                    <td className="py-2 px-4 text-center border">{booking.timePreference}</td>
                    <td className="py-2 px-4 text-center border">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleCancel(booking.id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </main>
      </div>
      );
};

export default TrainBookingDetails;
