import React, { useEffect, useState } from "react"
import VendorSidebar from "./VendorSidebar";

const VendorHotelManagement = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [hotelDetails, setHotelDetails] = useState({});

  const mockHotels = [
    { id: 1, name: "Hotel Sunshine", location: "City A", availableRooms: 10, rating: 4.5 },
    { id: 2, name: "Hotel Moonlight", location: "City B", availableRooms: 5, rating: 4.0 },
    { id: 3, name: "Hotel Starlight", location: "City C", availableRooms: 8, rating: 3.8 },
  ];

  const mockHotelDetails = {
    name: "Hotel Sunshine",
    location: "City A",
    availableRooms: 10,
    rating: 4.5,
    address: "123 Sunshine St, City A",
    contact: "123-456-7890",
    amenities: ["Free WiFi", "Swimming Pool", "Gym", "Spa"],
    reviews: [
      { reviewer: "John Doe", comment: "Great stay!", rating: 5 },
      { reviewer: "Jane Smith", comment: "Very comfortable.", rating: 4 },
    ],
  }
  


  useEffect(() => {
    // Simulating fetching hotels data
    setTimeout(() => {
      setHotels(mockHotels);
    }, 1000); // Simulate delay for async behavior
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      // Simulating fetching hotel details based on selected hotel
      if (selectedHotel) {
        setTimeout(() => {
          setHotelDetails(mockHotelDetails);
        }, 500); // Simulate delay for async behavior
      }
    };
    fetchDetails();
  }, [selectedHotel]);

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
      <div className="flex flex-1">
        <VendorSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
          <div className="p-4">
            <h1 className="text-2xl font-bold pl-20 uppercase">Vendor Hotel Management</h1>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/4 p-4">
              <h2 className="text-xl font-bold mb-4">Hotel List</h2>
              <ul className="divide-y divide-gray-300">
                {hotels.map((hotel) => (
                  <li
                    key={hotel.id}
                    className={`p-2 mb-2 cursor-pointer ${selectedHotel?.id === hotel.id ? 'bg-gray-200' : ''}`}
                    onClick={() => handleHotelSelect(hotel)}
                  >
                    {hotel.name} - {hotel.location} (Rating: {hotel.rating})
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-3/4 p-4">
              {selectedHotel && (
                <>
                  <h2 className="text-xl font-bold mb-4">Hotel Details</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                      <tbody>
                        <tr>
                          <td className="font-semibold w-1/3">Name:</td>
                          <td>{hotelDetails.name}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Location:</td>
                          <td>{hotelDetails.location}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Available Rooms:</td>
                          <td>{hotelDetails.availableRooms}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Rating:</td>
                          <td>{hotelDetails.rating}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Address:</td>
                          <td>{hotelDetails.address}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Contact:</td>
                          <td>{hotelDetails.contact}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Amenities:</td>
                          <td>
                            <ul className="list-disc pl-4">
                              {hotelDetails.amenities &&
                                hotelDetails.amenities.map((amenity, index) => (
                                  <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Reviews:</td>
                          <td>
                            <ul className="list-disc pl-4">
                              {hotelDetails.reviews &&
                                hotelDetails.reviews.map((review, index) => (
                                  <li key={index}>{review.reviewer} - {review.comment} (Rating: {review.rating})</li>
                                ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>

  );
};

export default VendorHotelManagement;
