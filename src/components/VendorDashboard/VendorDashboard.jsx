import React from 'react'
import VendorHeader from './VendorHeader'
import VendorSidebar from './VendorSidebar'

const VendorDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <VendorHeader />
      <div className="flex flex-1">
        <VendorSidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Vendor Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard