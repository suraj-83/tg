import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirDetails } from "../../redux/slices/dashboardSlice.js";
import AdminSidebar from "../AdminSidebar.jsx";
import AdminHeader from "../AdminHeader.jsx";

const FlightBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(fetchAirDetails());
      setTravelDetails(response.payload);
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
        <AdminSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5  bg-white">            
        <h1 className="w-full text-2xl p-2 font-bold uppercase text-center">   Flight Booking Details
          </h1>
          </div>
          <table className="min-w-full text-sm bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">
                  Full Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200">DOB</th>
                <th className="py-2 px-4 border-b border-gray-200">Gender</th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Contact No
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Email</th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Travel From
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Travel To
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Class</th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Travel Date
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Flight No
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Time Preference
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Adult</th>
                <th className="py-2 px-4 border-b border-gray-200">Children</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails && travelDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.fullName}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.dob}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.gender}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.contactNo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.travelFrom}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.travelTo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.classOfTravel}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.travelDate}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.flightNo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.timePreference}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.adult}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {detail.children}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
     
    </main>
    </div>
    
    
    );
};

export default FlightBookingDetails;
