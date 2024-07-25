import React, { useEffect, useState } from "react"
import EmployeeSidebar from "./EmployeeSidebar";
import { useDispatch } from "react-redux";
import { getTrainTravelDetails } from "../../redux/slices/travelSlice";

const TrainBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([ ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getTrainTravelDetails());
      if (response?.payload?.data) {
        setTravelDetails(response.payload.data);
      }
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
      <div className="flex">
        <EmployeeSidebar />
        <main
          className="min-h-screen bg-gray-100 w-screen overflow-auto"
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
            <div className="overflow-auto">
            <table className="min-w-full bg-gray-100 text-sm">
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
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {travelDetails.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-2 px-4 border">{booking.fullName}</td>
                    <td className="py-2 px-4 border">{booking.dob}</td>
                    <td className="py-2 px-4 border">{booking.gender}</td>
                    <td className="py-2 px-4 border">{booking.contactNo}</td>
                    <td className="py-2 px-4 border">{booking.email}</td>
                    <td className="py-2 px-4 border">{booking.travelFrom}</td>
                    <td className="py-2 px-4 border">{booking.travelTo}</td>
                    <td className="py-2 px-4 border">{booking.classOfTravel}</td>
                    <td className="py-2 px-4 border">{booking.travelDate}</td>
                    <td className="py-2 px-4 border">{booking.trainNo}</td>
                    <td className="py-2 px-4 border">{booking.timePreference}</td>
                    <td className="py-2 px-4 border">
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
