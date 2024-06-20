import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchBusBookings } from "../../redux/slices/travelSlice";

const VolvoBusBookingDetails = () => {
  const dispatch = useDispatch();
  const { busBookings, status, error } = useSelector((state) => state.travel);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBusBookings());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {String(error)}</div>;
  }
    

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Volvo Bus Booking Details</h1>
      {busBookings && busBookings.length === 0 ? (
        <div>No bookings available.</div>
      ) : (
        busBookings && busBookings.map((booking, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-4">Booking {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4">
                <p><strong>Full Name:</strong> {booking.fullName}</p>
              </div>
              <div className="mb-4">
                <p><strong>Date of Birth:</strong> {booking.dob}</p>
              </div>
              <div className="mb-4">
                <p><strong>Gender:</strong> {booking.gender}</p>
              </div>
              <div className="mb-4">
                <p><strong>Contact No:</strong> {booking.contactNo}</p>
              </div>
              <div className="mb-4">
                <p><strong>Email:</strong> {booking.email}</p>
              </div>
              <div className="mb-4">
                <p><strong>Pickup Location:</strong> {booking.pickupLocation}</p>
              </div>
              <div className="mb-4">
                <p><strong>Destination:</strong> {booking.destination}</p>
              </div>
              <div className="mb-4">
                <p><strong>Travel Date:</strong> {booking.travelDate}</p>
              </div>
              <div className="mb-4">
                <p><strong>Seat Type:</strong> {booking.seatType}</p>
              </div>
              <div className="mb-4">
                <p><strong>Bus No:</strong> {booking.busNo}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default VolvoBusBookingDetails;