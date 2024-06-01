import React, { useState } from "react";
// import { createCabBooking } from "../../redux/slices/travelSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CabBookingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    pickupCountry: "",
    nationality: "",
    tourPlan: "",
    name: "",
    contactNo: "",
    alternateContactNo: "",
    email: "",
    cabRequiredAt: "",
    cabRequiredFor: "",
    localTravelKmsLimit: "",
    pickupDateTime: "",
    pickupAddress: "",
    pickupLandmark: "",
    dropDateTime: "",
    dropAddress: "",
    dropLandmark: "",
    cabDuration: "",
    noOfCabsRequired: "",
    typeOfCabRequired: "",
    noOfPersonsTravelling: "",
    noOfInfants: "",
    noOfChildren: "",
    otherRequirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await dispatch(createCabBooking(formData));
  //   console.log(response);

  //   if (response?.payload?.data?.success) {
  //     navigate("/");
  //   }
  // };

  return (
    <div
      className="bg-cover  bg-center" 
      style={{
        backgroundImage: `url('https://cdn.leonardo.ai/users/9419a3d8-5e1c-4610-bac3-e853525ff24c/generations/c07daa91-ea45-4bee-993e-3912bd313110/Default_Create_a_highresolution_background_image_for_a_cab_boo_1.jpg')`,
      }}
    >
      <div className="min-h-[100vh] flex items-center justify-center p-[10%]">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 bg-opacity-95 p-5 rounded-lg w-full h-full shadow-[0_0_10px_black]"
        >
          <div>
            <h1 className="pb-4 font-bold  text-center text-blue-700 uppercase text-2xl underline">
            Cab Booking Request Form
          </h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3  gap-3">
          <div className="mb-4">
            <label className="block text-gray-950 font-bold mb-2" htmlFor="pickupCountry">
              Pickup Country
            </label>
            <select
              name="pickupCountry"
              value={formData.pickupCountry}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            >
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
              {/* add more options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nationality">
              Nationality
            </label>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
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
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="tourPlan">
              Tour Plan
            </label>
            <select
              name="tourPlan"
              value={formData.tourPlan}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            >
              <option value="">--Select--</option>
              <option value="Local">Local</option>
              <option value="Outstation">Outstation</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNo">
              Contact No
            </label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="alternateContactNo">
              Alternate Contact No
            </label>
            <input
              type="text"
              name="alternateContactNo"
              value={formData.alternateContactNo}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="grid w-38 grid-cols-3 md:grid-cols-3 gap-4 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="cabRequiredState">
                State
              </label>
              <input
                type="text"
                name="cabRequiredState"
                value={formData.cabRequiredState}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="cabRequiredCity">
                City
              </label>
              <input
                type="text"
                name="cabRequiredCity"
                value={formData.cabRequiredCity}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="cabRequiredPinCode">
                PinCode
              </label>
              <input
                type="text"
                name="cabRequiredPinCode"
                value={formData.cabRequiredPinCode}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4 w-38 ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cabRequiredFor">
              Cab Required For
            </label>
            <select
              name="cabRequiredFor"
              value={formData.cabRequiredFor}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            >
              <option value="">--Select--</option>
              <option value="Airport Transfer / Drop">Airport Transfer / Drop</option>
              <option value="Outstation Travel">Outstation Travel</option>
              <option value="One Way Drop">One Way Drop</option>
              <option value="Multiple City Travel & Drop">Multiple City Travel & Drop</option>
              <option value="Outstation Round Trip with 250 Kms Limit">Outstation Round Trip with 250 Kms Limit</option>
              <option value="Local Travel">Local Travel</option>
            </select>
          </div>    
          {formData.cabRequiredFor === "Local Travel" && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="localTravelKmsLimit">
                Kms Limit for Local Travels
              </label>
              <select
                name="localTravelKmsLimit"
                value={formData.localTravelKmsLimit}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              >
                <option value="">--Select--</option>
                <option value="4 Hrs & 40 Kms">4 Hrs & 40 Kms</option>
                <option value="8 Hrs & 80 Kms">8 Hrs & 80 Kms</option>
                <option value="12 Hrs & 120 Kms">12 Hrs & 120 Kms</option>
                <option value="Full Day">Full Day</option>
              </select>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="pickupDateTime">
              Pickup Date & Time
            </label>
            <input
              type="datetime-local"
              name="pickupDateTime"
              value={formData.pickupDateTime}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="pickupAddress">
              Pickup Address
               {/* with Landmark / Location */}
            </label>
            <input
              type="text"
              name="pickupAddress"
              value={formData.pickupAddress}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Address"
            />
            <input
              type="text"
              name="pickupLandmark"
              value={formData.pickupLandmark}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Landmark"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dropDateTime">
              Drop Date & Time
            </label>
            <input
              type="datetime-local"
              name="dropDateTime"
              value={formData.dropDateTime}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dropAddress">
              Drop Address 
              {/* with Landmark / Location */}
            </label>
            <input
              type="text"
              name="dropAddress"
              value={formData.dropAddress}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Address"
            />
            <input
              type="text"
              name="dropLandmark"
              value={formData.dropLandmark}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Landmark"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="noOfCabsRequired">
              No of Cabs Required
            </label>
            <select
              name="noOfCabsRequired"
              value={formData.noOfCabsRequired}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            >
              {[...Array(11).keys()].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="typeOfCabRequired">
              Type of Cab Required
            </label>
            <select
              name="typeOfCabRequired"
              value={formData.typeOfCabRequired}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            >
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="minivan">Minivan</option>
              <option value="hatchback">Hatchback</option>
              <option value="saloon">Saloon</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="noOfPersonsTravelling">
              No of Person(s) Travelling
            </label>
            <select
              name="noOfPersonsTravelling"
              value={formData.noOfPersonsTravelling}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            >
              {[...Array(51).keys()].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="noOfInfants">
              If Traveling with Infant (Below 5 Yrs) / Child (Above 5 Yrs)
            </label>
            <input
              type="number"
              name="noOfInfants"
              value={formData.noOfInfants}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="No of Infants"
            />
            <input
              type="number"
              name="noOfChildren"
              value={formData.noOfChildren}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-2 border border-gray-300 rounded focus:outline-none"
              placeholder="No of Children"
            />
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="otherRequirements">
              Any other Requirement
            </label>
            <textarea
              name="otherRequirements"
              value={formData.otherRequirements}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Please Mention Here"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default CabBookingForm;
