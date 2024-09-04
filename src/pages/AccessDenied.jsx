import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative p-8 bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="relative bg-gray-700 p-6 rounded-lg shadow-inner">
          <h1 className="text-4xl font-bold text-red-600 text-center">Access Denied</h1>
          <p className="mt-4 text-gray-300 text-center">You do not have permission to access this page.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 mx-auto block px-6 py-2 text-lg font-semibold text-white bg-black bg-opacity-20 rounded-full shadow-md backdrop-blur-lg transition-transform transform hover:scale-105 hover:bg-opacity-30 focus:ring-4 focus:ring-opacity-50"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
