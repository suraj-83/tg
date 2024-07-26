import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import EmployeeHeader from './EmployeeHeader'; 
import EmployeeSidebar from './EmployeeSidebar';



const mockHotelBookings = [
  {
    id: 1,
    name: 'John Doe',
    nationality: 'American',
    contactNo1: '1234567890',
    contactNo2: '0987654321',    
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
    contactNo1: '2345678901',
    contactNo2: '9876543210',
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
  {
  id: 3,
  name: 'Bob Johnson',
  nationality: 'Canadian',
  contactNo1: '3456789012',
  contactNo2: '8765432109',
  email: 'bob.johnson@example.com',
  country: 'Canada',
  state: 'Ontario',
  city: 'Toronto',
  roomCategory: 'Standard',
  mealPlan: 'None',
  hotelCategory: '3 Star',
  priceRange: '$100 - $200',
  checkInDate: '2024-07-20',
  checkOutDate: '2024-07-25',
  numberOfNights: 5,
  numberOfRooms: 1,
  adults: 1,
  children: 0,
  infants: 0,
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
          <div className='text-center bg-white'>
            <h1 className='pb-6 font-bold text-center bg-white w-full pt-5 text-blue-700 uppercase text-2xl'>Hotel Booking Details</h1>
          </div>
          <div className='overflow-auto'>            
          <table className="text-sm text-center bg-white">
            <thead>
              <tr>
                <th className="py-2 px-10 border">Name</th>
                <th className="py-2 px-4 border">Nationality</th>
                <th className="py-2 px-4 border">Contact_No</th>
                <th className="py-2 px-4 border">Alternet_No</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Country</th>
                <th className="py-2 px-4 border">State</th>
                <th className="py-2 px-16 border">City</th>
                <th className="py-2 px-4 border">Room_Category</th>
                <th className="py-2 px-4 border">Meal_Plan</th>
                <th className="py-2 px-4 border">Hotel_Category</th>
                <th className="py-2 px-4 border">Price_Range</th>
                <th className="py-2 px-4 border">Check_In_Date</th>
                <th className="py-2 px-4 border">Check_Out_Date</th>
                <th className="py-2 px-4 border">Number_of_Nights</th>
                <th className="py-2 px-4 border">Number_of_Rooms</th>
                <th className="py-2 px-4 border">Adults</th>
                <th className="py-2 px-4 border">Children</th>
                <th className="py-2 px-4 border">Infants</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails.map((booking) => (
                <tr key={booking.id}>
                  <td className="py-2 px-4 border">{booking.name}</td>
                  <td className="py-2 px-4 border">{booking.nationality}</td>
                  <td className="py-2 px-4 border">{booking.contactNo1}</td>
                  <td className="py-2 px-4 border">{booking.contactNo2}</td>
                  <td className="py-2 px-4 border">{booking.email}</td>
                  <td className="py-2 px-4 border">{booking.country}</td>
                  <td className="py-2 px-4 border">{booking.state}</td>
                  <td className="py-2 px-4 border">{booking.city}</td>
                  <td className="py-2 px-4 border">{booking.roomCategory}</td>
                  <td className="py-2 px-4 border">{booking.mealPlan}</td>
                  <td className="py-2 px-4 border">{booking.hotelCategory}</td>
                  <td className="py-2 px-4 border">{booking.priceRange}</td>
                  <td className="py-2 px-4 border">{booking.checkInDate}</td>
                  <td className="py-2 px-4 border">{booking.checkOutDate}</td>
                  <td className="py-2 px-4 border">{booking.numberOfNights}</td>
                  <td className="py-2 px-4 border">{booking.numberOfRooms}</td>
                  <td className="py-2 px-4 border">{booking.adults}</td>
                  <td className="py-2 px-4 border">{booking.children}</td>
                  <td className="py-2 px-4 border">{booking.infants}</td>
                  <td className="py-2 px-4 border">
                    <button 
                      onClick={() => handleCancelBooking(booking.id)} 
                      className="border text-red-500 border-red-500 uppercase px-2 rounded"
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

  );
};

export default HotelBookingDetails;
