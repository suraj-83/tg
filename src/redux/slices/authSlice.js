import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance.js";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "USER",
  user: JSON.parse(localStorage.getItem("user")) || {},
};

// Retail Signup
export const retailSignup = createAsyncThunk(
  "auth/retail-signup",
  async (data) => {
    try {
      const response = axiosInstance.post("/user/retail-register", data);

      console.log("Retail User: ", (await response).data);

      toast.promise(response, {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const branchSignup = createAsyncThunk(
  "auth/branch-signup",
  async (data) => {
    try {
      const response = axiosInstance.post("/user/branch-register", data);

      console.log("Branch User: ", (await response).data);

      toast.promise(response, {
        loading: "Creating account...",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to create your account",
      });

      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


// Corporate Signup
export const corporateSignup = createAsyncThunk(
  "auth/corporate-signup",
  async (data) => {
    try {
      const response = axiosInstance.post("/user/corporate-register", data);

      console.log("Corporate User: ", (await response).data);

      toast.promise(response, {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// Vendor Signup
export const vendorSignup = createAsyncThunk(
  "auth/vendor-signup",
  async (data) => {
    try {
      const response = axiosInstance.post("/user/vendor-register", data);

      console.log("Vendor User: ", (await response).data);

      toast.promise(response, {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// Employee Signup
export const employeeSignup = createAsyncThunk(
  "auth/employee-signup",
  async (data) => {
    try {
      const response = axiosInstance.post("/user/employee-register", data);

      console.log("Employee User: ", (await response).data);

      toast.promise(response, {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// Unified Login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/login", { email, password });

      console.log("Login Details: ", response.data);

      toast.promise(response, {
        loading: "Authenticating account...",
        success: (data) => data?.data?.message,
        error: "Error Logging In",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Employee Login
export const employeeLogin = createAsyncThunk(
  "auth/employee-login",
  async ({ employeeId, companyId, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/employee-login", {
        employeeId,
        companyId,
        password,
      });

      console.log("Employee Login Details: ", response.data);

      toast.promise(response, {
        loading: "Authenticating account...",
        success: (data) => data?.data?.message,
        error: "Error Logging In",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const branchLogin = createAsyncThunk(
  "auth/branch-login",
  async (data) => {
    try {
      const response = axiosInstance.post("/user/branch-login", data);

      console.log("Branch Login: ", (await response).data);

      toast.promise(response, {
        loading: "Authenticating account...",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Error Logging In",
      });

      return await response;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  }
);


export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axiosInstance.get("/user/logout");
    console.log( response);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const getAllUsers = createAsyncThunk("auth/getAllUsers", async () => {
  try {
    const response = axiosInstance.get("/dashboard");

    return (await response).data.data;
  } catch (error) {
    toast.error(error?.message);
  }
});


// Forget Password
export const forgotPassword = createAsyncThunk("auth/forgot-password", async (data) => {
    try {
      const response = await axiosInstance.post("/user/forgot-password", data);

      console.log("Forgot Password: ", response.data);

      if (response?.data?.success) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }

      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const verifyOtp = createAsyncThunk('auth/verify-otp', async (data) => {
  try {
    const response = await axiosInstance.post("/user/verify-otp", data);

    console.log("Verify OTP: ", response.data);

    if (response?.data?.success) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }

    return await response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
})

export const resetPassword = createAsyncThunk('auth/reset-password', async (data) => {
  try {
    const response = await axiosInstance.post("/user/reset-password", data);

    console.log("Reset Password: ", response.data);

    if (response?.data?.success) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }

    return await response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
})

export const contactUs = createAsyncThunk('contactUs/contact', async (data) => {
  try {
    const response = await axiosInstance.post("/contact-us", data);

    if (response.status === 200) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { user, role } = action.payload;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", role);

        state.isLoggedIn = true;
        state.user = user;
        state.role = role;
      })
      .addCase(employeeLogin.fulfilled, (state, action) => {
        const { user, role } = action.payload;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", role);

        state.isLoggedIn = true;
        state.user = user;
        state.role = role;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.isLoggedIn = false;
        state.role = "";
        state.user = {};
      });
  },
});

export default authSlice.reducer;
