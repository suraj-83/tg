import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, SignUp,ForgotPassword,VerifyOtp,ResetPassword, RetailLogin,RetailProfile,RetailUsers,AdminLogin, TrainBookingDetails,FlightBookingDetails,CorporateSignup,CorporateProfile,CorporateUsers, NotFound, VendorSignup,VendorLogin,VendorDetails,FlightBookings, TrainBookings, CabBookings,CabBookingDetails, VolvoBusBookings,VolvoBusBookingDetails, HotelBookings,HotelBookingDetails,CorporateLogin,Passport,TravelInsuranceForm,HealthLifeInsuranceForm,HealthInsuranceDetails,TravelInsunranceDetails } from "./pages";
import AdminDashboard from './components/admin/AdminDashboard' // Import the AdminDashboard component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="retail" element={<SignUp />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="verify-otp" element={<VerifyOtp />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="retail-login" element={<RetailLogin />} />
                <Route path="retail-profile" element={<RetailProfile />} />
                <Route path="admin/retail-users" element={<RetailUsers />} />
                <Route path="corporate" element={<CorporateSignup />} />
                <Route path="corporate-login" element={<CorporateLogin />} /> 
                <Route path="corporate-profile" element={<CorporateProfile />} />
                <Route path="admin/corporate-users" element={<CorporateUsers />} />
                <Route path="vendor" element={<VendorSignup />} />
                <Route path="vendor-login" element={<VendorLogin />} />
                <Route path="admin/vendor-details" element={<VendorDetails />} />
                <Route path="flightbookings" element={<FlightBookings />} />
                <Route path="admin/flightbookingdetails" element={<FlightBookingDetails />} />
                <Route path="admin/trainbookingdetails" element={<TrainBookingDetails />} />
                <Route path="trainbookings" element={<TrainBookings />} />
                <Route path="cabbookings" element={<CabBookings />} />
                <Route path="admin/cabbookingdetails" element={<CabBookingDetails />} />
                <Route path="volvobusbookings" element={<VolvoBusBookings />} />
                <Route path="admin/volvobusbookingdetails" element={<VolvoBusBookingDetails />} />
                <Route path="hotelbookings" element={<HotelBookings />} />
                <Route path="admin/hotelbookingdetails" element={<HotelBookingDetails />} />
                <Route path="passport" element={<Passport />} /> {/* Add this line for admin route */}
                <Route path="admin/passport-details" element={<PassportBookingsDetails />} />
                <Route path="travelinsurance" element={<TravelInsuranceForm />} />
                <Route path="healthlifeinsurance" element={<HealthLifeInsuranceForm />} />
                <Route path="admin/healthinsurance-details" element={<HealthInsuranceDetails />} />
                <Route path="admin/travelinsurance-details" element={<TravelInsunranceDetails />} />
                <Route
                    path="admin/*"
                    element={<RequireAuth><AdminDashboard /></RequireAuth>}
                /> 
                <Route path="admin/login" element={<AdminLogin />} />
                {/* Other Routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

const RequireAuth = ({ children }) => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; 
    return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

export default App;
