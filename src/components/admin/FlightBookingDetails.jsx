import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirDetails } from "../../redux/slices/dashboardSlice.js";

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
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500857527770-d5289b39e342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="min-h-[100vh] flex items-center justify-center p-24">
        <div className="bg-blue-100 bg-opacity-95 p-5 rounded-lg w-full lg:w-3/4 shadow-[0_0_10px_black]">
          <h1 className="pb-4 font-bold text-center text-blue-700 uppercase text-2xl underline">
            Flight Booking Details
          </h1>
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
              {travelDetails.map((detail, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default FlightBookingDetails;
