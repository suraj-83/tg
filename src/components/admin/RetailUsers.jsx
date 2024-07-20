import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllRetailUsers } from "../../redux/slices/dashboardSlice";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

const UserDetails = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(getAllRetailUsers());
      setUserDetails(response.payload.data);
    };
    fetchData();
  }, [dispatch]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
        <AdminSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-4">            
        <h1 className="w-full text-2xl p-2 font-bold uppercase text-center">   Retail Users
          </h1>
          </div>
          <table className=" text-sm bg-white">
            <thead>
                <tr>
                  <th className="py-2 px-4 border border-b border-white">FirstName</th>
                  <th className="py-2 px-4 border border-b border-white">SecondName</th>
                  <th className="py-2 px-4 border border-b border-white">LastName</th>
                  <th className="py-2 px-4 border border-b border-white">Gender</th>
                  <th className="py-2 px-4 border border-b border-white">Email</th>
                  <th className="py-2 px-4 border border-b border-white">Occupation</th>
                  <th className="py-2 px-4 border border-b border-white">Residential Address</th>
                  <th className="py-2 px-4 border border-b border-white">ZIP Code</th>
                  <th className="py-2 px-4 border border-b border-white">City</th>
                  <th className="py-2 px-4 border border-b border-white">State</th>
                  <th className="py-2 px-4 border border-b border-white">Country</th>
                  <th className="py-2 px-4 border border-b border-white">Phone Number</th>
                  <th className="py-2 px-4 border border-b border-white">Alternate Number</th>
                  <th className="py-2 px-4 border border-b border-white">Username</th>
                  <th className="py-2 px-4 border border-b text-sm border-white">HowDidYouKnowAboutTGES</th>
                  <th className="py-2 px-4 border border-b border-white">Preferred Currency</th>
                  <th className="py-2 px-4 border border-b border-white">Website</th>
                  <th className="py-2 px-4 border border-b border-white">Company Name</th>
                  <th className="py-2 px-4 border border-b border-white">Designation</th>
                  <th className="py-2 px-4 border border-b border-white">Company Address</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.map((user) => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.firstName}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.secondName}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.lastName}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.gender}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.email}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.Occupation || "N/A"}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.residentialAddress}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.zipCode}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.city}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.state}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.country}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">+{user.countryCode}-{user.stateCode}-{user.phoneNumber1}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.phoneNumber2 || "N/A"}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.username}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.howDidYouKnow}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.preferredCurrency || "N/A"}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.website || "N/A"}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.companyName || "N/A"}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.designation || "N/A"}</td>
                    <td className="py-2 px-4 border border-b border-gray-200">{user.companyAddress || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
           </main>
            </div>
    );
};

export default UserDetails;
