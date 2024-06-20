import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainDetails } from "../../redux/slices/dashboardSlice";

const TrainBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(fetchTrainDetails());
      setTravelDetails(response.payload);

      console.log(response);
      console.log(travelDetails);
    };
    fetchData();
  }, []);

  // const filteredBookings = travelDetails.filter((booking) =>
  //   booking.fullName.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Train Booking Details
        </h1>
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div> */}
        
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">Date of Birth</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Contact No</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">From</th>
                <th className="py-2 px-4 border-b">To</th>
                <th className="py-2 px-4 border-b">Class</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Train No</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails.map((booking, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{booking.fullName}</td>
                  <td className="py-2 px-4 border-b">{booking.dob}</td>
                  <td className="py-2 px-4 border-b">{booking.gender}</td>
                  <td className="py-2 px-4 border-b">{booking.contactNo}</td>
                  <td className="py-2 px-4 border-b">{booking.email}</td>
                  <td className="py-2 px-4 border-b">{booking.travelFrom}</td>
                  <td className="py-2 px-4 border-b">{booking.travelTo}</td>
                  <td className="py-2 px-4 border-b">
                    {booking.classOfTravel}
                  </td>
                  <td className="py-2 px-4 border-b">{booking.travelDate}</td>
                  <td className="py-2 px-4 border-b">{booking.trainNo}</td>
                  <td className="py-2 px-4 border-b">
                    {booking.timePreference}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default TrainBookingDetails;
