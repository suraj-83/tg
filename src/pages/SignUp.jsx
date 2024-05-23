import React, { useState } from 'react';
import Select from 'react-select';
import { zipCodeMapping } from "../data.js";
import userImg from "../assets/userImg.png";
import { Footer, Header } from '../components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RetailSignup } from '../redux/slices/authSlice.js';

function RetailForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialFormData = {
        firstName: '',
        secondName: '',
        lastName: '',
        country: '',
        email: '',
        zipCode: '',
        state: '',
        city: '',
        phoneNo: '',
        countryCode: '',
        stateCode: '',
        username: '',
        password: '',
        residentialAddress: '',
        gender: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isValid, setIsValid] = useState(true);

    const handleZipCodeChange = (e) => {
        const zipCode = e.target.value;
        const mappedData = zipCodeMapping[zipCode];
        if (mappedData) {
            setFormData(prevState => ({
                ...prevState,
                zipCode: zipCode,
                country: mappedData.country || '',
                city: mappedData.city || '',
                state: mappedData.state || ''
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                zipCode: zipCode,
                country: '',
                city: '',
                state: ''
            }));
        }
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleCountryChange = (selectedOption) => {
        setFormData(prevState => ({
            ...prevState,
            country: selectedOption.value
        }));
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setFormData(prevState => ({
            ...prevState,
            password: newPassword
        }))
        setIsValid(validatePassword(newPassword));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData); // Log form data to the console
        const response = await dispatch(RetailSignup({
            city: formData.city,
            country: formData.country,
            countryCode: formData.countryCode,
            email: formData.email,
            firstName: formData.firstName,
            gender: formData.gender,
            lastName: formData.lastName,
            password: formData.password,
            phoneNo: formData.phoneNo,
            residentialAddress: formData.residentialAddress,
            secondName: formData.secondName,
            state: formData.state,
            stateCode: formData.stateCode,
            username: formData.username,
            zipCode: formData.zipCode,
        }));
        console.log(response);

        if (response?.payload?.data?.success) {
            navigate("/login");
        }

        setFormData(initialFormData); // Reset form data to initial state

    };

    // const isFormValid = () => {
    //     for (const key in formData) {
    //         if (formData[key] === '') {
    //             return false;
    //         }
    //     }
    //     return true;
    // };

    return (<>
        {/* <div className='sticky top-0'><Header/></div> */}
        <div className='h-screen w-full mx-auto flex'>
            <div className='w-1/2 h-screen hidden md:block'>
                <img src={userImg} alt="" className='bg-contain h-full' />
            </div>
            <div className='w-full  lg:w-1/2  h-screen overflow-y-scroll'>
                <form onSubmit={handleSubmit} className="p-6">
                    <h1 className="pb-11 font-bold  text-center uppercase text-2xl underline">
                        Retail Sign Up
                    </h1>

                    <div className=" min-h-[90vh]">
                        <div className="flex flex-wrap gap-3">
                            {/* First Name */}
                            <div className="mb-4">
                                {/* <label htmlFor="firstName" className="block mb-2 font-semibold">First Name</label> */}
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder='First Name'
                                    value={formData.firstName}
                                    onChange={(e) => setFormData(prevState => ({ ...prevState, firstName: e.target.value }))}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            {/* Second Name */}
                            <div className="mb-4">
                                {/* <label htmlFor="secondName" className="block mb-2 font-semibold">Second Name</label> */}
                                <input
                                    type="text"
                                    id="secondName"
                                    placeholder='Second Name'
                                    value={formData.secondName}
                                    onChange={(e) => setFormData(prevState => ({ ...prevState, secondName: e.target.value }))}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            {/* Last Name */}
                            <div className="mb-4">
                                {/* <label htmlFor="lastName" className="block mb-2 font-semibold">Last Name</label> */}
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder='Last Name'
                                    value={formData.lastName}
                                    onChange={(e) => setFormData(prevState => ({ ...prevState, lastName: e.target.value }))}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label htmlFor="gender" className="block mb-2 font-semibold">Gender</label> */}
                                <select
                                    id="gender"
                                    className="w-full border border-gray-300  p-2 rounded"
                                    value={formData.gender}
                                    onChange={(e) => setFormData(prevState => ({ ...prevState, gender: e.target.value }))}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="Transgender">Transgender</option>
                                </select>
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                {/* <label htmlFor="email" className="block mb-2 font-semibold">Email</label> */}
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Email Address'
                                    value={formData.email}
                                    onChange={(e) => setFormData(prevState => ({ ...prevState, email: e.target.value.replace(/[^\w.@+-]/g, '') }))}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label htmlFor="residentialAddress" className="block mb-2 font-semibold">Residential Address*</label> */}
                                <input
                                    type="text"
                                    id="residentialAddress"
                                    placeholder='Residential Address'
                                    value={formData.residentialAddress}
                                    onChange={(e) => setFormData(prevState => ({ ...prevState, residentialAddress: e.target.value }))}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            {/* Zip/Post Code */}
                            <div className="mb-4">
                                {/* <label htmlFor="zipCode" className="block mb-2 font-semibold">Zip/Post Code</label> */}
                                <input
                                    type="text"
                                    id="zipCode"
                                    placeholder='ZIP/PIN code'
                                    value={formData.zipCode}
                                    onChange={handleZipCodeChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            {/* City */}
                            <div className="mb-4">
                                {/* <label htmlFor="city" className="block mb-2 font-semibold">City</label> */}
                                <input
                                    type="text"
                                    id="city"
                                    placeholder='City'
                                    value={formData.city}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            {/* State */}
                            <div className="mb-4">
                                {/* <label htmlFor="state" className="block mb-2 font-semibold">State</label> */}
                                <input
                                    type="text"
                                    id="state"
                                    placeholder='State'
                                    value={formData.state}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4">
                                {/* <label htmlFor="country" className="block mb-2 font-semibold">Country</label> */}
                                <input
                                    type="text"
                                    id="country"
                                    placeholder='Country'
                                    value={formData.country}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            {/* Contact Number */}
                            <div className="mb-4">
                                {/* <label htmlFor="phoneNumber" className="block mb-2 font-semibold">Phone Number</label> */}
                                <div className="flex">
                                    
                                <input
                                            type="text"
                                            maxLength={4}
                                            minLength={3}
                                            value={formData.phoneNumber?.countryCode ? `+${formData.phoneNumber.countryCode}` : ''}

                                            onChange={(e) => setFormData(prevState => ({
                                                ...prevState,
                                                phoneNumber: { ...prevState.phoneNumber, countryCode: e.target.value.replace(/^0+/, '+').replace(/\D/g, '') }
                                            }))}
                                            className="w-28 p-2 border border-gray-300 rounded mr-2"
                                            placeholder="CountryCode"
                                        />
                                    <input
                                        type="text"
                                        maxLength={2}
                                        minLength={2}
                                        value={formData.phoneNumber?.stateCode || ''}
                                        onChange={(e) => setFormData(prevState => ({
                                            ...prevState,
                                            phoneNumber: { ...(prevState.phoneNumber || {}), stateCode: e.target.value.replace(/^0+/, '').replace(/\D/g, '') }
                                        }))}
                                        className="w-28 p-2 border border-gray-300 rounded ml-2 mr-2"
                                        placeholder="StateCode"
                                    />
                                    <input
                                        type="text"
                                        maxLength={10}
                                        value={formData.phoneNumber?.number || ''}
                                        onChange={(e) => {
                                            setFormData(prevState => ({
                                                ...prevState,
                                                phoneNumber: { ...prevState.phoneNumber, number: e.target.value.replace(/\D/g, '') }
                                            }));
                                        }}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Phone Number"
                                    />
                                    {/* {JSON.stringify(formData.phoneNumber) !== '{}'
                                        ? <p className="text-red-600">{JSON.stringify(formData.phoneNumber)}</p>
                                        : null
                                    } */}
                                </div>
                            </div>
                            {formData.phoneNumber && (
                                <div className="mb-4">
                                    <div className="flex">
                                        <input
                                            type="text"
                                            maxLength={4}
                                            minLength={3}
                                            value={formData.phoneNumber.countryCode ? `+${formData.phoneNumber.countryCode}` : ''}
                                            onChange={(e) => setFormData(prevState => ({
                                                ...prevState,
                                                phoneNumber: { ...prevState.phoneNumber, countryCode: e.target.value.replace(/^0+/, '+').replace(/\D/g, '') }
                                            }))}
                                            className="w-28 p-2 border border-gray-300 rounded mr-2"
                                            placeholder="CountryCode"
                                        />
                                        <input
                                            type="text"
                                            maxLength={2}
                                            minLength={2}
                                            value={formData.phoneNumber.stateCode || ''}
                                            onChange={(e) => setFormData(prevState => ({
                                                ...prevState,
                                                phoneNumber: { ...(prevState.phoneNumber || {}), stateCode: e.target.value.replace(/^0+/, '').replace(/\D/g, '') }
                                            }))}
                                            className="w-28 p-2 border border-gray-300 rounded ml-2 mr-2"
                                            placeholder="StateCode"
                                        />
                                        <input
                                            type="text"
                                            maxLength={10}
                                            value={formData.phoneNumber2}
                                            onChange={(e) => setFormData(prevState => ({ ...prevState, phoneNumber2: e.target.value.replace(/\D/g, '') }))}
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Alternate Number"
                                        />
                                    </div>
                                </div>
                            )}
                            {/* Username */}
                            <div className="mb-4 w-full flex items-center gap-4">
                                {/* <label htmlFor="username" className="block mb-2 font-semibold">Username</label> */}
                                <input
                                    type="text"
                                    id="username"
                                    placeholder='Username'
                                    value={formData.username}
                                    onChange={(e) => setFormData(prevState => ({ ...prevState, username: e.target.value }))}
                                    className="p-2 border border-gray-300 rounded"
                                />
                                {/* Password */}
                                <input
                                    type="password"
                                    id="password"
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handlePasswordChange}
                                    className="p-2 border border-gray-300 rounded"
                                />
                                {!isValid && <p className="text-red-500 mt-1">Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character</p>}
                            </div>

                            {/* How did you come to know about mycompany */}
                            <div className="mb-4 w-full pr-px ">
                                {/* <label htmlFor="howDidYouKnow" className="block mb-2 font-semibold">How did you come to know about TGES ?</label> */}
                                <textarea
                                    id="howDidYouKnow"
                                    placeholder='How did you come to know about TGES ?'
                                    className="w-full p-2  border border-gray-300 rounded-lg "
                                />
                            </div>

                        </div>

                        {/* Submit Button */}
                        <div className="mb-4">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">SignUp</button>
                        </div>
                    </div>
                </form>
            </div>
        </div></>
    );
}

export default RetailForm;
