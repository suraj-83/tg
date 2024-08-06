import React, { useState } from "react";
import { createHotelBooking } from "../../redux/slices/travelSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HotelBookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nationality: "Indian",
    name: "",
    contactNo1: "",
    contactNo2: "",
    email: "",
    country: "",
    state: "",
    city: "",
    roomCategory: "",
    mealPlan: "",
    hotelCategory: "",
    priceRange: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfNights: "",
    numberOfRooms: "",
    adults: "",
    children: "",
    infants: "",
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
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};
    if (!/^\d{10}$/.test(formData.contactNo1)) {
      newErrors.contactNo1 = "Contact number must be exactly 10 digits.";
    }
    if (formData.contactNo2 && !/^\d{10}$/.test(formData.contactNo2)) {
      newErrors.contactNo2 =
        "Alternative contact number must be exactly 10 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Data Submitted: ", formData);
      const response = await dispatch(createHotelBooking(formData));

      if (response?.payload?.data?.success) {
        navigate("/");
      }
      // Submit form logic here
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className=" flex items-center justify-center lg:px-[5%] md:px[5%] lg:py-[4%] md:py-[4%]">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100  text-sm bg-opacity-95 p-5 rounded-lg shadow-[0_0_10px_black]"
        >
          <h1 className="pb-3 font-bold  text-center text-blue-700 uppercase lg:text-2xl underline">
            Hotel Booking Request
          </h1>

          <div className="min-w-full grid grid-cols-3 text-sm md:grid-cols-5 gap-3 md:gap-6">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="nationality"
              >
                Nationality
              </label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-300 rounded focus:outline-none"
              >
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Australian">Australian</option>
                <option value="Brazilian">Brazilian</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Italian">Italian</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Mexican">Mexican</option>
                <option value="Russian">Russian</option>
                <option value="South African">South African</option>
                <option value="Turkish">Turkish</option>
                <option value="Egyptian">Egyptian</option>
                <option value="Nepalese">Nepalese</option>
                <option value="Bangladeshi">Bangladeshi</option>
                <option value="South Korean">South Korean</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Filipino">Filipino</option>
                <option value="Philippine">Philippine</option>
                <option value="Malaysian">Malaysian</option>
                <option value="Thai">Thai</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Sri Lankan">Sri Lankan</option>
                <option value="Canadian">Canadian</option>
                {/* add more options here */}
              </select>
            </div>
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
              <label className="block font-bold mb-2 text-gray-700">
                Contact No
              </label>
              <input
                type="tel"
                name="contactNo1"
                pattern="[0-9]{10}"
                value={formData.contactNo1}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your contact number"
                maxLength={10}
                title="Input should be exactly 10 digits."
              />
              {errors.contactNo1 && (
                <p className="text-red-500 text-sm mt-2">{errors.contactNo1}</p>
              )}
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Alternative No
              </label>
              <input
                type="tel"
                name="contactNo2"
                pattern="[0-9]{10}"
                value={formData.contactNo2}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter alternative contact number"
                maxLength={10}
                title="Input should be exactly 10 digits."
              />
              {errors.contactNo2 && (
                <p className="text-red-500 text-sm mt-2">{errors.contactNo2}</p>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Spain">Spain</option>
                <option value="Italy">Italy</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="Mexico">Mexico</option>
                <option value="Russia">Russia</option>
                <option value="South Africa">South Africa</option>
                <option value="Turkey">Turkey</option>
                <option value="Egypt">Egypt</option>
                <option value="Nepal">Nepal</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="South Korea">South Korea</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Philippines">Philippines</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Thailand">Thailand</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the state"
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the city"
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Room Category
              </label>
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

            <div className="mb-4">
              <label className="block font-bold mb-2 text-gray-700">
                Meal Plan
              </label>
              <select
                name="mealPlan"
                value={formData.mealPlan}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Meal Plan</option>
                <option value="EP Plan-Room Only Plan">
                  EP Plan-Room Only Plan
                </option>
                <option value="CP Plan-Continental Plan-Room with Buffet Breakfast">
                  CP Plan-Continental Plan-Room with Buffet Breakfast
                </option>
                <option value="MAP Plan-Modified American Plan-Buffet Breakfast with Major Buffet Meal Lunch / Dinner">
                  MAP Plan-Modified American Plan-Buffet Breakfast with Major
                  Buffet Meal Lunch / Dinner
                </option>
                <option value="AP-American Plan-with Buffet Breakfast Lunch & Dinner">
                  AP-American Plan-with Buffet Breakfast Lunch & Dinner
                </option>
              </select>
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Hotel Category
              </label>
              <select
                name="hotelCategory"
                value={formData.hotelCategory}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Hotel Category</option>
                <option value="Budget">Budget</option>
                <option value="2 Star">2 Star</option>
                <option value="3 Star">3 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="5 Star">5 Star</option>
              </select>
            </div>

            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Price Range
              </label>
              <select
                name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Price Range</option>
                <option value="Below Rs 2,500/-">Below Rs 2,500/-</option>
                <option value="Rs 2,500/- to Rs 5,000/-">
                  Rs 2,500/- to Rs 5,000/-
                </option>
                <option value="Rs 5,001/- to Rs 7,500/-">
                  Rs 5,001/- to Rs 7,500/-
                </option>
                <option value="Rs 7,500/- & Rs 10,000/-">
                  Rs 7,500/- & Rs 10,000/-
                </option>
                <option value="Rs 10,000/- & above">Rs 10,000/- & above</option>
              </select>
            </div>

            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Check In Date
              </label>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={(e) => {
                  handleChange(e);
                  const checkInDate = new Date(e.target.value);
                  const checkOutDate = new Date(formData.checkOutDate);
                  const timeDifference =
                    checkOutDate.getTime() - checkInDate.getTime();
                  const numberOfNights = Math.ceil(
                    timeDifference / (1000 * 3600 * 24)
                  );
                  setFormData((prevData) => ({
                    ...prevData,
                    numberOfNights,
                  }));
                }}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Check Out Date
              </label>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={(e) => {
                  handleChange(e);
                  const checkOutDate = new Date(e.target.value);
                  const checkInDate = new Date(formData.checkInDate);
                  const timeDifference =
                    checkOutDate.getTime() - checkInDate.getTime();
                  const numberOfNights = Math.ceil(
                    timeDifference / (1000 * 3600 * 24)
                  );
                  setFormData((prevData) => ({
                    ...prevData,
                    numberOfNights,
                  }));
                }}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Total No of Nights
              </label>
              <input
                type="number"
                name="numberOfNights"
                value={formData.numberOfNights || 0}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter total number of nights"
                min={0}
                readOnly
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Total No of Days
              </label>
              <input
                type="number"
                name="numberOfDays"
                value={formData.numberOfNights ? formData.numberOfNights + 1 : 0}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter total number of days"
                min={0}
                readOnly
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">
                No of Rooms Booked
              </label>
              <input
                type="number"
                name="numberOfRooms"
                value={formData.numberOfRooms || 0}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of rooms booked"
                min={0}
              />
            </div>

            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Adults
              </label>
              <input
                type="number"
                name="adults"
                value={formData.adults || 0}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of adults"
                min={0}
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Children
              </label>
              <input
                type="number"
                name="children"
                value={formData.children || 0}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of children"
                min={0}
              />
            </div>

            <div>
              <label className="block font-bold mb-2 text-gray-700">
                Infants
              </label>
              <input
                type="number"
                name="infants"
                value={formData.infants || 0}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of infants"
                min={0}
              />
            </div>
          </div>
          <div className="text-center pt-4">
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
