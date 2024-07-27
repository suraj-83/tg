import React from "react";
import CorporateSidebar from "./CorporateSidebar";

const CorporateDashboard = () => {
  return (
      <div className="flex">
        <CorporateSidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl ml-20 font-bold mb-4">Corporate Dashboard</h1>
        </main>
      </div>
      
  );
};

export default CorporateDashboard;
