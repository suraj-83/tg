import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../config/axiosInstance.js"

const initialState = {

}

export const createTrainTravel = createAsyncThunk('travel/create-train', async (data) => {
    try {
        console.log("Train : ", data)

        const response = axiosInstance.post("/travel/train", data)

        toast.promise(response, {
            loading: 'Creating train travel...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create train travel"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getTrainTravelDetails = createAsyncThunk('travel/getTrainTravelDetails', async () => {
    try {
        const response = await axiosInstance.get("/travel/train")

        if (response?.data?.data?.success) {
            toast.success(response?.data?.data?.message)
        }

        return response?.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const updateTrainTravel = createAsyncThunk('travel/update-train', async (data) => {
    try {
      const response = axiosInstance.put(`/travel/train/${data.id}`, data);
  
      toast.promise(response, {
        loading: 'Updating train travel...',
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to update train travel"
      });
  
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
});

export const deleteTrainTravel = createAsyncThunk('travel/delete-train', async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/travel/train/${id}`);
      return response.data;  // Ensure you return the data correctly
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || 'Failed to delete train travel');
    }
  });
  

export const createAirTravel = createAsyncThunk('travel/air', async (data) => {
    try {
        const response = axiosInstance.post("/travel/air", data)

        toast.promise(response, {
            loading: 'Creating air travel...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create air travel"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getAirTravelDetails = createAsyncThunk('travel/getAirTravelDetails', async () => {
    try {
        const response = await axiosInstance.get("/travel/air")
        console.log(response.data)
        if (response?.data?.data?.success) {
            toast.success(response?.data?.data?.message)
        }

        return response?.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

// Air Travel PUT
export const updateAirTravel = createAsyncThunk('travel/update-air', async (data) => {
    try {
    const response = axiosInstance.put(`/travel/air/${data.id}`, data);
    
    toast.promise(response, {
    loading: 'Updating air travel...',
    success: (data) => { return data?.data?.message; },
    error: "Failed to update air travel"
    });
    
    return await response;
    } catch (error) {
    toast.error(error?.response?.data?.message);
    }
});

// Air Travel DELETE
// export const deleteAirTravel = createAsyncThunk('travel/delete-air', async (id) => {
//     try {
//     const response = axiosInstance.delete(`/travel/air/${id}`);
    
//     toast.promise(response, {
//     loading: 'Deleting air travel...',
//     success: (data) => { return data?.data?.message; },
//     error: "Failed to delete air travel"
//     });
    
//     return await response;
//     } catch (error) {
//     toast.error(error?.response?.data?.message);
//     }
// });
export const deleteAirTravel = createAsyncThunk('travel/delete-air', async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/travel/air/${id}`);
      
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Failed to delete air travel');
      return rejectWithValue(error?.response?.data);
    }
});



export const createVolvoBusTravel = createAsyncThunk('travel/create-volvoBus', async (data) => {
    try {
        const response = axiosInstance.post("/travel/bus", data)

        toast.promise(response, {
            loading: 'Creating bus travel...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create bus travel"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getVolvoBusTravelDetails = createAsyncThunk('travel/getVolvoBusTravelDetails', async () => {
    try {
        const response = await axiosInstance.get("/travel/bus")

        if (response?.data?.data?.success) {
            toast.success(response?.data?.data?.message)
        }

        return response?.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

// Bus Travel PUT
export const updateBusTravel = createAsyncThunk('travel/update-bus', async (data) => {
    try {
    const response = axiosInstance.put(`/travel/bus/${data.id}`, data);
    
    toast.promise(response, {
    loading: 'Updating bus travel...',
    success: (data) => { return data?.data?.message; },
    error: "Failed to update bus travel"
    });
    
    return await response;
    } catch (error) {
    toast.error(error?.response?.data?.message);
    }
});

// Bus Travel DELETE
// export const deleteBusTravel = createAsyncThunk('travel/delete-bus', async (id) => {
//     try {
//     const response = axiosInstance.delete(`/travel/bus/${id}`);
    
//     toast.promise(response, {
//     loading: 'Deleting bus travel...',
//     success: (data) => { return data?.data?.message; },
//     error: "Failed to delete bus travel"
//     });
    
//     return await response;
//     } catch (error) {
//     toast.error(error?.response?.data?.message);
//     }
// });
export const deleteBusTravel = createAsyncThunk('travel/delete-bus', async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/travel/bus/${id}`);
  
      // Assuming the response contains { success: true } on successful deletion
      toast.success('Bus travel deleted successfully!'); 
  
      return response.data; // Returning the actual response
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'Error deleting bus travel';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  });
  
  


export const createCabTravel = createAsyncThunk('travel/create-cab', async (data) => {
    try {
        const response = axiosInstance.post("/travel/cab", data)

        toast.promise(response, {
            loading: 'Creating cab travel...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create cab travel"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getCabTravelDetails = createAsyncThunk('travel/getCabTravelDetails', async () => {
    try {
        const response = await axiosInstance.get("/travel/cab")

        if (response?.data?.data?.success) {
            toast.success(response?.data?.data?.message)
        }
        return response.data;
    } catch (error) {
        toast.error(error?.message)
    }
})

// Cab Travel PUT
export const updateCabTravel = createAsyncThunk('travel/update-cab', async (data) => {
    try {
    const response = axiosInstance.put(`/travel/cab/${data.id}`, data);
    
    toast.promise(response, {
    loading: 'Updating cab travel...',
    success: (data) => { return data?.data?.message; },
    error: "Failed to update cab travel"
    });
    
    return await response;
    } catch (error) {
    toast.error(error?.response?.data?.message);
    }
});

// Cab Travel DELETE
// export const deleteCabTravel = createAsyncThunk('travel/delete-cab', async (id) => {
//     try {
//     const response = axiosInstance.delete(`/travel/cab/${id}`);
    
//     toast.promise(response, {
//     loading: 'Deleting cab travel...',
//     success: (data) => { return data?.data?.message; },
//     error: "Failed to delete cab travel"
//     });
    
//     return await response;
//     } catch (error) {
//     toast.error(error?.response?.data?.message);
//     }
// });
export const deleteCabTravel = createAsyncThunk('travel/delete-cab', async (id, { rejectWithValue }) => {
    try {
      // Await the response from the server
      const response = await axiosInstance.delete(`/travel/cab/${id}`);
  
      // Show toast notification for success
      toast.success("Cab travel deleted successfully");
  
      // Return the ID of the deleted cab travel to remove it from the UI
      return id;
    } catch (error) {
      // Show error toast and return a rejected action
      toast.error(error?.response?.data?.message || 'Error occurred while deleting');
      return rejectWithValue(error?.response?.data?.message);
    }
  });
  

export const createHotelBooking = createAsyncThunk('travel/create-hotel-booking', async (data) => {
    try {
        const response = axiosInstance.post("/travel/hotel", data)

        toast.promise(response, {
            loading: 'Creating hotel booking...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create hotel booking"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const createPassport = createAsyncThunk('travel/create-passport', async (data) => {
    try {
        const response = axiosInstance.post("/travel/passport", data)

        toast.promise(response, {
            loading: 'Creating passport booking...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create passport booking"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const createTravelInsurance = createAsyncThunk('travel/create-travel-insurance', async (data) => {
    try {
        const response = axiosInstance.post("/travel/travelInsurance", data)

        toast.promise(response, {
            loading: 'Creating travel insurance...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create travel insurance"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const createHealthInsurance = createAsyncThunk('travel/create-health-insurance', async (data) => {
    try {
        const response = axiosInstance.post("/travel/healthInsurance", data)

        toast.promise(response, {
            loading: 'Creating health insurance...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create health insurance"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

// export const getCurrentUserTravelDetails = createAsyncThunk('travel/getCurrentUserTravelDetails', async () => {
//     try {
//         const response = axiosInstance.get("/travel/travel-details")

//         console.log((await response).data);

//         return (await response).data;
//     } catch (error) {
//         toast.error(error?.message)
//     }
// })

const travelSlice = createSlice({
    name: 'travel',
    initialState,
    reducers: {},
    extraReducers: () => {

    }
})

export default travelSlice.reducer;