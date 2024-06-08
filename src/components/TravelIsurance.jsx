import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TravelInsuranceForm = () => {
const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    contactNo: "",
    email: "",
    tripType: "Single",
    startDate: "",
    endDate: "",
    preExistingDisease: "No",
    diseaseName: "",
    smoker: "Non Smoker",
    passportNo: "",
    dateOfIssue: "",
    dateOfExpiry: "",
    nomineeName: "",
    nomineeGender: "",
    nomineeRelationship: "",
    proofOfBirthAndAddress: null,
});

const history = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file,
      });

      // Convert the file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          proofOfBirthAndAddress: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      proofOfBirthAndAddress: formData.proofOfBirthAndAddress
        ? formData.proofOfBirthAndAddress
        : null,
    };
    console.log("Form Data Submitted:", dataToSubmit);
    localStorage.setItem("formData", JSON.stringify(dataToSubmit));
    // Submit to backend here if needed
    history("/login");
  };

return (
    <div
    className="bg-cover bg-center min-h-screen flex items-center justify-center"
    style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1684407617181-275e50374e95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}
    >
    <div className="min-h-[100vh] w-full flex items-end justify-end p-24">
        <form
        onSubmit={handleSubmit}
        className="bg-blue-100  bg-opacity-95 p-5 rounded-lg w-full lg:w-1/2 shadow-[0_0_10px_black]"
        >
        <h1 className="pb-4 font-bold text-center text-blue-700 uppercase text-2xl underline">
            Request Form for Travel Insurance
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-4">
            <div>
            <label className="block mb-1 font-medium">
                Name of Person to be Insured
            </label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="As mentioned on the Passport"
            />
            </div>
            <div>
                <label className="block mb-1 font-medium">Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>
            <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>

            <div>
            <label className="block mb-1 font-medium">Contact No</label>
            <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>
            <div>
            <label className="block mb-1 font-medium">Email Id</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>

            <div className="mb-4">
            <label className="block mb-1 font-medium">Trip Type</label>
            <div className="flex items-center space-x-4">
                <label className="flex items-center">
                <input
                    type="radio"
                    name="tripType"
                    value="Single"
                    checked={formData.tripType === "Single"}
                    onChange={handleChange}
                    className="mr-2"
                />{" "}
                Single
                </label>
                <label className="flex items-center">
                <input
                    type="radio"
                    name="tripType"
                    value="Multiple"
                    checked={formData.tripType === "Multiple"}
                    onChange={handleChange}
                    className="mr-2"
                />{" "}
                Multiple
                </label>
            </div>
            </div>

            <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>
            <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>

            <div className="mb-4">
            <label className="block mb-1 font-medium">
                Pre-Existing Disease
            </label>
            <div className="flex items-center space-x-4">
                <label className="flex items-center">
                <input
                    type="radio"
                    name="preExistingDisease"
                    value="No"
                    checked={formData.preExistingDisease === "No"}
                    onChange={handleChange}
                    className="mr-2"
                />{" "}
                No
                </label>
                <label className="flex items-center">
                <input
                    type="radio"
                    name="preExistingDisease"
                    value="Yes"
                    checked={formData.preExistingDisease === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                />{" "}
                Yes
                {formData.preExistingDisease === "Yes" && (
                    <input
                    type="text"
                    name="diseaseName"
                    value={formData.diseaseName}
                    onChange={handleChange}
                    className="ml-2 p-2 border rounded-md"
                    placeholder="Name of disease"
                    />
                )}
                </label>
            </div>
            </div>

            <div className="mb-4">
            <label className="block mb-1 font-medium">
                Smoker / Non Smoker
            </label>
            <div className="flex items-center space-x-4">
                <label className="flex items-center">
                <input
                    type="radio"
                    name="smoker"
                    value="Smoker"
                    checked={formData.smoker === "Smoker"}
                    onChange={handleChange}
                    className="mr-2"
                />{" "}
                Smoker
                </label>
                <label className="flex items-center">
                <input
                    type="radio"
                    name="smoker"
                    value="Non Smoker"
                    checked={formData.smoker === "Non Smoker"}
                    onChange={handleChange}
                    className="mr-2"
                />{" "}
                Non Smoker
                </label>
            </div>
            </div>

            <div>
            <label className="block mb-1 font-medium">Passport No</label>
            <input
                type="text"
                name="passportNo"
                value={formData.passportNo}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>
            <div>
            <label className="block mb-1 font-medium">Date of Issue</label>
            <input
                type="date"
                name="dateOfIssue"
                value={formData.dateOfIssue}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>
            <div>
            <label className="block mb-1 font-medium">Date of Expiry</label>
            <input
                type="date"
                name="dateOfExpiry"
                value={formData.dateOfExpiry}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>
            <div>
            <label className="block mb-1 font-medium">Nominee's Name</label>
            <input
                type="text"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>
            <div>
            <label className="block mb-1 font-medium">Gender of Nominee</label>
            <select
                name="nomineeGender"
                value={formData.nomineeGender}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            </div>

            <div className="mb-4">
            <label className="block mb-1 font-medium">
                Relationship with the Nominee
            </label>
            <input
                type="text"
                name="nomineeRelationship"
                value={formData.nomineeRelationship}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
            />
            </div>
            <div className="mb-4">
            <label className="block mb-1 font-medium">
              Upload the Proof of Date of Birth & Address
            </label>
            <input
              type="file"
              name="proofOfBirthAndAddress"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md"
        >
            Submit
        </button>
        </form>
    </div>
    </div>
);
};

export default TravelInsuranceForm;
