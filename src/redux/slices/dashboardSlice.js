import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axiosInstance from '../../config/axiosInstance.js';

const initialState = {
  busDetails: [],
  airDetails: [],
  trainDetails: [],
  cabDetails: [],
  hotelBookings: [],
  passports: [],
  travelInsurances: [],
  healthInsurances: [],
  status: 'idle',
  error: null,
};

// Async thunks for different travel types
export const fetchBusDetails = createAsyncThunk('dashboard/fetchBusDetails', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/bus');
    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch bus details');
    throw error;
  }
});

export const fetchAirDetails = createAsyncThunk('dashboard/fetchAirDetails', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/air');

    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch air details');
    throw error;
  }
});

export const fetchTrainDetails = createAsyncThunk('dashboard/fetchTrainDetails', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/train');
    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch train details');
    throw error;
  }
});

export const fetchCabDetails = createAsyncThunk('dashboard/fetchCabDetails', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/cab');
    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch cab details');
    throw error;
  }
});

export const fetchHotelBookings = createAsyncThunk('dashboard/fetchHotelBookings', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/hotel');

    console.log(response.data.data);

    return response.data.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch hotel bookings');
    throw error;
  }
});

export const fetchPassports = createAsyncThunk('dashboard/fetchPassports', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/passport');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch passports');
    throw error;
  }
});

export const fetchTravelInsurances = createAsyncThunk('dashboard/fetchTravelInsurances', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/travelInsurance');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch travel insurances');
    throw error;
  }
});

export const fetchHealthInsurances = createAsyncThunk('dashboard/fetchHealthInsurances', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/healthInsurance');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch health insurances');
    throw error;
  }
});

export const getAllRetailUsers = createAsyncThunk('dashboard/getAllRetailUsers', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/retail');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch retail users');
    throw error;
  }
});

export const getAllCorporateUsers = createAsyncThunk('dashboard/getAllCorporateUsers', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/corporate');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch corporate users');
    throw error;
  }
});

export const getAllVendors = createAsyncThunk('dashboard/getAllVendors', async () => {
  try {
    const response = await axiosInstance.get('/dashboard/vendor');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to fetch vendors');
    throw error;
  }
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBusDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.busDetails = action.payload;
      })
      .addCase(fetchBusDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch bus details';
      })
      .addCase(fetchAirDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAirDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.airDetails = action.payload;
      })
      .addCase(fetchAirDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch air details';
      })
      .addCase(fetchTrainDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrainDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trainDetails = action.payload;
      })
      .addCase(fetchTrainDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch train details';
      })
      .addCase(fetchCabDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCabDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cabDetails = action.payload;
      })
      .addCase(fetchCabDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cab details';
      })
      .addCase(fetchHotelBookings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHotelBookings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hotelBookings = action.payload;
      })
      .addCase(fetchHotelBookings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch hotel bookings';
      })
      .addCase(fetchPassports.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPassports.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.passports = action.payload;
      })
      .addCase(fetchPassports.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch passports';
      })
      .addCase(fetchTravelInsurances.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTravelInsurances.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.travelInsurances = action.payload;
      })
      .addCase(fetchTravelInsurances.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch travel insurances';
      })
      .addCase(fetchHealthInsurances.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHealthInsurances.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.healthInsurances = action.payload;
      })
      .addCase(fetchHealthInsurances.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch health insurances';
      });
  },
});

export default dashboardSlice.reducer;
