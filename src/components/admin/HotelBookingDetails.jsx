import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelBookings } from '../../redux/slices/dashboardSlice';
import AdminSidebar from '../AdminSidebar';
const HotelBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      let response = await dispatch(fetchHotelBookings());
      setTravelDetails(response.payload);
      setLoading(false);
    };
    fetchBookings();
  }, []);

  

  return (
    <div className="flex">
        <AdminSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5">            
        <h1 className="w-full text-2xl p-2 font-bold uppercase text-center">Hotel Booking Details</h1>
          </div>
      <div className="overflow-auto">
      <table className="min-w-full text-sm bg-white">
          <thead>
            <tr>
              <th className="border px-10 py-1">Name</th>
              <th className="border px-10 py-1">Nationality</th>
              <th className="border px-10 py-1">Contact No 1</th>
              <th className="border px-10 py-1">Contact No 2</th>
              <th className="border px-10 py-1">Email</th>
              <th className="border px-10 py-1">Country</th>
              <th className="border px-10 py-1">State</th>
              <th className="border px-10 py-1">City</th>
              <th className="border px-10 py-1">Room Category</th>
              <th className="border px-10 py-1">Meal Plan</th>
              <th className="border px-10 py-1">Hotel Category</th>
              <th className="border px-10 py-1">Price Range</th>
              <th className="border px-10 py-1">Check In Date</th>
              <th className="border px-10 py-1">Check Out Date</th>
              <th className="border px-10 py-1">Number of Nights</th>
              <th className="border px-10 py-1">Number of Rooms</th>
              <th className="border px-10 py-1">Adults</th>
              <th className="border px-10 py-1">Children</th>
              <th className="border px-10 py-1">Infants</th>
            </tr>
          </thead>
          <tbody>
            {travelDetails && travelDetails.map((booking) => (
              <tr key={booking.id}>
                <td className="border px-10 py-1">{booking.name}</td>
                <td className="border px-10 py-1">{booking.nationality}</td>
                <td className="border px-10 py-1">{booking.contactNo1}</td>
                <td className="border px-10 py-1">{booking.contactNo2}</td>
                <td className="border px-10 py-1">{booking.email}</td>
                <td className="border px-10 py-1">{booking.country}</td>
                <td className="border px-10 py-1">{booking.state}</td>
                <td className="border px-10 py-1">{booking.city}</td>
                <td className="border px-10 py-1">{booking.roomCategory}</td>
                <td className="border px-10 py-1">{booking.mealPlan}</td>
                <td className="border px-10 py-1">{booking.hotelCategory}</td>
                <td className="border px-10 py-1">{booking.priceRange}</td>
                <td className="border px-10 py-1">{booking.checkInDate}</td>
                <td className="border px-10 py-1">{booking.checkOutDate}</td>
                <td className="border px-10 py-1">{booking.numberOfNights}</td>
                <td className="border px-10 py-1">{booking.numberOfRooms}</td>
                <td className="border px-10 py-1">{booking.adults}</td>
                <td className="border px-10 py-1">{booking.children}</td>
                <td className="border px-10 py-1">{booking.infants}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
      </div>
  );
};

export default HotelBookingDetails
