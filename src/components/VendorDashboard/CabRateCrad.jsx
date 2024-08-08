import React from 'react';
import FileUpload from './FileUpload';
import VendorSidebar from './VendorSidebar';


const data = [
  {
    city: "Delhi /NCR",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 1200, eightHours: 1850, extraHour: 200, extraKm: 18, nightCharge: 350, outstationKm: 16, driverAllowance: 350 },
      { vehicle: "Honda City/Ciaz", fourHours: 1850, eightHours: 2650, extraHour: 250, extraKm: 26, nightCharge: 350, outstationKm: 23, driverAllowance: 350 },
      // ... more data
    ],
  },
  {
    city: "Bangalore",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 1500, eightHours: 2500, extraHour: 250, extraKm: 22, nightCharge: 350, outstationKm: 22, driverAllowance: 350 },
      { vehicle: "Toyota Innova Crysta", fourHours: 2500, eightHours: 3800, extraHour: 350, extraKm: 35, nightCharge: 350, outstationKm: 35, driverAllowance: 350 },
      // ... more data
    ],
  },
  // ... more cities
];

const CabRateCard = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <main className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-500  w-full overflow-auto">
    <div className="p-4 pl-24">
      <FileUpload />
      {data.map((cityData, index) => (
        <div key={index} className="mb-8 ">
          <table className="min-w-full bg-white border border-gray-200 bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
            <thead>
          <h2 className="text-xl font-bold p-1 text-center">{cityData.city}</h2>
              <tr className="text-center text-sm">
                <th className="py-2 px-4 border">Vehicle Type</th>
                <th className="py-2 px-4 border">4 Hrs / 40 Kms</th>
                <th className="py-2 px-4 border">8 Hrs / 80 Kms</th>
                <th className="py-2 px-4 border">Extra Hour</th>
                <th className="py-2 px-4 border">Extra Km</th>
                <th className="py-2 px-4 border">Night Charge</th>
                <th className="py-2 px-4 border">Outstation Km</th>
                <th className="py-2 px-4 border">Driver Allowance</th>
              </tr>
            </thead>
            <tbody>
              {cityData.rates.map((rate, idx) => (
                <tr key={idx} className="text-center text-sm">
                  <td className="py-2 px-4 border">{rate.vehicle}</td>
                  <td className="py-2 px-4 border">₹ {rate.fourHours}</td>
                  <td className="py-2 px-4 border">₹ {rate.eightHours}</td>
                  <td className="py-2 px-4 border">₹ {rate.extraHour}</td>
                  <td className="py-2 px-4 border">₹ {rate.extraKm}</td>
                  <td className="py-2 px-4 border">₹ {rate.nightCharge}</td>
                  <td className="py-2 px-4 border">₹ {rate.outstationKm}</td>
                  <td className="py-2 px-4 border">₹ {rate.driverAllowance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  </main>
    </div>
  );
};

export default CabRateCard;
