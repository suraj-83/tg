import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import EmployeeHeader from './EmployeeHeader'; 
import EmployeeSidebar from './EmployeeSidebar';



const mockHotelBookings = [
  {
    id: 1,
    name: 'John Doe',
    nationality: 'American',
    contactNo1: '123-456-7890',
    contactNo2: '098-765-4321',    
    email: 'john.doe@example.com',
    country: 'USA',
    state: 'California',
    city: 'Los Angeles',
    roomCategory: 'Deluxe',
    mealPlan: 'Full Board',
    hotelCategory: '5 Star',
    priceRange: '$300 - $400',
    checkInDate: '2024-07-01',
    checkOutDate: '2024-07-05',
    numberOfNights: 4,
    numberOfRooms: 1,
    adults: 2,
    children: 1,
    infants: 0,
  },
  {
    id: 2,
    name: 'Jane Smith',
    nationality: 'British',
    contactNo1: '234-567-8901',
    contactNo2: '987-654-3210',
    email: 'jane.smith@example.com',
    country: 'UK',
    state: 'England',
    city: 'London',
    roomCategory: 'Suite',
    mealPlan: 'Half Board',
    hotelCategory: '4 Star',
    priceRange: '$200 - $300',
    checkInDate: '2024-07-10',
    checkOutDate: '2024-07-15',
    numberOfNights: 5,
    numberOfRooms: 2,
    adults: 2,
    children: 0,
    infants: 1,
  },
  // Add more mock bookings as needed
];

const HotelBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Simulate a fetch call with mock data
        if (!isCancelled) {
          setTravelDetails(mockHotelBookings);
          setLoading(false);
        }
      } catch (err) {
        if (!isCancelled) {
          setError('Failed to fetch hotel bookings');
          setLoading(false);
        }
      }
    };
    fetchBookings();

    return () => {
      setIsCancelled(true);
    };
  }, [dispatch, isCancelled]);

  const handleCancel = () => {
    setIsCancelled(true);
    setLoading(false);
  };

  const handleCancelBooking = (id) => {
    setTravelDetails(prevDetails => prevDetails.filter(booking => booking.id !== id));
  };

  if (loading) {
    return (
      <div>
        Loading...
        <button onClick={handleCancel} className="ml-4 bg-red-500 text-white py-1 px-2 rounded">Cancel</button>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <div className="flex">
        <EmployeeSidebar />
        <main 
          className="min-h-screen bg-cover bg-gray-100 w-full overflow-auto bg-center"
          style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
        >
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
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails.map((booking) => (
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
                  <td className="py-2 px-4 border-b">
                    <button 
                      onClick={() => handleCancelBooking(booking.id)} 
                      className="bg-red-500 text-white py-1 px-2 rounded"
                    >
                      Cancel Booking
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>          
        </main>
      </div>

  );
};

export default HotelBookingDetails;
