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
      if (response && response.payload && response.payload.data) {
        setUserDetails(response.payload.data);
      }
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
        <div className="flex justify-between p-5">            
        <h1 className="w-full text-2xl p-2 font-bold uppercase text-center">   Corporate Users
          </h1>
          </div>
          <table className="min-w-full text-sm bg-white">
            <thead>
              <tr>
                <th className="py-2 px-10 border">CompanyName</th>
                <th className="py-2 px-10 border">Industry</th>
                <th className="py-2 px-10 border">Website</th>
                <th className="py-2 px-10 border">Country</th>
                <th className="py-2 px-10 border">State</th>
                <th className="py-2 px-10 border">City</th>
                <th className="py-2 px-10 border">ZIPCode</th>
                <th className="py-2 px-10 border">Address1</th>
                <th className="py-2 px-10 border">Address2</th>
                <th className="py-2 px-10 border">Address3</th>
                <th className="py-2 px-10 border">Address4</th>
                <th className="py-2 px-10 border">FirstName</th>
                <th className="py-2 px-10 border">SecondName</th>
                <th className="py-2 px-10 border">LastName</th>
                <th className="py-2 px-10 border">Gender</th>
                <th className="py-2 px-10 border">Department</th>
                <th className="py-2 px-10 border">MobileNumber</th>
                <th className="py-2 px-10 border">LandlineNumber</th>
                <th className="py-2 px-10 border">Email</th>
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
  );
};

export default UserDetails;
