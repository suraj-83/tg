import React, { useState } from 'react';

const HotelBookingForm = () => {
const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    nationality: '',
    email: '',
    hotelName: '',
    hotelAddress: '',
    hotelContactNo: '',
    mealPlan: '',
    roomCategory: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfNights: '',
    numberOfRooms: '',
    adults: '',
    children: '',
    infants: '',
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
    ...prevData,
    [name]: value,
    }));

    // Clear errors when the user types
    setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: '',
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};
    if (!/^\d{10}$/.test(formData.contactNo)) {
    newErrors.contactNo = 'Contact number must be exactly 10 digits.';
    }

    if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    } else {
    console.log('Form Data Submitted: ', formData);
      // Submit form logic here
    }
};
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-8 text-center text-blue-600">Hotel Booking Request</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block font-bold mb-2 text-gray-700">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
            />
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Contact No</label>
            <input
                type="tel"
                name="contactNo"
                pattern="[0-9]{10}"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your contact number"
                maxLength={10}
                title="Input should be exactly 10 digits."
            />
            {errors.contactNo && (
                <p className="text-red-500 text-sm mt-2">{errors.contactNo}</p>
            )}
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Nationality</label>
            <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your nationality"
            />
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
            />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block font-bold mb-2 text-gray-700">Hotel Name</label>
            <input
                type="text"
                name="hotelName"
                value={formData.hotelName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the hotel name"
            />
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Hotel Address</label>
            <input
                type="text"
                name="hotelAddress"
                value={formData.hotelAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the hotel address"
            />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block font-bold mb-2 text-gray-700">Hotel Contact No</label>
            <input
                type="text"
                name="hotelContactNo"
                value={formData.hotelContactNo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the hotel contact number"
            />
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Meal Plan</label>
            <input
                type="text"
                name="mealPlan"
                value={formData.mealPlan}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the meal plan"
            />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block font-bold mb-2 text-gray-700">Room Category</label>
            <select
                name="roomCategory"
                value={formData.roomCategory}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Select Room Category</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Family Room">Family Room</option>
                <option value="Suite">Suite</option>
                <option value="Presidential Room">Presidential Room</option>
            </select>
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Check In Date</label>
            <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block font-bold mb-2 text-gray-700">Check Out Date</label>
            <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Total No of Nights</label>
            <input
                type="number"
                name="numberOfNights"
                value={formData.numberOfNights}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter total number of nights"
            />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block font-bold mb-2 text-gray-700">No of Rooms Booked</label>
            <input
                type="number"
                name="numberOfRooms"
                value={formData.numberOfRooms}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of rooms booked"
            />
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Adults</label>
            <input
                type="number"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of adults"
            />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block font-bold mb-2 text-gray-700">Children</label>
            <input
                type="number"
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of children"
            />
            </div>
            <div>
            <label className="block font-bold mb-2 text-gray-700">Infants</label>
            <input
                type="number"
                name="infants"
                value={formData.infants}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of infants"
            />
            </div>
        </div>
        <div className="text-center">
            <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
            Submit Booking Request
            </button>
        </div>
        </form>
    </div>
    </div>
);
};

export default HotelBookingForm;
