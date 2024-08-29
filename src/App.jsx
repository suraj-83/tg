import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, AboutUs, SignUp,ForgotPassword,HotelDetails,HotelRateCard,AddBranchForm,BranchDetails,EmployeeLogin,EmployeeDetails,EmployeeCabDetails,EmployeeFlightDetails,EmployeeHotelDetails, EmployeeTrainDetails,EmployeeVolvoBusDetails,VendorHotelManagement,VendorBusManagement,VolvoBusDetails,HotelStatus,VendorTrainManagement,MainLogin,TrainStatus,TrainDetails, VolvoBus,VendorFlightManagement,AddCabs,Flights,FlightDetails,VendorCabManagement,VerifyOtp,ResetPassword,CabDetails,CabBookingDetail,PassportBookingsDetails,RetailLogin,RetailProfile,RetailUsers,AdminLogin, TrainBookingDetails,FlightBookingDetails,CorporateSignup,CorporateProfile,CorporateUsers, NotFound, VendorSignup,VendorLogin,VendorDetails,FlightBookings, TrainBookings, CabBookings,CabBookingDetails, VolvoBusBookings,VolvoBusBookingDetails, HotelBookings,HotelBookingDetails,CorporateLogin,Passport,TravelInsuranceForm,HealthLifeInsuranceForm,HealthInsuranceDetails,TravelInsunranceDetails } from "./pages";
import AdminDashboard from './components/admin/AdminDashboard' // Import the AdminDashboard component
import RetailDashboard from './components/RetailDashboard/RetailDashboard' // Import the RetailDashboard component
import CorporateDashboard from './components/CorporateDashboard/CorporateDashboard' // Import the CorporateDashboard component
import VendorDashboard from './components/VendorDashboard/VendorDashboard' // Import the VendorDashboard component
import EmployeeForm from './pages/EmployeeRegister'
import EmployeeDashboard  from './components/EmployeeDashboard/EmployeeDashboard';
import Dashboard from './components/Sidebar';
import CabRateCard from './components/VendorDashboard/CabRateCrad';
import CabRateForm from './components/VendorDashboard/CabRateForm';
import HotelRateCardForm from './components/VendorDashboard/HotelRateForm';
import EventRateCardForm from './components/VendorDashboard/EventRateForm';
import EventRateCard from './components/VendorDashboard/EventRateCard';
import ContactUs from './components/ContactUs';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="retail" element={<SignUp />} />
                <Route path="corporate" element={<CorporateSignup />} />
                <Route path="vendor" element={<VendorSignup />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="verify-otp" element={<VerifyOtp />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="retail-login" element={<RetailLogin />} />
                <Route path="retail-profile" element={<RetailProfile />} />
                <Route path="corporate-login" element={<CorporateLogin />} /> 
                <Route path="corporate-profile" element={<CorporateProfile />} />
                <Route path="vendor-login" element={<VendorLogin />} />
                <Route path="flightbookings" element={<FlightBookings />} />
                <Route path="trainbookings" element={<TrainBookings />} />
                <Route path="cabbookings" element={<CabBookings />} />
                <Route path="volvobusbookings" element={<VolvoBusBookings />} />
                <Route path="hotelbookings" element={<HotelBookings />} />
                <Route path="passport" element={<Passport />} /> {/* Add this line for admin route */}
                <Route path="travelinsurance" element={<TravelInsuranceForm />} />
                <Route path="healthlifeinsurance" element={<HealthLifeInsuranceForm />} />
                <Route path="main-login" element={<MainLogin />} />
                {/* Admin */}
                <Route path="admin/corporate-users" element={<CorporateUsers />} />
                <Route path="admin/vendor-details" element={<VendorDetails />} />
                <Route path="admin/retail-users" element={<RetailUsers />} />
                <Route path="admin/flightbookingdetails" element={<FlightBookingDetails />} />
                <Route path="admin/hotelbookingdetails" element={<HotelBookingDetails />} />
                <Route path="admin/trainbookingdetails" element={<TrainBookingDetails />} />
                <Route path="admin/passport-details" element={<PassportBookingsDetails />} />
                <Route path="admin/cabbookingdetails" element={<CabBookingDetails />} />
                <Route path="admin/volvobusbookingdetails" element={<VolvoBusBookingDetails />} />
                <Route path="admin/healthinsurance-details" element={<HealthInsuranceDetails />} />
                <Route path="admin/travelinsurance-details" element={<TravelInsunranceDetails />} />
                {/* retaildashboard    */}
                <Route
                    path="retaildashboard/*"
                    element={<RequireRetailAuth><RetailDashboard /></RequireRetailAuth>}
                    
                />  
                {/* <Route path="retaildashboard" element={<RetailDashboard />} /> */}
                <Route path="retaildashboard/cab-details" element={<CabDetails />} />
                <Route path="retaildashboard/train-status" element={<TrainStatus />} />
                <Route path="retaildashboard/volvobus-details" element={<VolvoBus />} />
                <Route path="retaildashboard/flightbooking-details" element={<Flights />} />
                <Route path="retaildashboard/hotelstatus" element={<HotelStatus />} />
                {/* CorporateDashboard */}
                <Route path="corporatedashboard/*" element={<RequireCorporateAuth><CorporateDashboard /></RequireCorporateAuth>} />
                {/* <Route path="corporatedashboard" element={<CorporateDashboard />} /> */}
                <Route path="corporatedashboard/branch-details" element={<BranchDetails />} />
                <Route path="corporatedashboard/corporate-cab-details" element={<CabBookingDetail />} />
                <Route path="corporatedashboard/train-details" element={<TrainDetails />} />
                <Route path="corporatedashboard/flight-details" element={<FlightDetails />} />
                <Route path="corporatedashboard/volvobusdetails" element={<VolvoBusDetails />} />
                <Route path="corporatedashboard/hoteldetails" element={<HotelDetails />} />
                <Route path="corporatedashboard/employee-details" element={<EmployeeDetails />} />
                {/* EmployeeDashboard  */}
                <Route path="corporatedashboard/employee" element={<EmployeeForm />} />
                <Route path="employeelogin" element={<EmployeeLogin />} />
                <Route path="employeedashboard" element={<RequireEmployeeAuth><EmployeeDashboard /></RequireEmployeeAuth>} />
                {/* <Route path="employeedashboard" element={<EmployeeDashboard />} /> */}
                <Route path="employeedashboard/employee-cab-details" element={<EmployeeCabDetails />} />
                <Route path="employeedashboard/employee-flight-details" element={<EmployeeFlightDetails />} />
                <Route path="employeedashboard/employee-hotel-details" element={<EmployeeHotelDetails />} />
                <Route path="employeedashboard/employee-train-details" element={<EmployeeTrainDetails />} />
                <Route path="employeedashboard/employee-volvobus-details" element={<EmployeeVolvoBusDetails />} />
                <Route path="corporatedashboard/add-branch" element={<AddBranchForm />} />
                {/* VendorDashboard */}
                <Route path="vendordashboard/*" element={<RequireVendorAuth><VendorDashboard /></RequireVendorAuth>} />
                {/* <Route path="vendordashboard"element={<VendorDashboard />} />  */}
                <Route path="vendordashboard/vendor-cab-management" element={<VendorCabManagement />} />
                <Route path="vendordashboard/vendor-bus-management" element={<VendorBusManagement />} />
                <Route path="vendordashboard/vendor-hotel-management" element={<VendorHotelManagement />} /> 
                <Route path="vendordashboard/vendor-flight-management" element={<VendorFlightManagement />} /> 
                <Route path="vendordashboard/vendor-train-management" element={<VendorTrainManagement />} /> 
                <Route path="vendordashboard/addcabs" element={<AddCabs />} />
                <Route path="vendordashboard/vendor-cabratecard" element={<CabRateCard />} />
                <Route path="vendordashboard/vendor-addcabrate" element={<CabRateForm />} />
                <Route path="vendordashboard/vendor-addhotelratecard" element={<HotelRateCardForm />} />              
                <Route path="vendordashboard/vendor-hotelratecard" element={<HotelRateCard />} />
                <Route path="vendordashboard/vendor-eventratecardform" element={<EventRateCardForm />} />
                <Route path="vendordashboard/vendor-eventratecard" element={<EventRateCard />} />
                

                <Route
                    path="admin/*"
                    element={<RequireAuth><AdminDashboard /></RequireAuth>}
                    
                /> 
                {/* <Route path="admin" element={<AdminDashboard />} /> */}
                <Route path="admin/login" element={<AdminLogin />} />
                {/* Other Routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
const RequireEmployeeAuth = ({ children }) => {
    const isEmployee = localStorage.getItem('isEmployee') === 'true'; 
    return isEmployee ? children : <Navigate to="/employeelogin" replace />;
};
const RequireRetailAuth = ({ children }) => {
    const isRetail = localStorage.getItem('isRetail') === 'true'; 
    return isRetail ? children : <Navigate to="/retail-login" replace />;
};
const RequireCorporateAuth = ({ children }) => {
    const isCorporate = localStorage.getItem('isCorporate') === 'true'; 
    return isCorporate ? children : <Navigate to="/corporate-login" replace />;
};

const RequireVendorAuth = ({ children }) => {
    const isVendor = localStorage.getItem('isVendor') === 'true'; 
    return isVendor ? children : <Navigate to="/vendor-login" replace />;
};

const RequireAuth = ({ children }) => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; 
    return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

export default App;
