import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, SignUp,ForgotPassword, RetailLogin,RetailProfile,RetailUsers,AdminLogin, TrainBookingDetails,FlightBookingDetails,CorporateSignup,CorporateProfile,CorporateUsers, NotFound, VendorSignup,VendorLogin,VendorDetails,FlightBookings, TrainBookings, CabBookings,CabBookingDetails, VolvoBusBookings,VolvoBusBookingDetails, HotelBookings,HotelBookingDetails,CorporateLogin,Passport,TravelInsuranceForm,HealthLifeInsuranceForm,HealthInsuranceDetails,TravelInsunranceDetails } from "./pages";
import AdminDashboard from './components/admin/AdminDashboard' // Import the AdminDashboard component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="retail" element={<SignUp />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
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
                <Route path="travelinsurance" element={<TravelInsuranceForm />} />
                <Route path="healthlifeinsurance" element={<HealthLifeInsuranceForm />} />
                <Route path="admin/healthinsurance-details" element={<HealthInsuranceDetails />} />
                <Route path="admin/travelinsurance-details" element={<TravelInsunranceDetails />} />
                <Route path="admin/*" element={<AdminDashboard />} /> 
                <Route path="admin/login" element={<AdminLogin />} />
                {/* Add this line for admin route */}
                {/* Other Routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
