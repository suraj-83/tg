import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EmployeeSidebar from "./EmployeeSidebar.jsx";
import EmployeeHeader from "./EmployeeHeader.jsx";
import { getAirTravelDetails } from "../../redux/slices/travelSlice.js";

const FlightBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([
    {
      id: 1,
      full_name: "John Doe",
      dob: "1995-01-01",
      gender: "Male",
      contact_no: "1234567890",
      email: "john.doe@example.com",
      travel_from: "Delhi",
      travel_to: "Mumbai",
      travel_class: "Economy",
      travel_date: "2024-07-10",
      flight_no: "AB1234",
      time_preference: "10:00 AM",
      adult: 1,
      children: 0,
      flightNumber: "AB1234",
      departureAirport: "Delhi",
      arrivalAirport: "Mumbai",
      departureTime: "2024-07-10 10:00",
      arrivalTime: "2024-07-10 12:00",
      departureTerminal: "1",
      arrivalTerminal: "2",
      flightStatus: "Landed",
      totalSeats: 200,
      availableSeats: 180,
      price: 4000,
    },
    {
      id: 2,
      full_name: "Jane Smith",
      dob: "1990-05-15",
      gender: "Female",
      contact_no: "9876543210",
      email: "jane.smith@example.com",
      travel_from: "Bangalore",
      travel_to: "Kolkata",
      travel_class: "Premium Economy",
      travel_date: "2024-07-12",
      flight_no: "XY5678",
      time_preference: "14:00 PM",
      adult: 2,
      children: 1,
      flightNumber: "XY5678",
      departureAirport: "Bangalore",
      arrivalAirport: "Kolkata",
      departureTime: "2024-07-12 14:00",
      arrivalTime: "2024-07-12 16:00",
      departureTerminal: "3",
      arrivalTerminal: "4",
      flightStatus: "Delayed",
      totalSeats: 150,
      availableSeats: 130,
      price: 3500,
    },
  ]);

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
      <div className="flex">
        <EmployeeSidebar />
        <main
          className="min-h-screen w-screen Vflex flex-col items-center bg-no-repeat bg-cover overflow-auto"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500857527770-d5289b39e342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <h1 className="pb-4 font-bold text-center bg-white w-full pt-5 text-blue-700 uppercase text-2xl underline">
            Flight Booking Details
          </h1>
            <div className="overflow-auto">
            <table className="min-w-full text-sm bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">Full_Name</th>
                  <th className="py-2 px-4 border-b border-gray-200">DOB</th>
                  <th className="py-2 px-4 border-b border-gray-200">Gender</th>
                  <th className="py-2 px-4 border-b border-gray-200">Contact_No</th>
                  <th className="py-2 px-4 border-b border-gray-200">Email</th>
                  <th className="py-2 px-4 border-b border-gray-200">Travel_From</th>
                  <th className="py-2 px-4 border-b border-gray-200">Travel_To</th>
                  <th className="py-2 px-4 border-b border-gray-200">Class</th>
                  <th className="py-2 px-4 border-b border-gray-200">Travel_Date</th>
                  <th className="py-2 px-4 border-b border-gray-200">Flight_No</th>
                  <th className="py-2 px-4 border-b border-gray-200">Time_Preference</th>
                  <th className="py-2 px-4 border-b border-gray-200">Adult</th>
                  <th className="py-2 px-4 border-b border-gray-200">Children</th>
                  <th className="py-2 px-4 border-b border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {travelDetails.map((detail, index) => (
                  <tr key={index}>
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
            </div>
          
        </main>
      </div>

  );
};

export default FlightBookingDetails;
