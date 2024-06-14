// src/components/Dashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-2xl">$5,678</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold">New Signups</h3>
          <p className="text-2xl">123</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
