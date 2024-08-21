import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import travelReducer from "./slices/travelSlice"
import dashboardReducer from "./slices/dashboardSlice"
import vendorDashboardSlice from "./slices/vendorDashboardSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        travel: travelReducer,
        dashboard: dashboardReducer,
        vendorDashboard: vendorDashboardSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true,
})

export default store;