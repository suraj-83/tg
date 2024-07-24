import React from 'react'
import VendorHeader from './VendorHeader'
import VendorSidebar from './VendorSidebar'


const VendorDashboard = () => {
  return (
      <div className="flex">
        <VendorSidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl pl-16 font-bold mb-4">Vendor Dashboard</h1>
        </main>
      </div>
  );
};

export default VendorDashboard