import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getAllPassportBookings } from "../../redux/slices/dashboardSlice";
import AdminSidebar from "../AdminSidebar";

const PassportBookingDetails = () => {
  const dispatch = useDispatch();
  const [bookingDetails, setBookingDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(getAllPassportBookings());
      setBookingDetails(response.payload.data);
    };
    fetchData();
  }, [dispatch]);

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
        <AdminSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5">            
        <h1 className="w-full text-2xl p-2 font-bold uppercase text-center">   Passport Booking Details</h1>
          </div>
          <table className="min-w-full text-sm bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Traveller Name</th>
                <th className="py-2 px-4 border">Nationality</th>
                <th className="py-2 px-4 border">Date of Birth</th>
                <th className="py-2 px-4 border">Gender</th>
                <th className="py-2 px-4 border">Passport No</th>
                <th className="py-2 px-4 border">Issue Date</th>
                <th className="py-2 px-4 border">Expiry Date</th>
                <th className="py-2 px-4 border">Validity Period</th>
                <th className="py-2 px-4 border">Place of Issue</th>
                <th className="py-2 px-4 border">Nominee Name</th>
                <th className="py-2 px-4 border">Nominee Gender</th>
                <th className="py-2 px-4 border">Address</th>
                <th className="py-2 px-4 border">Contact No</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Hold Passport From</th>
                <th className="py-2 px-4 border">Apply From</th>
                <th className="py-2 px-4 border">Destination</th>
                <th className="py-2 px-4 border">Entry Date</th>
                <th className="py-2 px-4 border">Exit Date</th>
              </tr>
            </thead>
            <tbody>
              {bookingDetails.map((booking) => (
                <tr key={booking.id}>
                  <td className="py-2 px-4 border">{booking.name}</td>
                  <td className="py-2 px-4 border">{booking.nationality}</td>
                  <td className="py-2 px-4 border">{booking.dateOfBirth}</td>
                  <td className="py-2 px-4 border">{booking.gender}</td>
                  <td className="py-2 px-4 border">{booking.passportNo}</td>
                  <td className="py-2 px-4 border">{booking.passportIssueDate}</td>
                  <td className="py-2 px-4 border">{booking.passportExpiryDate}</td>
                  <td className="py-2 px-4 border">{booking.passportValidityPeriod}</td>
                  <td className="py-2 px-4 border">{booking.placeOfIssue}</td>
                  <td className="py-2 px-4 border">{booking.nomineeName}</td>
                  <td className="py-2 px-4 border">{booking.nomineeGender}</td>
                  <td className="py-2 px-4 border">{booking.addressWithPinCode}</td>
                  <td className="py-2 px-4 border">{booking.contactNo}</td>
                  <td className="py-2 px-4 border">{booking.email}</td>
                  <td className="py-2 px-4 border">{booking.holdPassportFrom}</td>
                  <td className="py-2 px-4 border">{booking.applyFrom}</td>
                  <td className="py-2 px-4 border">{booking.goTo}</td>
                  <td className="py-2 px-4 border">{booking.travelDuration.entryDate}</td>
                  <td className="py-2 px-4 border">{booking.travelDuration.exitDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    
  );
};

export default PassportBookingDetails;
