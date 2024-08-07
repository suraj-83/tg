import React, { useState } from "react";
import { createHotelBooking } from "../../redux/slices/travelSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HotelBookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
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
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const handleIncrementAdults = () => {
      if (adults < 8) setAdults(adults + 1);
    };

    const handleDecrementAdults = () => {
      if (adults > 0) setAdults(adults - 1);
    };

    const handleIncrementChildren = () => {
      if (children < 8) setChildren(children + 1);
    };

    const handleDecrementChildren = () => {
      if (children > 0) setChildren(children - 1);
    };

    const handleIncrementInfants = () => {
      if (infants < 8) setInfants(infants + 1);
    };

    const handleDecrementInfants = () => {
      if (infants > 0) setInfants(infants - 1);
    };
  
    // const handleIncrement = (setter, value) => {
    //   setter(value + 1);
    // };
  
    // const handleDecrement = (setter, value) => {
    //   if (value > 0) {
    //     setter(value - 1);
    //   }
    // };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-sm">
             <div>
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
            <div className="m-4 col-span-3 text-center">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
    </div>
          </div>
        );

      case 2:
        return (
          <div className="text-sm gap-3">
        
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
            <div className="m-4 col-span-3 text-center">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none mr-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-sm">
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
      <div className="flex gap-2 mt-2">
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700">
          Adults <span className="text-sm text-gray-500">(12+ years)</span>
        </label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDecrementAdults(setAdults, adults)}
            className="px-4 py-3 border-l  rounded-full border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            -
          </button>
          <input
            type="number"
            name="adults"
            value={adults}
            readOnly
            className="w-12 text-center p-3 border-t border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleIncrementAdults(setAdults, adults)}
            className="px-4 py-3 border-r  rounded-full border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            +
          </button>
        </div>
      </div>
      <div>
        <label className="block font-bold mb-2 text-gray-700">
          Children <span className="text-sm text-gray-500">(1 - 11 years)</span>
        </label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDecrementChildren(setChildren, children)}
            className="px-4 py-3 border-l  rounded-full border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            -
          </button>
          <input
            type="number"
            name="children"
            value={children}
            readOnly
            className="w-12 text-center p-3 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleIncrementChildren(setChildren, children)}
            className="px-4 py-3 border-r  rounded-full border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div>
      <label className="block font-bold mb-2 text-gray-700">
        Infants
        <span className="text-sm text-gray-500">(0+ years)</span>
      </label>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleDecrementInfants(setInfants, infants)}
          className="px-4 py-3 border-l  rounded-full border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          -
        </button>
        <input
          type="number"
          name="infants"
          value={infants}
          readOnly
          className="w-12 text-center p-3 border-t border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => handleIncrementInfants(setInfants, infants)}
          className="px-4 py-3 border-r  rounded-full border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          +
        </button>
      </div>
    </div>
      </div>

            <div className="m-4 col-span-3 text-center">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none mr-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
            </div>          
        )
        default:
          return null;
      }
    };
    return (
      <div className="min-h-[100vh] flex items-center justify-center lg:p-[10%]">
    <form
        onSubmit={handleSubmit}
        className="bg-blue-100 bg-opacity-95 p-5 rounded-lg w-full h-full shadow-[0_0_10px_black]"
      >
        <div>
          <h1 className="pb-4 font-bold text-sm text-center text-blue-700 uppercase md:text-2xl underline">
            Hotel Booking
          </h1>
        </div>
        {renderStep()}
      </form>
      </div>
    )

        
      
};

export default HotelBookingForm;
