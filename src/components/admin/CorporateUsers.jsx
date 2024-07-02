import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCorporateUsers } from "../../redux/slices/dashboardSlice";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

const UserDetails = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(getAllCorporateUsers());
      setUserDetails(response.payload.data);
    };
    fetchData();
  }, [dispatch]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="overflow-auto bg-gray-200 w-full">
          {/* <h1 className="text-2xl font-bold mb-6">User Details</h1> */}
          <table className="min-w-full text-sm bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Company Name</th>
                <th className="py-2 px-4 border">Industry</th>
                <th className="py-2 px-4 border">Website</th>
                <th className="py-2 px-4 border">Country</th>
                <th className="py-2 px-4 border">State</th>
                <th className="py-2 px-4 border">City</th>
                <th className="py-2 px-4 border">ZIP Code</th>
                <th className="py-2 px-4 border">Address1</th>
                <th className="py-2 px-4 border">Address2</th>
                <th className="py-2 px-4 border">Address3</th>
                <th className="py-2 px-4 border">Address4</th>
                <th className="py-2 px-4 border">First Name</th>
                <th className="py-2 px-4 border">Second Name</th>
                <th className="py-2 px-4 border">Last Name</th>
                <th className="py-2 px-4 border">Gender</th>
                <th className="py-2 px-4 border">Department</th>
                <th className="py-2 px-4 border">Mobile Number</th>
                <th className="py-2 px-4 border">Landline Number</th>
                <th className="py-2 px-4 border">Email</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border">{user.companyName}</td>
                  <td className="py-2 px-4 border">{user.industry}</td>
                  <td className="py-2 px-4 border">
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user.website}
                    </a>
                  </td>
                  <td className="py-2 px-4 border">{user.country}</td>
                  <td className="py-2 px-4 border">{user.state}</td>
                  <td className="py-2 px-4 border">{user.city}</td>
                  <td className="py-2 px-4 border">{user.zipCode}</td>
                  <td className="py-2 px-4 border">{user.address1}</td>
                  <td className="py-2 px-4 border">{user.address2 || "N/A"}</td>
                  <td className="py-2 px-4 border">{user.address3 || "N/A"}</td>
                  <td className="py-2 px-4 border">{user.address4 || "N/A"}</td>
                  <td className="py-2 px-4 border">{user.contactPersonFirstName}</td>
                  <td className="py-2 px-4 border">{user.contactPersonSecondName}</td>
                  <td className="py-2 px-4 border">{user.contactPersonLastName}</td>
                  <td className="py-2 px-4 border">{user.contactPersonGender}</td>
                  <td className="py-2 px-4 border">{user.contactDepartment}</td>
                  <td className="py-2 px-4 border">
                    {user.phoneNumber ? `+${user.countryCode}-${user.stateCode}-${user.phoneNumber}` : "N/A"}
                  </td>
                  <td className="py-2 px-4 border">
                    {user.landlineNumber ? `+${user.landlineCountryCode}-${user.landlineCityCode}-${user.landlineNumber}` : "N/A"}
                  </td>
                  <td className="py-2 px-4 border">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default UserDetails;
