import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, SignUp, RetailLogin,RetailProfile,RetailUsers, TrainBookingDetails,FlightBookingDetails,CorporateSignup,CorporateProfile,CorporateUsers, NotFound, VendorSignup,VendorLogin,FlightBookings, TrainBookings, CabBookings, VolvoBusBookings, HotelBookings,CorporateLogin,Passport,TravelInsuranceForm,HealthLifeInsuranceForm } from "./pages";
import AdminDashboard from './components/admin/AdminDashboard' // Import the AdminDashboard component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="retail" element={<SignUp />} />
                <Route path="retail-login" element={<RetailLogin />} />
                <Route path="retail-profile" element={<RetailProfile />} />
                <Route path="retail-users" element={<RetailUsers />} />
                <Route path="corporate" element={<CorporateSignup />} />
                <Route path="corporate-login" element={<CorporateLogin />} /> 
                <Route path="corporate-profile" element={<CorporateProfile />} />
                <Route path="corporate-users" element={<CorporateUsers />} />
                <Route path="vendor" element={<VendorSignup />} />
                <Route path="vendor-login" element={<VendorLogin />} />
                <Route path="flightbookings" element={<FlightBookings />} />
                <Route path="flightbookingdetails" element={<FlightBookingDetails />} />
                <Route path="trainbookingdetails" element={<TrainBookingDetails />} />
                <Route path="trainbookings" element={<TrainBookings />} />
                <Route path="cabbookings" element={<CabBookings />} />
                <Route path="volvobusbookings" element={<VolvoBusBookings />} />
                <Route path="hotelbookings" element={<HotelBookings />} />
                <Route path="passport" element={<Passport />} /> {/* Add this line for admin route */}
                <Route path="travelinsurance" element={<TravelInsuranceForm />} />
                <Route path="healthlifeinsurance" element={<HealthLifeInsuranceForm />} />
                <Route path="admin/*" element={<AdminDashboard />} /> {/* Add this line for admin route */}
                {/* Other Routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
