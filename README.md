
# TGES Frontend

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Functionality](#functionality)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction
Welcome to the TGES Frontend repository. This project serves as the frontend application for TGES, a traveling platform designed to offer users a seamless travel experience. This documentation provides an in-depth overview of the project structure, functionality, technologies used, setup instructions, contributing guidelines, and licensing details.

---

Project Structure
The project structure is organized as follows:

mathematica
Copy code
tges-frontend/
│   .eslintrc.cjs
│   .gitignore
│   index.html
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.js
│   vercel.json
│   vite.config.js
│
├───public
│       vite.svg
│
└───src
    │   App.jsx
    │   data.js
    │   index.css
    │   main.jsx
    │
    ├───assets
    │   │   image 10.png
    │   │   image 3.png
    │   │   img.jpg
    │   │   new.jpg
    │   │   react.svg
    │   │   Rectangle 30.png
    │   │   Rectangle 32.png
    │   │   Rectangle 33.png
    │   │   Rectangle 34.png
    │   │   Rectangle 355.png
    │   │   Rectangle 382.png
    │   │   Rectangle 383.png
    │   │   Rectangle 384.png
    │   │   Rectangle 385.png
    │   │   Rectangle 386.png
    │   │   Rectangle 387.png
    │   │   Rectangle 388.png
    │   │   Rectangle 389.png
    │   │   Rectangle 6.png
    │   │   Rectangle 7.png
    │   │   TGESLogo.jpeg
    │   │   TGESLogo.png
    │   │   userImg.png
    │   │   volvo-bus.webp
    │   │
    │   └───Image
    │           image 10.png
    │           image3.png
    │           Rectangle 30.png
    │           Rectangle 32.png
    │           Rectangle 33.png
    │           Rectangle 34.png
    │           Rectangle 355.png
    │           Rectangle 382.png
    │           Rectangle 383.png
    │           Rectangle 384.png
    │           Rectangle 385.png
    │           Rectangle 386.png
    │           Rectangle 387.png
    │           Rectangle 388.png
    │           Rectangle 389.png
    │           Rectangle 6.png
    │           Rectangle 7.png
    │           y.jpg
    │
    ├───components
    │   │   AdminHeader.jsx
    │   │   AdminMain.jsx
    │   │   AdminSidebar.jsx
    │   │   Footer.jsx
    │   │   Header.jsx
    │   │   HealthInsurance.jsx
    │   │   index.js
    │   │   Passport.jsx
    │   │   TravelIsurance.jsx
    │   │
    │   ├───admin
    │   │       AdminDashboard.jsx
    │   │       CabBookingDetails.jsx
    │   │       CorporateUsers.jsx
    │   │       Dashboard.jsx
    │   │       FlightBookingDetails.jsx
    │   │       HealthInsuranceDetails.jsx
    │   │       HotelBookingDetails.jsx
    │   │       PassportBookingsDetails.jsx
    │   │       RetailUsers.jsx
    │   │       TrainBookingDetails.jsx
    │   │       TravelInsunranceDetails.jsx
    │   │       VendorDetails.jsx
    │   │       VolvoBusBookingDetails.jsx
    │   │
    │   ├───CorporateDashboard
    │   │       CabDetails.jsx
    │   │       CorporateDashboard.jsx
    │   │       CorporateHeader.jsx
    │   │       CorporateSidebar.jsx
    │   │       Flight.jsx
    │   │       HotelStatus.jsx
    │   │       TrainStatus.jsx
    │   │       VolvoBus.jsx
    │   │
    │   ├───Hotel
    │   │       HotelBookings.jsx
    │   │
    │   ├───RetailDashboard
    │   │       CabDetails.jsx
    │   │       Flights.jsx
    │   │       HotelStatus.jsx
    │   │       RetailDashboard.jsx
    │   │       TrainStatus.jsx
    │   │       UserHeader.jsx
    │   │       UserSidebar.jsx
    │   │       VolvoBus.jsx
    │   │
    │   ├───Travel
    │   │       CabBookings.jsx
    │   │       FlightBookings.jsx
    │   │       TrainBookings.jsx
    │   │       TravelMode.jsx
    │   │       VolvoBusBookings.jsx
    │   │
    │   └───VendorDashboard
    │           addCabs.jsx
    │           CabDetails.jsx
    │           FlightDetails.jsx
    │           HotelDetails.jsx
    │           Trains.jsx
    │           VendorDashboard.jsx
    │           VendorHeader.jsx
    │           VendorSidebar.jsx
    │           Volvobus.jsx
    │
    ├───config
    │       axiosInstance.js
    │
    ├───pages
    │       AboutUs.jsx
    │       AdminLogin.jsx
    │       CorporateLogin.jsx
    │       CorporateProfile.jsx
    │       CorporateSignup.jsx
    │       ForgotPassword.jsx
    │       Home.jsx
    │       index.js
    │       NotFound.jsx
    │       ResetPassword.jsx
    │       RetailLogin.jsx
    │       RetailProfile.jsx
    │       SignUp.jsx
    │       VendorLogin.jsx
    │       VendorSignup.jsx
    │       VerifyOtp.jsx
    │
    └───redux
        │   store.js
        │
        └───slices
                authSlice.js
                dashboardSlice.js
                travelSlice.js


### Root Directory
- **Configuration Files**: Includes `.eslintrc.cjs`, `.gitignore`, `package-lock.json`, `package.json`, `postcss.config.js`, `README.md`, `tailwind.config.js`, `vercel.json`, `vite.config.js`.
  - These files manage project configuration, dependencies, linting rules, Tailwind CSS setup, deployment configurations, and more.

- **Public Directory**: Contains `vite.svg` used for public assets.

### `src` Directory
- **Entry Files**: `App.jsx`, `data.js`, `index.css`, `main.jsx`.
  - `App.jsx`: Main application component.
  - `data.js`: Stores application data.
  - `index.css`: Global CSS styles.
  - `main.jsx`: Entry point for rendering the application.

- **Assets Directory**: Contains images (`*.png`, `*.jpg`, `*.svg`) used in the application.

- **Components Directory**: Reusable UI components.
  - **Global Components**: `Header.jsx`, `Footer.jsx`.
  - **Admin Components**: `AdminHeader.jsx`, `AdminMain.jsx`, `AdminSidebar.jsx`.
  - **Travel Components**: `CabBookings.jsx`, `FlightBookings.jsx`, `TrainBookings.jsx`, `VolvoBusBookings.jsx`, `TravelMode.jsx`.
  - **Additional Components**: `HealthInsurance.jsx`, `Passport.jsx`, `TravelIsurance.jsx`.

- **Admin Directory**: Specific admin-related components and pages.

- **CorporateDashboard Directory**: Components and pages specific to corporate users.

- **Hotel Directory**: Components related to hotel bookings.

- **RetailDashboard Directory**: Components and pages specific to retail users.

- **Travel Directory**: Components related to different travel modes and bookings.

- **VendorDashboard Directory**: Components and pages specific to vendors.

- **Config Directory**: `axiosInstance.js` for Axios HTTP requests configuration.

- **Pages Directory**: Contains React components representing different pages.
  - **Main Pages**: `Home.jsx`, `AboutUs.jsx`, `NotFound.jsx`.
  - **User Authentication Pages**: `CorporateLogin.jsx`, `CorporateSignup.jsx`, `RetailLogin.jsx`, `SignUp.jsx`, `VendorLogin.jsx`, `VendorSignup.jsx`.
  - **Additional Pages**: `AdminLogin.jsx`, `CorporateProfile.jsx`, `ForgotPassword.jsx`, `ResetPassword.jsx`, `VerifyOtp.jsx`.

- **Redux Directory**: State management setup using Redux.
  - **Store Configuration**: `store.js`.
  - **Redux Slices**: `authSlice.js`, `dashboardSlice.js`, `travelSlice.js` for handling authentication, dashboard data, and travel-related state.

### Functionality
#### User Interface Components
- **Header.jsx & Footer.jsx**: Components for consistent navigation and footer across pages.
- **AdminHeader.jsx, AdminMain.jsx, AdminSidebar.jsx**: Components specific to admin dashboard layout.
- **HealthInsurance.jsx, Passport.jsx, TravelIsurance.jsx**: Additional components for specific functionalities.
- **Booking Components**: `HotelBookings.jsx`, `CabBookings.jsx`, `FlightBookings.jsx`, `TrainBookings.jsx`, `VolvoBusBookings.jsx`, `TravelMode.jsx` for managing bookings related to different travel modes.

#### Pages
- **Home.jsx**: Landing page.
- **AboutUs.jsx**: Information about the platform.
- **User Authentication Pages**: Login and signup pages for corporate, retail, and vendor users.
- **AdminLogin.jsx, CorporateProfile.jsx**: Pages specific to admin and corporate user profiles.
- **NotFound.jsx**: Custom 404 page for handling non-existent routes.

#### Configuration
- **axiosInstance.js**: Configuration file for Axios HTTP requests.

#### Redux
- **store.js**: Redux store setup.
- **Redux Slices**: `authSlice.js`, `dashboardSlice.js`, `travelSlice.js` for managing authentication, dashboard data, and travel-related state.

#### Utilities
- **data.js**: Contains application data.
- **index.css**: Global CSS styles, including those from Tailwind CSS.

### Technologies Used
- **React.js**: Frontend library for building user interfaces.
- **Redux**: State management library for predictable state containers.
- **React Router**: Library for declarative routing in React applications.
- **Axios**: Promise-based HTTP client for making requests to the backend.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast frontend tooling for development.
- **ESLint**: JavaScript linting utility for maintaining code quality.
- **PostCSS**: CSS post-processor tool for transforming styles with JavaScript plugins.

---

## Setup Instructions
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/suraj-83/tg.git

   ```

2. **Navigate into the project directory:**
   ```bash
   cd tges-frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add necessary environment variables.

5. **Start the development server:**
   ```bash
   npm start
   ```

## Contributing
Contributions to the TGES Frontend project are welcome! If you find any issues or would like to add new features, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

