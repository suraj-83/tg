import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import UserSidebar from "./UserSidebar";

const mockTrainDetails = [
  {
    id: 1,
    fullName: "John Doe",
    dob: "1990-01-01",
    gender: "Male",
    contactNo: "1234567890",
    email: "john@example.com",
    travelFrom: "City A",
    travelTo: "City B",
    classOfTravel: "First Class",
    travelDate: "2024-07-15",
    trainNo: "12345",
    timePreference: "11:00 AM",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    dob: "1985-05-15",
    gender: "Female",
    contactNo: "0987654321",
    email: "jane@example.com",
    travelFrom: "City C",
    travelTo: "City D",
    classOfTravel: "Second Class",
    travelDate: "2024-07-20",
    trainNo: "67890",
    timePreference: "10:00 PM",
  },
  // Add more mock data as needed
];

const TrainBookingDetails = () => {
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data
      setTravelDetails(mockTrainDetails);
    };
    fetchData();
  }, []);

  const handleCancel = (bookingId) => {
    setTravelDetails((prevDetails) =>
      prevDetails.filter((booking) => booking.id !== bookingId)
    );
  };

  return (
    <div className="flex flex-col">
      <UserHeader />
      <div className="flex">
        <UserSidebar />
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
