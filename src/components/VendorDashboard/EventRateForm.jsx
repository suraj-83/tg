import React, { useState } from "react";
import VendorSidebar from "./VendorSidebar";
import Img from "../../assets/event.jpg";

const EventRateCardForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    filePath: null,
    type: "",
    noOfConfHall: false,
    highTeaOneTimeCharges: "",
    highTeaTwoTimeCharges: "",
    highTeaWithCookiesOneTimeCharges: "",
    highTeaWithCookiesTwoTimeCharges: "",
    cocktailCharges: "",
    perDayChargesForProjectors: "",
    djCharges: "",
    otherActivities: "",
    complementaryServices: "",
    confHalls: [
      {
        noOfConferenceHall: "",
        typeOfConferenceHall: "",
        conferenceHallStrength: "",
        conferenceHallCharges: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      filePath: file,
    });
  };

  const handleConfHallChange = (index, e) => {
    const { name, value } = e.target;
    const newConfHalls = [...formData.confHalls];
    newConfHalls[index][name] = value;
    setFormData({
      ...formData,
      confHalls: newConfHalls,
    });
  };

  const handleAddConfHall = () => {
    setFormData({
      ...formData,
      confHalls: [
        ...formData.confHalls,
        {
          noOfConferenceHall: "",
          typeOfConferenceHall: "",
          conferenceHallStrength: "",
          conferenceHallCharges: "",
        },
      ],
    });
  };

  const handleRemoveConfHall = (index) => {
    const newConfHalls = formData.confHalls.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      confHalls: newConfHalls,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data:", formData);
  };

  return (
    <div
      className="bg-fixed bg-cover bg-center flex"
      style={{
        backgroundImage: `url('${Img}')`,
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
              Add Event Rate Card
            </h1>

            {/* General Information */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="User ID"
                className="border p-2 rounded"
              />
              <input
                type="file"
                name="filePath"
                onChange={handleFileChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Type"
                className="border p-2 rounded"
              />
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="noOfConfHall"
                  checked={formData.noOfConfHall}
                  onChange={handleChange}
                  className="mr-2"
                />
                Number of Conference Halls
              </label>
              <input
                type="text"
                name="highTeaOneTimeCharges"
                value={formData.highTeaOneTimeCharges}
                onChange={handleChange}
                placeholder="High Tea One Time Charges"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="highTeaTwoTimeCharges"
                value={formData.highTeaTwoTimeCharges}
                onChange={handleChange}
                placeholder="High Tea Two Time Charges"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="highTeaWithCookiesOneTimeCharges"
                value={formData.highTeaWithCookiesOneTimeCharges}
                onChange={handleChange}
                placeholder="High Tea with Cookies One Time Charges"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="highTeaWithCookiesTwoTimeCharges"
                value={formData.highTeaWithCookiesTwoTimeCharges}
                onChange={handleChange}
                placeholder="High Tea with Cookies Two Time Charges"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="cocktailCharges"
                value={formData.cocktailCharges}
                onChange={handleChange}
                placeholder="Cocktail Charges"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="perDayChargesForProjectors"
                value={formData.perDayChargesForProjectors}
                onChange={handleChange}
                placeholder="Per Day Charges for Projectors"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="djCharges"
                value={formData.djCharges}
                onChange={handleChange}
                placeholder="DJ Charges"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="otherActivities"
                value={formData.otherActivities}
                onChange={handleChange}
                placeholder="Other Activities"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="complementaryServices"
                value={formData.complementaryServices}
                onChange={handleChange}
                placeholder="Complementary Services"
                className="border p-2 rounded"
              />
            </div>

            {/* Conference Hall Details */}
            {formData.noOfConfHall && (
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Conference Hall Details</h2>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border">No. of Conference Halls</th>
                      <th className="py-2 px-4 border">Type of Conference Hall</th>
                      <th className="py-2 px-4 border">Conference Hall Strength</th>
                      <th className="py-2 px-4 border">Conference Hall Charges</th>
                      <th className="py-2 px-4 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.confHalls.map((hall, index) => (
                      <tr key={index}>
                        <td className="border p-2">
                          <input
                            type="text"
                            name="noOfConferenceHall"
                            value={hall.noOfConferenceHall}
                            onChange={(e) => handleConfHallChange(index, e)}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="border p-2">
                          <input
                            type="text"
                            name="typeOfConferenceHall"
                            value={hall.typeOfConferenceHall}
                            onChange={(e) => handleConfHallChange(index, e)}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="border p-2">
                          <input
                            type="text"
                            name="conferenceHallStrength"
                            value={hall.conferenceHallStrength}
                            onChange={(e) => handleConfHallChange(index, e)}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="border p-2">
                          <input
                            type="text"
                            name="conferenceHallCharges"
                            value={hall.conferenceHallCharges}
                            onChange={(e) => handleConfHallChange(index, e)}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="border p-2 text-center">
                          <button
                            type="button"
                            onClick={() => handleRemoveConfHall(index)}
                            className="bg-red-500 text-white rounded px-3 py-1"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={handleAddConfHall}
                  className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
                >
                  Add Conference Hall
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-green-500 text-white rounded px-4 py-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EventRateCardForm;
