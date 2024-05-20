import React, { useState } from 'react';
import Select from 'react-select';
import { zipCodeMapping, industryOptions } from "../data.js"
import corprateImg from "../assets/img.jpg";
import { Footer, Header } from '../components';

function Form() {
    const initialFormData = {
        industry: '',
        companyName: '',
        addresses: ['', '', '', ''],
        zipCode: '',
        country: '',
        cityCode:'',
        city: '',
        state: '',
        contactPerson: {
            firstName: '',
            SecondName: '',
            lastName: ''
        },
        gender: '',
        phoneNumber: '',
        phoneNumber2: '',
        landlineNumber: { countryCode: '', cityCode: '', number: '' },
        email: '',
        website: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleZipCodeChange = (e) => {
        const zipCode = e.target.value;
        setFormData(prevState => ({
            ...prevState,
            zipCode: zipCode,
            country: zipCodeMapping[zipCode]?.country || '',
            city: zipCodeMapping[zipCode]?.city || '',
            state: zipCodeMapping[zipCode]?.state || ''
        }));
    };

    // Handler for industry/business type change
    const handleIndustryChange = (selectedOption) => {
        setFormData(prevState => ({
            ...prevState,
            industry: selectedOption.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log form data to the console
        setFormData(initialFormData); // Reset form data to initial state
    };

    return (
        <>
        {/* <div className='sticky top-0'>            <Header/></div> */}
        
        <div className='h-screen w-full mx-auto flex'>
            <div className='w-1/2 h-screen hidden md:block'>
                <img src={corprateImg} alt="" className='bg-contain h-full' />
            </div>
            <div className='w-full  lg:w-1/2 h-screen overflow-y-scroll'>
                <form onSubmit={handleSubmit} className="bg-gray-100 p-6 ">
                    <h1 className="pb-9 font-bold  text-center uppercase text-2xl underline">
                        Corporate Sign Up
                    </h1>

                    <div className=" min-h-[90vh]">
                        <div className="flex flex-wrap sm:flex-wrap gap-3">
                            <div className='flex justify-between w-full gap-3'>
                                <div className="mb-4">
                                    {/* <label htmlFor="country" className="block mb-2 font-semibold">Country</label> */}
                                    <input
                                        type="text"
                                        id="country"
                                        placeholder='Country'
                                        value={formData.country || 'India'}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                {/* Company Name */}
                                <div className="mb-4">
                                    {/* <label htmlFor="companyName" className="block mb-2 font-semibold">Company Name</label> */}
                                    <input
                                        type="text"
                                        id="companyName"
                                        placeholder='Company Name'
                                        value={formData.companyName}
                                        onChange={(e) => setFormData(prevState => ({ ...prevState, companyName: e.target.value }))}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4 w-[35vh]">
                                    {/* <label htmlFor="industry" className="block mb-2 font-semibold">Type of Industry/Business</label> */}
                                    <Select
                                        id="industry"
                                        placeholder="Type of Industry/Business"
                                        value={industryOptions.find(option => option.value === formData.industry)}
                                        onChange={handleIndustryChange}
                                        options={industryOptions} className='rounded'
                                    />
                                </div>
                            </div>
                            {/* Address 1 */}
                            <div className="mb-4">
                                {/* <label htmlFor="address1" className="block mb-2 font-semibold">Address Line 1</label> */}
                                <input
                                    type="text"
                                    id="address1"
                                    placeholder='Address-1'
                                    value={formData.addresses[0]}
                                    onChange={(e) => setFormData(prevState => ({
                                        ...prevState,
                                        addresses: [
                                            e.target.value,
                                            formData.addresses[1],
                                            formData.addresses[2],
                                            formData.addresses[3]
                                        ]
                                    }))}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            {formData.addresses[0] && (
                                <div className="mb-4">
                                    {/* <label htmlFor="address2" className="block mb-2 font-semibold">Address Line 2</label> */}
                                    <input
                                        type="text"
                                        id="address2"
                                        placeholder='Address-2'
                                        value={formData.addresses[1]}
                                        onChange={(e) => setFormData(prevState => ({
                                            ...prevState,
                                            addresses: [
                                                formData.addresses[0],
                                                e.target.value,
                                                formData.addresses[2],
                                                formData.addresses[3]
                                            ]
                                        }))}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                            )}

                            {formData.addresses[1] && (
                                <div className="mb-4">
                                    {/* <label htmlFor="address3" className="block mb-2 font-semibold">Address Line 3</label> */}
                                    <input
                                        type="text"
                                        id="address3"
                                        placeholder='Address-3'
                                        value={formData.addresses[2]}
                                        onChange={(e) => setFormData(prevState => ({
                                            ...prevState,
                                            addresses: [
                                                formData.addresses[0],
                                                formData.addresses[1],
                                                e.target.value,
                                                formData.addresses[3]
                                            ]
                                        }))}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-3 w-full">

                            {/* ZIP Code */}
                            <div className="mb-4 w-full">
                                {/* <label htmlFor="zipCode" className="block mb-2 font-semibold">ZIP Code</label> */}
                                <input
                                    type="text"
                                    id="zipCode"
                                    placeholder='ZIP/PIN Code'
                                    value={formData.zipCode}
                                    onChange={handleZipCodeChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            {/* City */}
                            <div className="mb-4 w-full">
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
                            <div className="mb-4 w-full">
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

                        </div>
                        <div className="flex flex-wrap">

                            {/* Contact Person */}
                            <div className="mb-4">
                                <p className="w-full py-2 font-semibold">Contact Details</p>
                                <div className='flex gap-4 pb-4'>
                                    <select
                                        value={formData.contactPerson.title}
                                        onChange={(e) => {
                                            if (e.target.value === 'Other') {
                                                setFormData(prevState => ({
                                                    ...prevState, contactPerson: { ...prevState.contactPerson, title: e.target.value, otherTitle: '' }
                                                }))
                                            } else {
                                                setFormData(prevState => ({
                                                    ...prevState, contactPerson: { ...prevState.contactPerson, title: e.target.value }
                                                }))
                                            }
                                        }}
                                        className=" p-2 border border-gray-300 rounded">
                                        <option value="">-- Select Deparment --</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Hr/Human Resources">Hr/Human Resources</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Travel Desk">Travel Desk</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {
                                        formData.contactPerson.title === 'Other' &&
                                        <input
                                            type="text"
                                            placeholder="Other Department"
                                            value={formData.contactPerson.otherTitle}
                                            onChange={(e) => setFormData(prevState => ({ ...prevState, contactPerson: { ...prevState.contactPerson, otherTitle: e.target.value } }))}
                                            className=" p-2 border border-gray-300 rounded mt-2"
                                        />
                                    }

                                </div>
                                <div className="grid grid-cols-3 gap-4 justify-between w-full">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={formData.contactPerson.firstName}
                                        onChange={(e) => setFormData(prevState => ({ ...prevState, contactPerson: { ...prevState.contactPerson, firstName: e.target.value } }))}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Second Name"
                                        value={formData.contactPerson.SecondName}
                                        onChange={(e) => setFormData(prevState => ({ ...prevState, contactPerson: { ...prevState.contactPerson, SecondName: e.target.value } }))}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={formData.contactPerson.lastName}
                                        onChange={(e) => setFormData(prevState => ({ ...prevState, contactPerson: { ...prevState.contactPerson, lastName: e.target.value } }))}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />

                                </div>
                            </div>
                            {/* Gender */}
                            <div className="mb-4">
                                <fieldset>
                                    {/* <legend className="block mb-2 font-semibold">Gender</legend> */}
                                    <div className='flex items-center justify-center gap-8'>
                                        <div className="flex items-center">
                                            <input type="radio" name="gender" id="gender-male" value="male" />
                                            <label htmlFor="gender-male" className="ml-2">Male</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" name="gender" id="gender-female" value="female" />
                                            <label htmlFor="gender-female" className="ml-2">Female</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" name="gender" id="gender-transgender" value="transgender" />
                                            <label htmlFor="gender-transgender" className="ml-2">Transgender</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>


                        </div>

                        {/* Phone Number */}
                        <>
                            <div className="mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.phoneNumberVisible}
                                        onChange={() => setFormData(prevState => ({ ...prevState, phoneNumberVisible: !prevState.phoneNumberVisible }))}
                                        className="mr-2"
                                    />
                                    Mobile Number
                                    <input
                                        type="checkbox"
                                        checked={formData.landlineNumberVisible}
                                        onChange={() => setFormData(prevState => ({ ...prevState, landlineNumberVisible: !prevState.landlineNumberVisible }))}
                                        className="ml-4 mr-2"
                                    />
                                    Landline Number
                                </div>
                                {formData.phoneNumberVisible && (
                            <div className='flex flex-wrap'>
                                <div className="flex mt-2">
                                        <input
                                            type="text"
                                            maxLength={4}
                                            minLength={3}
                                            value={formData.phoneNumber.countryCode ? `+${formData.phoneNumber.countryCode}` : ''}
                                            onChange={(e) => setFormData(prevState => ({
                                                ...prevState,
                                                phoneNumber: { ...prevState.phoneNumber, countryCode: e.target.value.replace(/^0+/, '+').replace(/\D/g, '') }
                                            }))}
                                            className="w-28 p-2 border border-gray-300 rounded"
                                            placeholder="CountryCode"
                                        />
                                        <input
                                            type="text"
                                            maxLength={2}
                                            minLength={2}
                                            value={formData.phoneNumber.stateCode || ''}
                                            onChange={(e) => setFormData(prevState => ({
                                                ...prevState,
                                                phoneNumber: { ...prevState.phoneNumber, stateCode: e.target.value.replace(/^0+/, '').replace(/\D/g, '') }
                                            }))}
                                            className="w-28 p-2 border border-gray-300 rounded ml-2 mr-2"
                                            placeholder="StateCode"
                                        />
                                        <input
                                            type="text"
                                            maxLength={10}
                                            value={formData.phoneNumber.number}
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                            </div>
                                )}
                                {formData.landlineNumberVisible && (
                                    <div className="flex mt-2">
                                        <input
                                            type="text"
                                            maxLength={4}
                                            minLength={3}
                                            value={`+${formData.landlineNumber.countryCode}`}
                                            onChange={(e) => setFormData(prevState => ({
                                                ...prevState,
                                                landlineNumber: { ...prevState.landlineNumber, countryCode: e.target.value.replace(/^\+?/, '+').replace(/\D/g, '') }
                                            }))}
                                            className="w-20 p-2 border border-gray-300 rounded mr-2"
                                            placeholder="CountryCode" 
                                            style={{ color: 'gray' }}
                                            aria-label="CountryCode" 
                                        />

                                        <input
                                            type="text"
                                            maxLength={4}
                                            minLength={3}
                                            value={formData.landlineNumber.cityCode}
                                            onChange={(e) => setFormData(prevState => ({
                                                ...prevState,
                                                landlineNumber: { ...prevState.landlineNumber, cityCode: e.target.value }
                                            }))}
                                            className="w-20 p-2 border border-gray-300 rounded mr-2"
                                            placeholder="CityCode"
                                        />
                                        <input
                                            type="text"
                                            maxLength={7}
                                            minLength={6}
                                            value={formData.landlineNumber.number}
                                            onChange={(e) => setFormData(prevState => ({
                                                ...prevState,
                                                landlineNumber: { ...prevState.landlineNumber, number: e.target.value.replace(/\D/g, '') }
                                            }))}
                                            className="w-40 p-2 border border-gray-300 rounded"
                                            placeholder="Landline Number"
                                        />
                                    </div>
                                )}
                            </div>
                            {/* Email */}


                        </>

                        <div className="mb-4 flex items-center gap-4 w-full">
                            {/* <label htmlFor="email" className="block mb-2 font-semibold">Email</label> */}
                            <input
                                type="email"
                                id="email"
                                placeholder='Email Address'
                                value={formData.email}
                                onChange={(e) => setFormData(prevState => ({
                                    ...prevState,
                                    email: e.target.value.replace(/[^\w.@+-]/g, '')
                                }))}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="password"
                                id="password"
                                placeholder='Password'
                                value={formData.password}
                                onChange={(e) => setFormData(prevState => ({
                                    ...prevState,
                                    password: e.target.value
                                }))}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                id="website"
                                placeholder="Website Adress"
                                value={formData.website}
                                onChange={(e) => setFormData(prevState => ({ ...prevState, website: e.target.value.replace(/[^a-zA-Z0-9.-]/g, '') }))}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        {/* Industry/Business Type */}

                        {/* Submit Button */}
                        <div className="mb-4">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div></>
    );
}

export default Form;
