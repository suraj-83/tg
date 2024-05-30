import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../config/axiosInstance.js"

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || 'USER',
    data: JSON.parse(localStorage.getItem('user')) || {},
}

export const retailSignup = createAsyncThunk('auth/retail-signup', async (data) => {
    try {
        const response = axiosInstance.post("/user/retail-register", data)

        console.log("Retail User: ", (await response).data)

        toast.promise(response, {
            loading: 'Creating account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create your account"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const corporateSignup = createAsyncThunk('auth/corporate-signup', async (data) => {
    try {
        const response = axiosInstance.post("/user/corporate-register", data)

        console.log("Corporate User: ", (await response).data)

        toast.promise(response, {
            loading: 'Creating account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create your account"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const vendorSignup = createAsyncThunk('auth/vendor-signup', async (data) => {
    try {
        const response = axiosInstance.post("/user/vendor-register", data)

        console.log("Vendor User: ", (await response).data)

        toast.promise(response, {
            loading: 'Creating account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create your account"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const retailLogin = createAsyncThunk('auth/retail-login', async (data) => {
    try {
        const response = axiosInstance.post("/user/retail-login", data)

        console.log("Retail Login: ", (await response).data)

        toast.promise(response, {
            loading: 'Authenticating account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Error Logging In"
        })

        return await response;
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message)
    }
})

export const corporateLogin = createAsyncThunk('auth/corporate-login', async (data) => {
    try {
        const response = axiosInstance.post("/user/corporate-login", data)

        console.log("Corprate Login: ", (await response).data)

        toast.promise(response, {
            loading: 'Authenticating account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Error Logging In"
        })

        return await response;
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message)
    }
})

export const vendorLogin = createAsyncThunk('auth/vendor-login', async (data) => {
    try {
        const response = axiosInstance.post("/user/vendor-login", data)

        console.log("Vendor Login: ", (await response).data)

        toast.promise(response, {
            loading: 'Authenticating account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Error Logging In"
        })

        return await response;
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        const response = axiosInstance.post("/user/logout")
        toast.promise(response, {
            loading: 'Logging out account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to Logout your account"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getAllUsers = createAsyncThunk('auth/getAllUsers', async () => {
    try {
        const response = axiosInstance.get("/dashboard")

        return (await response).data.data;
    } catch (error) {
        toast.error(error?.message)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(retailLogin.fulfilled, (state, action) => {

                console.log("Login Details: ", action.payload.data)

                if (action.payload.status === 200) {
                    // localStorage.setItem("user", JSON.stringify(action?.payload?.data?.data));
                    localStorage.setItem("isLoggedIn", true);
                    // localStorage.setItem("role", action?.payload?.data?.data?.user?.role);
                    state.isLoggedIn = true;
                    // state.role = action?.payload?.data?.data?.user?.role;
                    // state.data = action?.payload?.data?.data;
                }
            })
            .addCase(corprateLogin.fulfilled, (state, action) => {

                console.log("Login Details: ", action.payload.data)

                if (action.payload.status === 200) {
                    // localStorage.setItem("user", JSON.stringify(action?.payload?.data?.data));
                    localStorage.setItem("isLoggedIn", true);
                    // localStorage.setItem("role", action?.payload?.data?.data?.user?.role);
                    state.isLoggedIn = true;
                    // state.role = action?.payload?.data?.data?.user?.role;
                    // state.data = action?.payload?.data?.data;
                }
            })
            .addCase(vendorLogin.fulfilled, (state, action) => {

                console.log("Login Details: ", action.payload.data)

                if (action.payload.status === 200) {
                    // localStorage.setItem("user", JSON.stringify(action?.payload?.data?.data));
                    localStorage.setItem("isLoggedIn", true);
                    // localStorage.setItem("role", action?.payload?.data?.data?.user?.role);
                    state.isLoggedIn = true;
                    // state.role = action?.payload?.data?.data?.user?.role;
                    // state.data = action?.payload?.data?.data;
                }
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.isLoggedIn = false;
                state.role = '';
                state.data = {};
            })
    }
})

export default authSlice.reducer;