import React from "react";
import CorporateHeader from "./CorporateHeader";
import CorporateSidebar from "./CorporateSidebar";

const CorporateDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <CorporateHeader />
      <div className="flex flex-1">
        <CorporateSidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl ml-20 font-bold mb-4">Corporate Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default CorporateDashboard;
