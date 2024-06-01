Sure, here is the full updated README based on the provided project structure and additional details about Tailwind CSS:

# TGES Frontend

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Functionality](#functionality)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Welcome to the TGES Frontend documentation. This repository contains the frontend codebase for the TGES project. TGES is a traveling platform aiming to provide users with a seamless traveling experience.

This documentation aims to provide an overview of the project structure, setup instructions, and any other relevant information necessary for developers to understand and contribute to the project.

## Project Structure
The project structure is organized as follows:

```
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
    │   │
    │   └───Image
    │           IGNOU June-2024_ HALL TICKET_ADMIT CARD_SURAJ.pdf
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
    │   │   index.js
    │   │
    │   ├───admin
    │   │       AdminDashboard.jsx
    │   │
    │   ├───Hotel
    │   │       HotelBookings.jsx
    │   │
    │   └───Travel
    │           CabBookings.jsx
    │           FlightBookings.jsx
    │           TrainBookings.jsx
    │           TravelMode.jsx
    │           VolvoBusBookings.jsx
    │
    ├───config
    │       axiosInstance.js
    │
    ├───pages
    │       AboutUs.jsx
    │       CorporateLogin.jsx
    │       CorporateSignup.jsx
    │       Home.jsx
    │       index.js
    │       NotFound.jsx
    │       RetailLogin.jsx
    │       SignUp.jsx
    │       VendorLogin.jsx
    │       VendorSignup.jsx
    │
    └───redux
        │   store.js
        │
        └───slices
                authSlice.js
                travelSlice.js
```

## Functionality
### User Interface Components
- **Header.jsx & Footer.jsx**: Common components used across different pages for navigation and footer content.
- **AdminHeader.jsx, AdminMain.jsx, AdminSidebar.jsx**: Components used in the admin dashboard.
- **HotelBookings.jsx, CabBookings.jsx, FlightBookings.jsx, TrainBookings.jsx, VolvoBusBookings.jsx, TravelMode.jsx**: Components related to different travel modes and bookings.

### Pages
- **Home.jsx**: The landing page of the application.
- **AboutUs.jsx**: The page that provides information about the platform.
- **CorporateLogin.jsx & CorporateSignup.jsx**: Pages for corporate users to log in and sign up.
- **RetailLogin.jsx & SignUp.jsx**: Pages for retail users to log in and sign up.
- **VendorLogin.jsx & VendorSignup.jsx**: Pages for vendors to log in and sign up.
- **NotFound.jsx**: A 404 page for handling non-existent routes.

### Configuration
- **axiosInstance.js**: Configuration file for Axios to handle HTTP requests.

### Redux
- **store.js**: Sets up the Redux store.
- **authSlice.js & travelSlice.js**: Slices for handling authentication and travel-related state management.

### Utilities
- **data.js**: Contains data used across the application.
- **index.css**: Contains global styles, including those from Tailwind CSS.

## Technologies Used
- **React.js**: For building user interfaces.
- **Redux**: For state management.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: For styling the components.
- **Vite**: For fast frontend tooling.
- **ESLint**: For code linting.
- **PostCSS**: For transforming CSS with JavaScript plugins.

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

