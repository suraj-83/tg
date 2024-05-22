import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, SignUp, Login, CorporateSignup, NotFound, VenderSignup, FlightBookings, TrainBookings, CabBookings, VolvoBusBookings, HotelBookings } from "./pages";
import AdminDashboard from './components/admin/AdminDashboard' // Import the AdminDashboard component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="retail" element={<SignUp />} />
                <Route path="login" element={<Login />} />
                <Route path="corporate" element={<CorporateSignup />} />
                <Route path="vender" element={<VenderSignup />} />
                <Route path="flightbookings" element={<FlightBookings />} />
                <Route path="trainbookings" element={<TrainBookings />} />
                <Route path="cabbookings" element={<CabBookings />} />
                <Route path="volvobusbookings" element={<VolvoBusBookings />} />
                <Route path="hotelbookings" element={<HotelBookings />} />
                <Route path="admin/*" element={<AdminDashboard />} /> {/* Add this line for admin route */}
                {/* Other Routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
