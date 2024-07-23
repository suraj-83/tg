import React, { useEffect, useState } from 'react';
import CorporateHeader from './CorporateHeader'; // Replace AdminHeader with UserHeader
import CorporateSidebar from './CorporateSidebar'; // Replace AdminSidebar with UserSidebar

const mockHotelBookings = [
  {
    id: 1,
    name: 'John hhhdgg Doe',
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
    name: 'Mike Johnson',
    nationality: 'Canadian',
    contactNo1: '3456789012',
    contactNo2: '9012345678',
    email: 'mike.johnson@example.com',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    roomCategory: 'Single',
    mealPlan: 'Room Only',
    hotelCategory: '3 Star',
    priceRange: '$150 - $200',
    checkInDate: '2024-06-01',
    checkOutDate: '2024-06-05',
    numberOfNights: 4,
    numberOfRooms: 1,
    adults: 1,
    children: 0,
    infants: 0,
  },
  {
    id: 4,
    name: 'Emma Brown',
    nationality: 'Australian',
    contactNo1: '4567890123',
    contactNo2: '8765432109',
    email: 'emma.brown@example.com',
    country: 'Australia',
    state: 'New South Wales',
    city: 'Sydney',
    roomCategory: 'Standard',
    mealPlan: 'Full Board',
    hotelCategory: '5 Star',
    priceRange: '$500 - $600',
    checkInDate: '2024-07-06',
    checkOutDate: '2024-07-10',
    numberOfNights: 4,
    numberOfRooms: 1,
    adults: 2,
    children: 0,
    infants: 0,
  },
  
  // Add more mock bookings as needed
];

const HotelBookingDetails = () => {
  const [travelDetails, setTravelDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [search, setSearch] = useState("");

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
  }, [isCancelled]);

  const handleCancel = () => {
    setIsCancelled(true);
    setLoading(false);
  };

  const handleCancelBooking = (id) => {
    setTravelDetails(prevDetails => prevDetails.filter(booking => booking.id !== id));
  };

  const filteredDetails = travelDetails
    ?.filter((booking) =>
      booking.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      booking.email?.toLowerCase().includes(search.toLowerCase())
    ) || [];

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
        <CorporateSidebar />
        <main 
          className="min-h-screen bg-cover bg-gray-100 w-full overflow-auto bg-center"
          style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
        >
          <div className="p-4 bg-white border boarder-gray-200">
          <input
              type="text"
              placeholder="Search by name or email"
              className="mb-4 p-3 ml-20 border rounded-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='overflow-auto'>            
          <table className="text-sm text-center bg-white">
            <thead>
              <tr>
                <th className="py-2 px-10 border">Name</th>
                <th className="py-2 px-4 border border-gray-300">Nationality</th>
                <th className="py-2 px-4 border border-gray-300">Contact_No</th>
                <th className="py-2 px-4 border border-gray-300">Alternative_No</th>
                <th className="py-2 px-4 border border-gray-300">Email</th>
                <th className="py-2 px-4 border border-gray-300">Country</th>
                <th className="py-2 px-16 border border-gray-300">State</th>
                <th className="py-2 px-4 border border-gray-300">City</th>
                <th className="py-2 px-4 border border-gray-300">Room_Category</th>
                <th className="py-2 px-4 border border-gray-300">Meal_Plan</th>
                <th className="py-2 px-4 border border-gray-300">Hotel_Category</th>
                <th className="py-2 px-4 border border-gray-300">Price_Range</th>
                <th className="py-2 px-4 border border-gray-300">Check_n_Date</th>
                <th className="py-2 px-4 border border-gray-300">Check_Out_Date</th>
                <th className="py-2 px-4 border border-gray-300">Number_of_Nights</th>
                <th className="py-2 px-4 border border-gray-300">Number_of_Rooms</th>
                <th className="py-2 px-4 border border-gray-300">Adults</th>
                <th className="py-2 px-4 border border-gray-300">Children</th>
                <th className="py-2 px-4 border border-gray-300">Infants</th>
                <th className="py-2 px-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(travelDetails || []).filter((booking) => {
                const name = booking.name.toLowerCase();
                const email = booking.email.toLowerCase();
                return name.includes(search.toLowerCase()) || email.includes(search.toLowerCase());
              }).map((booking) => (
                <tr key={booking.id}>
                  <td className="py-2  border-b">{booking.name}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.nationality}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.contactNo1}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.contactNo2}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.email}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.country}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.state}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.city}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.roomCategory}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.mealPlan}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.hotelCategory}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.priceRange}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.checkInDate}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.checkOutDate}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.numberOfNights}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.numberOfRooms}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.adults}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.children}</td>
                  <td className="py-2 px-4 border border-gray-300">{booking.infants}</td>
                  <td className="py-2 px-4 border border-gray-300">
                    <button 
                      onClick={() => handleCancelBooking(booking.id)} 
                      className="text-red-500 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-4  py-0.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 uppercase"
                    >
                      CancelBooking
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
