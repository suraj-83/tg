import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CorporateSidebar from "../components/CorporateDashboard/CorporateSidebar";

const BranchDetails = () => {
  const dispatch = useDispatch();
  const [branches, setBranches] = useState([
    {
      id: 1,
      name: "Branch 1",
      addLine1: "123 Main St",
      addLine2: "Apt 1",
      city: "City",
      state: "State",
      zipcode: "12345",
      contactNo: "1234567890",
      email: "branch1@example.com",
      phoneNumber: "1234567890",
      landlineNumber: "0987654321",
    },
    {
      id: 2,
      name: "Branch 2",
      addLine1: "456 Elm St",
      addLine2: " Apt 2",
      city: "City",
      state: "State",
      zipcode: "54321",
      contactNo: "9876543210",
      email: "branch2@example.com",
      phoneNumber: "9876543210",
      landlineNumber: "0123456789",
    },
  ]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(fetchBranches());
      if (response?.payload?.data) setBranches(response.payload.data);
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="flex">
      <CorporateSidebar />
      <main className="w-full p-6">
        <h1 className="pb-9 font-bold text-center uppercase text-2xl underline">
          Branch Details
        </h1>
        <div className="min-h-[90vh]">
          <table className="w-full table-auto text-center text-sm border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Branch Name</th>
                <th className="border px-4 py-2">Address1</th>
                <th className="border px-4 py-2">Address2</th>
                <th className="border px-4 py-2">City</th>
                <th className="border px-4 py-2">State</th>
                <th className="border px-4 py-2">ZipCode</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Landline</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch) => (
                <tr key={branch.id}>
                <td className="border px-4 py-2">{branch.name}</td>
                <td className="border px-4 py-2">{branch.addLine1}</td> 
                <td className="border px-4 py-2">{branch.addLine2}</td>
                    <td className="border px-4 py-2">{branch.city}</td>
                    <td className="border px-4 py-2">{branch.state}</td>
                    <td className="border px-4 py-2">{branch.zipcode}</td>
                  <td className="border px-4 py-2">{branch.email}</td>
                  <td className="border px-4 py-2">{branch.phoneNumber}</td>
                  <td className="border px-4 py-2">{branch.landlineNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BranchDetails;
