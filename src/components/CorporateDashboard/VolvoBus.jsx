import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBusDetails } from "../../redux/slices/dashboardSlice";
import Img from "../../assets/volvo-bus.webp";
import CorporateHeader from "./CorporateHeader";
import CorporateSidebar from "./CorporateSidebar";
import { getVolvoBusTravelDetails } from "../../redux/slices/travelSlice";

const VolvoBusBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(getVolvoBusTravelDetails());
      setTravelDetails(response.payload.data);
    };
    fetchData();
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDetails = travelDetails.filter(
    (booking) =>
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <CorporateHeader />
      <div className="flex">
        <CorporateSidebar />
        <main
          className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover"
          style={{ backgroundImage: `url('${Img}')` }}
        >
          <h1 className="text-2xl w-full bg-white text-center pb-4 uppercase pt-3 font-bold ">
            Volvo Bus Booking Details
          </h1>
          <div className="p-4 bg-white">
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={handleSearch}
              className="px-4 py-2 border border-black rounded w-full"
            />
          </div>
          {filteredDetails.length === 0 ? (
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
                  {filteredDetails.map((booking, index) => (
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
