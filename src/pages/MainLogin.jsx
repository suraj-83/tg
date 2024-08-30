import React, { useState, useEffect } from "react";
import { RETAIL_TYPE_NAME, CORPORATE_TYPE_NAME, VENDOR_TYPE_NAME } from '../config/config';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.auth, shallowEqual);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password }));
    } else {
      setIsValid(false);
    }
  };


  useEffect(() => {
    if (user) {
      // Navigate to the appropriate dashboard based on the user type
      const dashboardRoute = user.userType === VENDOR_TYPE_NAME 
        ? '/vendor-dashboard' 
        : user.userType === CORPORATE_TYPE_NAME 
        ? '/corporatedashboard' 
        : user.userType === RETAIL_TYPE_NAME
        ? '/retaildashboard'
        : '';
        
      navigate(dashboardRoute);
    }
  }, [user, navigate]);
  
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-gradient-x">
      <div className="bg-white/50 rounded-lg shadow-lg p-5 z-10 flex items-center justify-center border border-gray-100 flex-col w-full md:w-1/2 lg:w-1/3 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <h1 className="mb-3 font-bold text-center uppercase text-2xl underline">
            Login
          </h1>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {!isValid && (
            <p className="text-red-500 mt-1">Invalid email or password</p>
          )}
          {error && (
            <p className="text-red-500 mt-1">{error}</p>
          )}
          <div className="mb-4 flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div className="flex items-center">
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline mr-2"
              >
                Forgot Password?
              </Link>
              <Link to="/create-account" className="text-blue-500 hover:underline">
                Don't have an account? Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
