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

export const createAirTravel = createAsyncThunk('travel/create-air', async (data) => {
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