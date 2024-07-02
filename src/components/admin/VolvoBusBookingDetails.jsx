import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBusDetails } from "../../redux/slices/dashboardSlice";
import Img from "../../assets/volvo-bus.webp";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

const VolvoBusBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(fetchBusDetails());
      setTravelDetails(response.payload);
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover" style={{ backgroundImage: `url('${Img}')` }}>             
          <h1 className="text-2xl w-full bg-white text-center pb-4 uppercase pt-3 font-bold ">
            Volvo Bus Booking Details
          </h1>
          {travelDetails && travelDetails.length === 0 ? (
            <div>No bookings available.</div>
          ) : (
            <div className="overflow-auto">
              <table className="min-w-full bg-white">
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
                  </tr>
                </thead>
                <tbody>
                  {travelDetails &&
                    travelDetails.map((booking, index) => (
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
