import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';

const UserTypeSelection = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

//   useEffect(() => {
//     gsap.to(containerRef.current, {
//       background: "linear-gradient(135deg, #4169E1 60%, #7A00E6 66%, #000000 100%)",
//       duration: 3,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });
//   }, []);

  const handleUserTypeClick = (userType) => {
    navigate(`/${userType}`);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x"
    >
      <h1 className="text-2xl font-extrabold mb-8 uppercase text-white">
        Select User Type
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleUserTypeClick('retail')}
          className="px-6 py-3 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-950 hover:opacity-100 duration-300 ... bg-white bg-opacity-20 uppercase text-white rounded-lg shadow-md hover:bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-20"
        >
          Retail
        </button>
        <button
          onClick={() => handleUserTypeClick('corporate')}
          className="px-6 py-3 bg-white bg-opacity-20 uppercase text-white rounded-lg shadow-md hover:bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-950 hover:opacity-100 duration-300 ..."
        >
          Corporate
        </button>
        <button
          onClick={() => handleUserTypeClick('vendor')}
          className="px-6 py-3 bg-white bg-opacity-20 uppercase text-white rounded-xl shadow-md hover:bg-opacity-30 backdrop-filter backdrop-blur-lg border border-gray-700 border-opacity-20 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-950 hover:opacity-100 duration-300 ..."
        >
          Vendor
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelection;
