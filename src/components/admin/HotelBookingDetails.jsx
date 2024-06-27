import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelBookings } from '../../redux/slices/dashboardSlice';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
const HotelBookingDetails = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.travel.bookings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      await dispatch(fetchHotelBookings());
      setLoading(false);
    };
    fetchBookings();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
            <AdminHeader />
        <div className="flex">
                <AdminSidebar />
    <main  className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <h1 className="text-3xl font-bold text-gray-950 p pt-5 bg-white  text-center uppercase">Hotel Booking Details</h1>
      <div className=" shadow-md min-w-full relative mx-auto bg-white rounded p-6">
        <h2 className="text-2xl font-bold mb-4 underline">Hotel Bookings</h2>
        <table className="text-sm bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Nationality</th>
              <th className="py-2 px-4 border-b">Contact No 1</th>
              <th className="py-2 px-4 border-b">Contact No 2</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Country</th>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">Room Category</th>
              <th className="py-2 px-4 border-b">Meal Plan</th>
              <th className="py-2 px-4 border-b">Hotel Category</th>
              <th className="py-2 px-4 border-b">Price Range</th>
              <th className="py-2 px-4 border-b">Check In Date</th>
              <th className="py-2 px-4 border-b">Check Out Date</th>
              <th className="py-2 px-4 border-b">Number of Nights</th>
              <th className="py-2 px-4 border-b">Number of Rooms</th>
              <th className="py-2 px-4 border-b">Adults</th>
              <th className="py-2 px-4 border-b">Children</th>
              <th className="py-2 px-4 border-b">Infants</th>
            </tr>
          </thead>
          <tbody>
            {bookings && bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="py-2 px-4 border-b">{booking.name}</td>
                <td className="py-2 px-4 border-b">{booking.nationality}</td>
                <td className="py-2 px-4 border-b">{booking.contactNo1}</td>
                <td className="py-2 px-4 border-b">{booking.contactNo2}</td>
                <td className="py-2 px-4 border-b">{booking.email}</td>
                <td className="py-2 px-4 border-b">{booking.country}</td>
                <td className="py-2 px-4 border-b">{booking.state}</td>
                <td className="py-2 px-4 border-b">{booking.city}</td>
                <td className="py-2 px-4 border-b">{booking.roomCategory}</td>
                <td className="py-2 px-4 border-b">{booking.mealPlan}</td>
                <td className="py-2 px-4 border-b">{booking.hotelCategory}</td>
                <td className="py-2 px-4 border-b">{booking.priceRange}</td>
                <td className="py-2 px-4 border-b">{booking.checkInDate}</td>
                <td className="py-2 px-4 border-b">{booking.checkOutDate}</td>
                <td className="py-2 px-4 border-b">{booking.numberOfNights}</td>
                <td className="py-2 px-4 border-b">{booking.numberOfRooms}</td>
                <td className="py-2 px-4 border-b">{booking.adults}</td>
                <td className="py-2 px-4 border-b">{booking.children}</td>
                <td className="py-2 px-4 border-b">{booking.infants}</td>
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

export default HotelBookingDetails
