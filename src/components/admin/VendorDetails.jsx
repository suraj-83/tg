import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import { getAllVendors } from '../../redux/slices/dashboardSlice';

const VendorDetails = () => {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        let response = await dispatch(getAllVendors());
        setUserDetails(response.payload.data);
      };
      fetchData();
    }, []);

    if (!userDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col h-screen">
            <AdminHeader />
        <div className="flex flex-1">
                <AdminSidebar />
        <main className="p-4 w-full  overflow-auto">            
            <h1 className="text-2xl font-bold mb-4">Vendor Details</h1>
            <div className="overflow-x-auto">
                
                <table className="min-w-full text-sm bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Company Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone Number</th>
                            <th className="py-2 px-4 border-b">Landline Number</th>
                            <th className="py-2 px-4 border-b">Address</th>
                            <th className="py-2 px-4 border-b">City</th>
                            <th className="py-2 px-4 border-b">State</th>
                            <th className="py-2 px-4 border-b">Country</th>
                            <th className="py-2 px-4 border-b">Zip Code</th>
                            <th className="py-2 px-4 border-b">Area of Work</th>
                            <th className="py-2 px-4 border-b">Website</th>
                            <th className="py-2 px-4 border-b">Contact Person</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDetails.map((vendor) => (
                            <tr key={vendor.id}>
                                <td className="py-2 px-4 border-b">{vendor.companyName}</td>
                                <td className="py-2 px-4 border-b">{vendor.email}</td>
                                <td className="py-2 px-4 border-b">{vendor.phoneNumber}</td>
                                <td className="py-2 px-4 border-b">
                                    {vendor.landlineCountryCode && `+${vendor.landlineCountryCode} `}
                                    {vendor.landlineCityCode && `${vendor.landlineCityCode} `}
                                    {vendor.landlineNumber}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {vendor.address1}
                                    {vendor.address2 && `, ${vendor.address2}`}
                                    {vendor.address3 && `, ${vendor.address3}`}
                                    {vendor.address4 && `, ${vendor.address4}`}
                                </td>
                                <td className="py-2 px-4 border-b">{vendor.city}</td>
                                <td className="py-2 px-4 border-b">{vendor.state}</td>
                                <td className="py-2 px-4 border-b">{vendor.country}</td>
                                <td className="py-2 px-4 border-b">{vendor.zipCode}</td>
                                <td className="py-2 px-4 border-b">{vendor.areaOfWork}</td>
                                <td className="py-2 px-4 border-b">{vendor.website}</td>
                                <td className="py-2 px-4 border-b">
                                    {vendor.contactPersonFirstName} {vendor.contactPersonSecondName} {vendor.contactPersonLastName} ({vendor.contactPersonGender})
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
        </div>
    </div>
   
    );
};

export default VendorDetails;
