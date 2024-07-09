import React, { useEffect, useState } from "react";
import VendorHeader from "./VendorHeader";
import VendorSidebar from "./VendorSidebar";

const VendorTrainManagement = () => {
  const [trains, setTrains] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [trainDetails, setTrainDetails] = useState({});
  const mockTrains = [
    { id: 1, trainNo: "12345", departure: "City A", arrival: "City B", date: "2024-07-15", status: "On Time" },
    { id: 2, trainNo: "67890", departure: "City C", arrival: "City D", date: "2024-07-20", status: "Delayed" },
    { id: 3, trainNo: "54321", departure: "City E", arrival: "City F", date: "2024-07-25", status: "Cancelled" },
  ];

  const mockTrainDetails = {
    trainNo: "12345",
    departure: "City A",
    arrival: "City B",
    date: "2024-07-15",
    status: "On Time",
    passengers: [
      { name: "John Doe", age: 30, seat: "1A" },
      { name: "Jane Smith", age: 25, seat: "1B" },
    ],
    travelDuration: "5 hours",
    platform: "5",
    coach: "B2",
  };

  useEffect(() => {
    // Simulating fetching trains data
    setTimeout(() => {
      setTrains(mockTrains);
    }, 1000); // Simulate delay for async behavior
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      // Simulating fetching train details based on selected train
      if (selectedTrain) {
        setTimeout(() => {
          setTrainDetails(mockTrainDetails);
        }, 500); // Simulate delay for async behavior
      }
    };
    fetchDetails();
  }, [selectedTrain]);

  const handleTrainSelect = (train) => {
    setSelectedTrain(train);
  };

  return (
    <div className="flex flex-col h-screen">
      <VendorHeader />
      <div className="flex flex-1">
        <VendorSidebar />
        <main className="min-h-screen bg-gray-100 w-full overflow-auto">
          <div className="p-4">
            <h1 className="text-2xl font-bold uppercase">Vendor Train Management</h1>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/4 p-4">
              <h2 className="text-xl font-bold mb-4">Train List</h2>
              <ul className="divide-y divide-gray-300">
                {trains.map((train) => (
                  <li
                    key={train.id}
                    className={`p-2 mb-2 cursor-pointer ${selectedTrain?.id === train.id ? 'bg-gray-200' : ''}`}
                    onClick={() => handleTrainSelect(train)}
                  >
                    {train.trainNo} - {train.departure} to {train.arrival} ({train.date})
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-3/4 p-4">
              {selectedTrain && (
                <>
                  <h2 className="text-xl font-bold mb-4">Train Details</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                      <tbody>
                        <tr>
                          <td className="font-semibold w-1/3">Train No:</td>
                          <td>{trainDetails.trainNo}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Departure:</td>
                          <td>{trainDetails.departure}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Arrival:</td>
                          <td>{trainDetails.arrival}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Date:</td>
                          <td>{trainDetails.date}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Status:</td>
                          <td>{trainDetails.status}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Travel Duration:</td>
                          <td>{trainDetails.travelDuration}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Platform:</td>
                          <td>{trainDetails.platform}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Coach:</td>
                          <td>{trainDetails.coach}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Passengers:</td>
                          <td>
                            <ul className="list-disc pl-4">
                              {trainDetails.passengers &&
                                trainDetails.passengers.map((passenger, index) => (
                                  <li key={index}>{passenger.name} - Seat: {passenger.seat} (Age: {passenger.age})</li>
                                ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorTrainManagement;
