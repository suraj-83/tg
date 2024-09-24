import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance.js";
import { VENDOR_TYPE_NAME,CORPORATE_TYPE_NAME } from "../../config/config.js";

let parsedUser = {};
try {
  const storedUser = localStorage.getItem("user");
  if (storedUser && storedUser !== "undefined") {
    parsedUser = JSON.parse(storedUser);
  }
} catch (error) {
  console.error("Error parsing user from localStorage:", error);
}

const initialState = {
  isLoggedIn: !!localStorage.getItem("isLoggedIn"),
  role: localStorage.getItem("role") || "USER",
  user: parsedUser,
};

// Retail Signup
export const retailSignup = createAsyncThunk(
  "auth/retail-signup",
  async (data) => {
    try {
      const response = await axiosInstance.post("/user/retail-register", data);

      console.log("Retail User: ", response.data);

      toast.promise(Promise.resolve(response), {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// Branch Signup
export const branchSignup = createAsyncThunk(
  "auth/add-branch",
  async (data) => {
    try {
      const response = await axiosInstance.post("/corporate/branch", data);

      console.log("Branch User: ", response.data);

      toast.promise(Promise.resolve(response), {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return response;
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
      const response = await axiosInstance.post("/user/corporate-register", data);

      console.log("Corporate User: ", response.data);

      toast.promise(Promise.resolve(response), {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return response;
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
      const response = await axiosInstance.post("/user/vendor-register", data);

      console.log("Vendor User: ", response.data);

      toast.promise(Promise.resolve(response), {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// Add Employe
export const employeeSignup = createAsyncThunk(
  "auth/employee-signup",
  async (data) => {
    try {
      const response = await axiosInstance.post(`/corporate/employee/${data.branchId}`, data);

      console.log("Employee User: ", response.data);

      toast.promise(Promise.resolve(response), {
        loading: "Creating account...",
        success: (data) => data?.data?.message,
        error: "Failed to create your account",
      });

      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// Get All Branch Employees
export const getAllBranchEmployees = createAsyncThunk("auth/getAllBranchEmployees", async ({branchId}) => {
  try {
    const response = await axiosInstance.get(`/corporate/employee/${branchId}`);

    console.log("Branch Employees: ", response.data);

    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// Get All Corporate Employees
export const getAllEmployees = createAsyncThunk("auth/getAllEmployees", async () => {
  try {
    const response = await axiosInstance.get("/corporate/employees");

    console.log("Corporate Employees: ", response.data);

    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// Update Employee
export const updateEmployee = createAsyncThunk('auth/updateEmployee', async ({employeeId, data}) => {
  try {
    const response = await axiosInstance.put(`/corporate/employee/${employeeId}`, data);

    console.log("Updated Employee: ", response.data);

    toast.promise(Promise.resolve(response), {
      loading: "Updating employee...",
      success: (data) => data?.data?.message,
      error: "Failed to update employee",
    });

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// // Unified Login
export const login = createAsyncThunk('auth/login', async (data) => {
  try {
    const response = await axiosInstance.post("/user/login", data).catch((error) => {
      console.log("user =", data);
      if (error.response.status === 401) {
        toast.error("Invalid credentials");
        throw error;
      } else if (error.response.status === 404) {
        toast.error("User not found");
        throw error;
      }
    });

    toast.promise(Promise.resolve(response), {
      loading: 'Authenticating account...',
      success: (data) => data?.data?.message,
      error: "Error Logging In",
    });
     // Extract role and companyId from the response data
     const { role, companyId } = response.data.data;
localStorage.setItem("role", data);
if (role === CORPORATE_TYPE_NAME) {
  localStorage.setItem("companyId", companyId); // Store companyId in localStorage for corporate users
}

    return response;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
});

// Unified Login
// export const login = createAsyncThunk('auth/login', async (data) => {
//   try {
//     const response = await axiosInstance.post("/user/login", data).catch((error) => {
//       console.log("User Data =", data);
      
//       if (error.response?.status === 401) {
//         toast.error("Invalid credentials");
//         throw error;
//       } else if (error.response?.status === 404) {
//         toast.error("User not found");
//         throw error;
//       } else {
//         toast.error("An unexpected error occurred");
//         throw error;
//       }
//     });

//     // Toast for promise handling
//     toast.promise(Promise.resolve(response), {
//       loading: 'Authenticating account...',
//       success: (data) => data?.data?.message || "Login Successful",
//       error: "Error Logging In",
//     });

//     // Extract role and companyId from response data
//     const { role, companyId } = response.data;

//     // Store role and companyId in localStorage
//     localStorage.setItem("role", role); // Assuming role is something like 'corporate', 'vendor', etc.
//     if (role === "corporate") {
//       localStorage.setItem("companyId", companyId); // Only for corporate users
//     }

//     return response.data; // Return the relevant data for further usage

//   } catch (error) {
//     console.log("Login Error:", error);
//     toast.error(error?.response?.data?.message || "Error during login");
//     throw error; // Re-throw the error for the rejected state handling in Redux
//   }
// });

// Employee Login
export const employeeLogin = createAsyncThunk(
  "auth/employee-login",
  async ({ employeeId, companyId, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/corporate/employee-login", {
        employeeId,
        companyId,
        password,
      });

      console.log("Employee Login Details: ", response.data);

      toast.promise(Promise.resolve(response), {
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

// Branch Login
export const branchLogin = createAsyncThunk(
  "auth/branch-login",
  async (data) => {
    try {
      const response = await axiosInstance.post("/user/branch-login", data);

      console.log("Branch Login: ", response.data);

      toast.promise(Promise.resolve(response), {
        loading: "Authenticating account...",
        success: (data) => data?.data?.message,
        error: "Error Logging In",
      });

      return response;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  }
);

// Get All Corporate Branch Details
export const getAllBranches = createAsyncThunk(
  "auth/getAllBranches",
  async () => {
    try {
      const response = await axiosInstance.get("/corporate/branch/all");
      console.log("All Corporate Branches: ", response.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  }
);


// Update Branch Details
export const updateBranchDetails = createAsyncThunk(
  "auth/updateBranchDetails",
  async ({branchId, data}) => {
    try {
      const response = await axiosInstance.put(`/corporate/branch/${branchId}`, data);

      console.log("Branch Details Update: ", response.data);

      toast.promise(Promise.resolve(response), {
        loading: "Updating branch details...",
        success: (data) => data?.data?.message,
        error: "Error updating branch details",
      });

      return response;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  }
);

// Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axiosInstance.get("/user/logout");
    console.log(response);
    toast.success(response.data.message);
    setTimeout(() => {
      window.location.reload();
    }, 100);
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});


// Get All Users
export const getAllUsers = createAsyncThunk("auth/getAllUsers", async () => {
  try {
    const response = await axiosInstance.get("/dashboard");
    return response.data.data;
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

    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// Verify OTP
export const verifyOtp = createAsyncThunk('auth/verify-otp', async (data) => {
  try {
    const response = await axiosInstance.post("/user/verify-otp", data);

    console.log("Verify OTP: ", response.data);

    if (response?.data?.success) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }

    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// Reset Password
export const resetPassword = createAsyncThunk('auth/reset-password', async (data) => {
  try {
    const response = await axiosInstance.post("/user/reset-password", data);

    console.log("Reset Password: ", response.data);

    if (response?.data?.success) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }

    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// Contact Us
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
});

export const getProfile = createAsyncThunk('auth/getProfile', async () => {
  try {
    const response = await axiosInstance.get("/user/profile");
    console.log("USER PROFILE", response.data);
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
})
export const updateCorporateProfile = createAsyncThunk('auth/updateCorporateProfile', async (data) => {
  try {
    const response = await axiosInstance.put("/corporate/update-profile", data);

    if (response?.data?.success) {
      toast.success(response?.data?.message);
      return response.data;
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const updateRetailProfile = createAsyncThunk('auth/updateRetailProfile', async (data) => {
  try {
    const response = await axiosInstance.put("/user/update-profile", data);

    if (response?.data?.success) {
      toast.success(response?.data?.message);
      return response.data;
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { data } = action.payload.data;

        if (action.payload.data.success) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("role", data.userType);

          if (data.userType === VENDOR_TYPE_NAME) {
            localStorage.setItem("services", JSON.stringify(data.services));
          }
          if (data.userType === CORPORATE_TYPE_NAME) {
            localStorage.setItem("companyId", data.companyId); // Store companyId in localStorage for corporate users
            state.user.companyId = data.companyId; // Store companyId in Redux state
          }
          
          state.isLoggedIn = true;
          state.user = data;
          state.role = data.userType;
        }
      })
      .addCase(employeeLogin.fulfilled, (state, action) => {
        const { user, role } = action.payload;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", role);

        state.isLoggedIn = true;
        state.user = user;
        state.role = role;
      })
      .addCase(branchLogin.fulfilled, (state, action) => {
        const { user, role } = action.payload;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", role);

        state.isLoggedIn = true;
        state.user = user;
        state.role = role;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();

        state.isLoggedIn = false;
        state.user = {};
        state.role = "USER";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.user = action.payload;
      })
  },
});


export default authSlice.reducer;
