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

  const [editBranch, setEditBranch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(fetchBranches());
      if (response?.payload?.data) setBranches(response.payload.data);
    };
    fetchData();
  }, [dispatch]);

  const handleEdit = (branch) => {
    setEditBranch(branch);
  };

  const handleSave = () => {
    setBranches((prevBranches) =>
      prevBranches.map((b) =>
        b.id === editBranch.id ? editBranch : b
      )
    );
    setEditBranch(null);
  };

  const handleRemove = (id) => {
    setBranches((prevBranches) =>
      prevBranches.filter((branch) => branch.id !== id)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBranch({ ...editBranch, [name]: value });
  };

  return (
    <div className="flex">
      <CorporateSidebar />
      <main className="w-full p-6 bg-gray-900 overflow-auto text-white">      
        <h1 className="pb-9 font-bold text-center uppercase text-2xl underline">
          Branch Details
        </h1>
        <div className="min-h-[90vh]">
          {editBranch ? (
            <div>
              <h2 className="text-xl mb-4">Edit Branch</h2>
              <form className="mb-8 grid grid-cols-3 gap-2">
                <label className="block mb-2">
                  Branch Name
                  <input
                    type="text"
                    name="name"
                    value={editBranch.name}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Address Line 1
                  <input
                    type="text"
                    name="addLine1"
                    value={editBranch.addLine1}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Address Line 2
                  <input
                    type="text"
                    name="addLine2"
                    value={editBranch.addLine2}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  City
                  <input
                    type="text"
                    name="city"
                    value={editBranch.city}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  State
                  <input
                    type="text"
                    name="state"
                    value={editBranch.state}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Zipcode
                  <input
                    type="text"
                    name="zipcode"
                    value={editBranch.zipcode}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Email
                  <input
                    type="text"
                    name="email"
                    value={editBranch.email}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Phone Number
                  <input
                    type="text"
                    name="phoneNumber"
                    value={editBranch.phoneNumber}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Landline Number
                  <input
                    type="text"
                    name="landlineNumber"
                    value={editBranch.landlineNumber}
                    onChange={handleChange}
                    className="border bg-gray-900 text-white rounded px-2 py-1 w-full"
                  />
                </label>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 border border-blue-500 text-white"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditBranch(null)}
                  className="px-4 py-2 border border-gray-500 text-white ml-4"
                >
                  Cancel
                </button>
              </form>
            </div>
          ) : (
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
                  <th className="border px-4 py-2">Edit</th>
                  <th className="border px-4 py-2">Remove</th>
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
                    <td className="border px-4 py-2">
                      <button
                        className="px-2 py-1 border border-blue-500 text-blue-500"
                        onClick={() => handleEdit(branch)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        className="px-2 py-1 border border-red-500 text-red-500"
                        onClick={() => handleRemove(branch.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default BranchDetails;
