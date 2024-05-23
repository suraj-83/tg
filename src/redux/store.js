import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import travelReducer from "./slices/travelSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        travel: travelReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true,
})

export default store;