import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axiosInstance from '../../config/axiosInstance.js';
import { login, logout } from './authSlice.js';

const initialState = {
  isVendor: localStorage.getItem('isVendor') || false,
  status: 'idle', // Adding status to handle loading, succeeded, failed states
  cabRateCard: [], // Adding initial state for cabRateCard
  hotelRateCard: [], // Adding initial state for hotelRateCard
  eventRateCard: [], // Adding initial state for eventRateCard
  error: null, // Adding error field to handle errors
};

// Async thunk to submit a new cab rate card
export const submitCabRateCard = createAsyncThunk('vendorDashboard/submitCabRateCard', async (rateCardData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/vendor/ratecard/cab', rateCardData)
        return response.data.data;
    } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to submit cab rate card');
        return rejectWithValue(error.response?.data?.message || 'Failed to submit cab rate card');
    }
});
// Async thunk to fetch cab rate card
export const fetchCabRateCard = createAsyncThunk('vendorDashboard/fetchCabRateCard', async () => {
  try {
    const response = await axiosInstance.get('/vendor/ratecard/cab');
    return response.data.data;
  } catch (error) {
    toast.error(error.response?.data?.message || 'Failed to fetch cab rate card');
    throw error;
  }
});
// Async thunk to submit a new hotel rate card
export const submitHotelRateCard = createAsyncThunk('vendorDashboard/submitHotelRateCard', async (formData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/vendorDashboard/submitHotelRateCard', formData);
    return response.data.data;
  } catch (error) {
    toast.error(error.response?.data?.message || 'Failed to submit hotel rate card');
    return rejectWithValue(error.response?.data?.message || 'Failed to submit hotel rate card');
  }
});

// Async thunk to fetch hotel rate card
export const fetchHotelRateCard = createAsyncThunk('vendorDashboard/fetchHotelRateCard', async () => {
  try {
    const response = await axiosInstance.get('/vendorDashboard/hotelRateCard');
    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch hotel rate card');
    throw error;
  }
});

// Async thunk to submit a new event rate card
export const submitEventRateCard = createAsyncThunk('vendorDashboard/submitEventRateCard', async (rateCardData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/vendorDashboard/submitEventRateCard', rateCardData);
        return response.data.data;
    } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to submit event rate card');
        return rejectWithValue(error.response?.data?.message || 'Failed to submit event rate card');
    }
});
// Async thunk to fetch event rate card
export const fetchEventRateCard = createAsyncThunk('vendorDashboard/fetchEventRateCard', async () => {
  try {
    const response = await axiosInstance.get('/vendorDashboard/eventRateCard');
    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch event rate card');
    throw error;
  }
});

export const updateVendorProfile = createAsyncThunk('vendorDashboard/updateVendorProfile', async (data, { rejectWithValue }) => {
  try {
      const response = await axiosInstance.put('/vendor/update-profile', data);
      console.log(response)
      return response.data.data;
  } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update vendor profile');
      return rejectWithValue(error.response?.data?.message || 'Failed to update vendor profile');
  }
});



const vendorDashboardSlice = createSlice({
  name: 'vendorDashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          localStorage.setItem('isVendor', true);
          state.isVendor = true;
        }
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isVendor = false;
        localStorage.removeItem('isVendor');
      })
      .addCase(fetchCabRateCard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCabRateCard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cabRateCard = action.payload;
      })
      .addCase(fetchCabRateCard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cab rate card';
      })
      .addCase(fetchHotelRateCard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHotelRateCard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hotelRateCard = action.payload;
      })
      .addCase(fetchHotelRateCard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch hotel rate card';
      })
      .addCase(fetchEventRateCard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEventRateCard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.eventRateCard = action.payload;
      })
      .addCase(fetchEventRateCard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch event rate card';
      })
      .addCase(updateVendorProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateVendorProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vendorProfile = action.payload;
      })
      .addCase(updateVendorProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update vendor profile';
      });
  },
});

export default vendorDashboardSlice.reducer;
