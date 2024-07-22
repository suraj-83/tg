import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserSidebar from "./UserSidebar.jsx";
import UserHeader from "./UserHeader.jsx";
import { getAirTravelDetails } from "../../redux/slices/travelSlice.js";

const FlightBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getAirTravelDetails());
      setTravelDetails(response.payload.data);
    };
    fetchData();
  }, []);

  const handleCancel = (bookingId) => {
    // Simulate canceling a booking
    // setTravelDetails(travelDetails.filter(detail => detail.id !== bookingId));
  };


  return (
      <div className="flex flex-1">
        <UserSidebar />
        <main
          className="min-h-screen bg-gray-100 w-full overflow-auto"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500857527770-d5289b39e342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <h1 className="pb-8 font-bold text-center text-blue-700 bg-white w-full pt-5 uppercase text-2xl underline">
            Flight Booking Details
          </h1>
          <div className="overflow-x-auto">
            
          {travelDetails.length > 0 ? (
            
            <table className="min-w-full text-sm bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-10 border border-gray-200">Full_Name</th>
                  <th className="py-2 px-10 border border-gray-200">DOB</th>
                  <th className="py-2 px-10 border border-gray-200">Gender</th>
                  <th className="py-2 px-10 border border-gray-200">Contact_No</th>
                  <th className="py-2 px-10 border border-gray-200">Email</th>
                  <th className="py-2 px-10 border border-gray-200">Travel_From</th>
                  <th className="py-2 px-10 border border-gray-200">Travel_To</th>
                  <th className="py-2 px-10 border border-gray-200">Class</th>
                  <th className="py-2 px-10 border border-gray-200">Travel_Date</th>
                  <th className="py-2 px-10 border border-gray-200">Flight_No</th>
                  <th className="py-2 px-10 border border-gray-200">Time_Preference</th>
                  <th className="py-2 px-10 border border-gray-200">Adult</th>
                  <th className="py-2 px-10 border border-gray-200">Children</th>
                  <th className="py-2 px-10 border border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {travelDetails.map((detail, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.fullName}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.dob}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.gender}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.contactNo}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.email}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.travelFrom}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.travelTo}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.classOfTravel}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.travelDate}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.flightNo}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.timePreference}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.adult}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">{detail.children}</td>
                    <td className="py-2 px-4 text-center border border-gray-200">
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                        onClick={() => handleCancel(detail.id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="py-10 text-center min-w-full min-h-screen bg-white text-red-500">No flight booking details available.</p>
          )}

          </div>
        </main>
      </div>
  );
};

export default FlightBookingDetails;
