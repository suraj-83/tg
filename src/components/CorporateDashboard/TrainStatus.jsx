import React, { useEffect, useState } from "react";
import CorporateHeader from "./CorporateHeader";
import CorporateSidebar from "./CorporateSidebar";
import { useDispatch } from "react-redux";
import { getTrainTravelDetails } from "../../redux/slices/travelSlice";

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

  // const filteredDetails = travelDetails.filter(
  //   (booking) =>
  //     booking.fullName.toLowerCase().includes(search.toLowerCase()) ||
  //     booking.email.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="flex flex-col">
      <CorporateHeader />
      <div className="flex">
        <CorporateSidebar />
        <main
          className="min-h-screen bg-gray-100 w-screen"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="container mx-auto bg-gray-100 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-center uppercase underline">
              Train Booking Details
            </h1>
            {/* <input
              type="text"
              placeholder="Search by name or email"
              className="mb-4 p-2 border rounded w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            /> */}
            <table className="min-w-full bg-gray-100 text-sm">
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
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {travelDetails.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-2 px-4 border-b">{booking.fullName}</td>
                    <td className="py-2 px-4 border-b">{booking.dob}</td>
                    <td className="py-2 px-4 border-b">{booking.gender}</td>
                    <td className="py-2 px-4 border-b">{booking.contactNo}</td>
                    <td className="py-2 px-4 border-b">{booking.email}</td>
                    <td className="py-2 px-4 border-b">{booking.travelFrom}</td>
                    <td className="py-2 px-4 border-b">{booking.travelTo}</td>
                    <td className="py-2 px-4 border-b">{booking.classOfTravel}</td>
                    <td className="py-2 px-4 border-b">{booking.travelDate}</td>
                    <td className="py-2 px-4 border-b">{booking.trainNo}</td>
                    <td className="py-2 px-4 border-b">{booking.timePreference}</td>
                    <td className="py-2 px-4 border-b">
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
        </main>
      </div>
    </div>
  );
};

export default TrainBookingDetails;
