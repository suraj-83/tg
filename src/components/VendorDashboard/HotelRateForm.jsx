import React, { useState } from "react";
import VendorSidebar from "./VendorSidebar";

const HotelRateCardForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    filePath: "",
    fileExists: false,
    type: "",
    submissionDate: "",
    companyName: "", // Assuming this is retrieved from vendor signup data
    hotelName: "",
    hotelAddress: "",
    hotelState: "",
    hotelCity: "",
    hotelPincode: "",
    phoneNo: "",
    emailId: "",
    gstNo: "",
    rateValidFrom: "",
    rateValidTill: "",
    rooms: [
      {
        weekendType: "",
        roomType: "",
        occupancyType: "",
        roomOnlyRate: "",
        cpaiRate: "",
        mapiRate: "",
        epRate: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoomChange = (index, e) => {
    const { name, value } = e.target;
    const newRooms = [...formData.rooms];
    newRooms[index][name] = value;
    setFormData({
      ...formData,
      rooms: newRooms,
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      filePath: file,
    });
  };
  const handleAddRoom = () => {
    setFormData({
      ...formData,
      rooms: [
        ...formData.rooms,
        {
          weekendType: "",
          roomType: "",
          occupancyType: "",
          roomOnlyRate: "",
          cpaiRate: "",
          mapiRate: "",
          epRate: "",
        },
      ],
    });
  };

  const handleRemoveRoom = (index) => {
    const newRooms = formData.rooms.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      rooms: newRooms,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div
      className="bg-fixed bg-cover bg-center flex"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <VendorSidebar />
      <main className="min-h-screen w-full overscroll-y-auto">
        <form
          onSubmit={handleSubmit}
          className="font-extrabold bg-opacity-95 rounded-lg w-full"
        >
          <div className="p-6 overflow-y-auto bg-white bg-opacity-40 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
            <h1 className="text-2xl font-bold text-center mb-4 uppercase">
              Add Hotel Rate Card
            </h1>
            <div className="grid grid-cols-3 text-extrabold uppercase gap-4">
  <div>
    <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
    <input
      type="text"
      name="userId"
      id="userId"
      value={formData.userId}
      onChange={handleChange}
      placeholder="User ID"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="filePath" className="block text-sm font-medium text-gray-700"> Upload File</label>
    <input
                type="file"
                name="filePath"
                onChange={handleFileChange}
                className="border p-2 rounded"
              />
  </div>
  <div>
    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
    <input
      type="text"
      name="type"
      id="type"
      value={formData.type}
      onChange={handleChange}
      placeholder="Type"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="submissionDate" className="block text-sm font-medium text-gray-700">Submission Date</label>
    <input
      type="date"
      name="submissionDate"
      id="submissionDate"
      value={formData.submissionDate}
      onChange={handleChange}
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700">Hotel Name</label>
    <input
      type="text"
      name="hotelName"
      id="hotelName"
      value={formData.hotelName}
      onChange={handleChange}
      placeholder="Hotel Name"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="hotelAddress" className="block text-sm font-medium text-gray-700">Hotel Address</label>
    <input
      type="text"
      name="hotelAddress"
      id="hotelAddress"
      value={formData.hotelAddress}
      onChange={handleChange}
      placeholder="Hotel Address"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="hotelState" className="block text-sm font-medium text-gray-700">Hotel State</label>
    <input
      type="text"
      name="hotelState"
      id="hotelState"
      value={formData.hotelState}
      onChange={handleChange}
      placeholder="Hotel State"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="hotelCity" className="block text-sm font-medium text-gray-700">Hotel City</label>
    <input
      type="text"
      name="hotelCity"
      id="hotelCity"
      value={formData.hotelCity}
      onChange={handleChange}
      placeholder="Hotel City"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="hotelPincode" className="block text-sm font-medium text-gray-700">Hotel Pincode</label>
    <input
      type="text"
      name="hotelPincode"
      id="hotelPincode"
      value={formData.hotelPincode}
      onChange={handleChange}
      placeholder="Hotel Pincode"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">Phone Number</label>
    <input
      type="text"
      name="phoneNo"
      id="phoneNo"
      value={formData.phoneNo}
      onChange={handleChange}
      placeholder="Phone Number"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="emailId" className="block text-sm font-medium text-gray-700">Email ID</label>
    <input
      type="email"
      name="emailId"
      id="emailId"
      value={formData.emailId}
      onChange={handleChange}
      placeholder="Email ID"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="gstNo" className="block text-sm font-medium text-gray-700">GST Number</label>
    <input
      type="text"
      name="gstNo"
      id="gstNo"
      value={formData.gstNo}
      onChange={handleChange}
      placeholder="GST Number"
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="rateValidFrom" className="block text-sm font-medium text-gray-700">Rate Valid From</label>
    <input
      type="date"
      name="rateValidFrom"
      id="rateValidFrom"
      value={formData.rateValidFrom}
      onChange={handleChange}
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>

  <div>
    <label htmlFor="rateValidTill" className="block text-sm font-medium text-gray-700">Rate Valid Till</label>
    <input
      type="date"
      name="rateValidTill"
      id="rateValidTill"
      value={formData.rateValidTill}
      onChange={handleChange}
      className="border p-2 rounded mt-1 block w-full"
    />
  </div>
</div>


            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2">Room Details</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border min-w-[100px]">Weekend Type</th>
                    <th className="py-2 px-4 border min-w-[100px]">Room Type</th>
                    <th className="py-2 px-4 border min-w-[100px]">Occupancy Type</th>
                    <th className="py-2 px-4 border min-w-[100px]">Room Only Rate</th>
                    <th className="py-2 px-4 border min-w-[100px]">CPAI Rate</th>
                    <th className="py-2 px-4 border min-w-[100px]">MAPAI Rate</th>
                    <th className="py-2 px-4 border min-w-[100px]">EP Rate</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.rooms.map((room, index) => (
                    <tr key={index} className="text-center">
                      {Object.keys(room).map((field) => (
                        <td key={field} className="border p-2">
                          <input
                            type="text"
                            name={field}
                            value={room[field]}
                            onChange={(e) => handleRoomChange(index, e)}
                            className="border p-2 rounded bg-white text-extrabold text-black opacity-40 w-full"
                          />
                        </td>
                      ))}
                      <td className="border p-2">
                        {formData.rooms.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveRoom(index)}
                            className="bg-red-500 text-white py-2 px-4 rounded"
                          >
                            Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleAddRoom}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Add Room
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default HotelRateCardForm;
