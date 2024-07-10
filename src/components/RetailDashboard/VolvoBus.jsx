import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBusDetails } from "../../redux/slices/dashboardSlice";
import Img from "../../assets/volvo-bus.webp";
import UserHeader from "./UserHeader";
import UserSidebar from "./UserSidebar";

const VolvoBusBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    // Replace with real data fetching when ready
    const mockData = [
      {
        fullName: "John Doe",
        dob: "1990-01-01",
        gender: "Male",
        contactNo: "1234567890",
        email: "john@example.com",
        pickupLocation: "City A",
        destination: "City B",
        travelDate: "2024-07-15",
        seatType: "VIP",
        busNo: "123",
        status: "Confirmed"
      },
      {
        fullName: "Jane Smith",
        dob: "1992-02-02",
        gender: "Female",
        contactNo: "0987654321",
        email: "jane@example.com",
        pickupLocation: "City C",
        destination: "City D",
        travelDate: "2024-07-16",
        seatType: "Regular",
        busNo: "456",
        status: "Pending"
      }
    ];

    setTravelDetails(mockData);

    // Uncomment this section to use real data fetching
    /*
    const fetchData = async () => {
      let response = await dispatch(fetchBusDetails());
      setTravelDetails(response.payload);
    };
    fetchData();
    */
  }, [dispatch]);

  const handleCancel = (index) => {
    const updatedDetails = travelDetails.map((booking, i) => {
      if (i === index) {
        return { ...booking, status: "Cancelled" };
      }
      return booking;
    });
    setTravelDetails(updatedDetails);
  };

  return (
    <div className="flex flex-col">
      <UserHeader />
      <div className="flex">
        <UserSidebar />
        <main className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover" style={{ backgroundImage: `url('${Img}')` }}>             
          <h1 className="text-2xl w-full bg-white text-center pb-4 uppercase pt-3 font-bold ">
            Volvo Bus Booking Details
          </h1>
          {travelDetails && travelDetails.length === 0 ? (
            <div>No bookings available.</div>
          ) : (
            <div className="overflow-auto">
              <table className="min-w-full text-sm bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Booking</th>
                    <th className="py-2 px-4 border">Full Name</th>
                    <th className="py-2 px-4 border">Date of Birth</th>
                    <th className="py-2 px-4 border">Gender</th>
                    <th className="py-2 px-4 border">Contact No</th>
                    <th className="py-2 px-4 border">Email</th>
                    <th className="py-2 px-4 border">Pickup Location</th>
                    <th className="py-2 px-4 border">Destination</th>
                    <th className="py-2 px-4 border">Travel Date</th>
                    <th className="py-2 px-4 border">Seat Type</th>
                    <th className="py-2 px-4 border">Bus No</th>
                    <th className="py-2 px-4 border">Status</th>
                    <th className="py-2 px-4 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {travelDetails.map((booking, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border">{index + 1}</td>
                      <td className="py-2 px-4 border">{booking.fullName}</td>
                      <td className="py-2 px-4 border">{booking.dob}</td>
                      <td className="py-2 px-4 border">{booking.gender}</td>
                      <td className="py-2 px-4 border">{booking.contactNo}</td>
                      <td className="py-2 px-4 border">{booking.email}</td>
                      <td className="py-2 px-4 border">{booking.pickupLocation}</td>
                      <td className="py-2 px-4 border">{booking.destination}</td>
                      <td className="py-2 px-4 border">{booking.travelDate}</td>
                      <td className="py-2 px-4 border">{booking.seatType}</td>
                      <td className="py-2 px-4 border">{booking.busNo}</td>
                      <td className="py-2 px-4 border">{booking.status}</td>
                      <td className="py-2 px-4 border">
                        {booking.status !== "Cancelled" && (
                          <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => handleCancel(index)}
                          >
                            Cancel
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default VolvoBusBookingDetails;
