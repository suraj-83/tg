import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { fetchAirDetails, cancelAirBooking } from "../../redux/slices/dashboardSlice.js";
import CorporateSidebar from "./CorporateSidebar.jsx";
import CorporateHeader from "./CorporateHeader.jsx";

const FlightBookingDetails = () => {
    //     const [travelDetails, setTravelDetails] = useState([]);
    const [travelDetails, setTravelDetails] = useState([]);
    
    useEffect(() => {
      setTravelDetails(mockAirDetails);
    }, []);
    
      const mockAirDetails = [
        { id: 1, fullName: 'John Doe', dob: '1990-01-01', gender: 'Male', contactNo: '1234567890', email: 'john@example.com', travelFrom: 'NYC', travelTo: 'LA', classOfTravel: 'Economy', travelDate: '2023-08-01', flightNo: 'AA100', timePreference: 'Morning', adult: 1, children: 0 },
        { id: 2, fullName: 'Jane Smith', dob: '1985-05-10', gender: 'Female', contactNo: '0987654321', email: 'jane@example.com', travelFrom: 'SF', travelTo: 'CHI', classOfTravel: 'Business', travelDate: '2023-08-15', flightNo: 'UA200', timePreference: 'Evening', adult: 1, children: 2 },
        // Add more mock data as needed
      ];
    
      useEffect(() => {
        // Simulate fetching data
        setTravelDetails(mockAirDetails);
      }, []);
    
      const handleCancel = (bookingId) => {
        // Simulate canceling a booking
        setTravelDetails(travelDetails.filter(detail => detail.id !== bookingId));
      };
    
  return (
    <div className="flex flex-col min-h-screen">
      <CorporateHeader />
      <div className="flex flex-1">
        <CorporateSidebar />
        <main
          className="flex-1 flex flex-col items-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500857527770-d5289b39e342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <h1 className="pb-4 font-bold text-center bg-white w-full pt-5 text-blue-700 uppercase text-2xl underline">
            Flight Booking Details
          </h1>
          {travelDetails.length > 0 ? (
            <table className="min-w-full text-sm bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">Full Name</th>
                  <th className="py-2 px-4 border-b border-gray-200">DOB</th>
                  <th className="py-2 px-4 border-b border-gray-200">Gender</th>
                  <th className="py-2 px-4 border-b border-gray-200">Contact No</th>
                  <th className="py-2 px-4 border-b border-gray-200">Email</th>
                  <th className="py-2 px-4 border-b border-gray-200">Travel From</th>
                  <th className="py-2 px-4 border-b border-gray-200">Travel To</th>
                  <th className="py-2 px-4 border-b border-gray-200">Class</th>
                  <th className="py-2 px-4 border-b border-gray-200">Travel Date</th>
                  <th className="py-2 px-4 border-b border-gray-200">Flight No</th>
                  <th className="py-2 px-4 border-b border-gray-200">Time Preference</th>
                  <th className="py-2 px-4 border-b border-gray-200">Adult</th>
                  <th className="py-2 px-4 border-b border-gray-200">Children</th>
                  <th className="py-2 px-4 border-b border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {travelDetails.map((detail) => (
                  <tr key={detail.id}>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.fullName}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.dob}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.gender}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.contactNo}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.email}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.travelFrom}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.travelTo}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.classOfTravel}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.travelDate}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.flightNo}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.timePreference}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.adult}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{detail.children}</td>
                    <td className="py-2 px-4 border-b border-gray-200">
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
        </main>
      </div>
    </div>
  );
};

export default FlightBookingDetails;
