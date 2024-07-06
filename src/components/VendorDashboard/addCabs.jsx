import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addCab } from '../redux/cabActions';
import userImg from "../../assets/new.jpg";

const AddCabForm = () => {
    const dispatch = useDispatch();
    const initialFormData = {
        model: '',
        registrationNumber: '',
        status: '',
        capacity: 0,
        location: '',
        driver: '',
        name: '',
        contact: '',
        maintenance: '',
        nextDate: ''
        
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCab(formData));
        setFormData(initialFormData);
    };

    return (
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url('${userImg}')`,
          }}
        >
          <div className="min-h-[100vh] flex items-center justify-center p-24">
                <form onSubmit={handleSubmit} className="p-6 bg-blue-100 bg-opacity-95 rounded-lg">
                    <h1 className="text-2xl font-bold text-center mb-6">Add Cab</h1>
                    <div className='mb-4 grid grid-cols-3 gap-2'>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Model</label>
                        <input type="text" name="model" value={formData.model} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Registration Number</label>
                        <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <input type="text" name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Capacity</label>
                        <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Driver Name</label>
                        <input type="text" name="driver.name" value={formData.driver.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Driver Contact</label>
                        <input type="text" name="driverContact" maxLength="10"
                        title="10 digit mobile number"
                        pattern="[0-9]{10}" value={formData.driverContact} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Maintenance Next Date</label>
                        <input type="date" name="maintenanceNextDate" value={formData.maintenanceNextDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Add Cab</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCabForm;
