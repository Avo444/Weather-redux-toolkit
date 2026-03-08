import { Axios } from "../../../api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDailyWeatherData = createAsyncThunk(
    "weather/getDailyWeatherData",
    async (country) => {
        const response = await Axios.getDailyData(country);
        return response.data
    }
)