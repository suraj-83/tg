import React, { useState, useEffect } from "react";
import {
  RETAIL_TYPE_NAME,
  CORPORATE_TYPE_NAME,
  VENDOR_TYPE_NAME,
} from "../config/config";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const response = await dispatch(login({ email, password })).catch(
        (error) => {
          if (error.response?.status === 401) {
            toast.error("Invalid credentials");
            throw error;
          }
        }
      );

      if (response?.payload?.data?.success) {
        const userType = response?.payload?.data?.data?.userType;
        const dashboardRoute =
          userType === VENDOR_TYPE_NAME
            ? "/vendordashboard"
            : userType === CORPORATE_TYPE_NAME
            ? "/corporatedashboard"
            : userType === RETAIL_TYPE_NAME
            ? "/retaildashboard"
            : "";

        navigate(dashboardRoute);

        if (userType === VENDOR_TYPE_NAME) {
          localStorage.setItem("isVendor", true);
        } else if (userType === CORPORATE_TYPE_NAME) {
          localStorage.setItem("isCorporate", true);
        } else if (userType === RETAIL_TYPE_NAME) {
          localStorage.setItem("isRetail", true);
        }
      }
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    if (user) {
      const dashboardRoute =
        user?.userType === VENDOR_TYPE_NAME
          ? "/vendordashboard"
          : user?.userType === CORPORATE_TYPE_NAME
          ? "/corporatedashboard"
          : user?.userType === RETAIL_TYPE_NAME
          ? "/retaildashboard"
          : "";

      navigate(dashboardRoute);
    }
  }, [user, navigate]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-gradient-x">
      <div className="bg-white/50 rounded-lg shadow-lg p-5 z-10 flex items-center justify-center border border-gray-100 flex-col w-full md:w-1/2 lg:w-1/3 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <h1 className="mb-3 font-bold text-center uppercase text-2xl underline">
    Login</h1>
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
            <p className="text-red-500 text-sm">Invalid email or password</p>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex items-center mt-2 justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="flex justify-between mt-4">
            <Link to="/forgot-password" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/create-account" className="text-sm text-indigo-600 hover:underline">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
