import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../api/axios";

export const getDailyWeatherData = createAsyncThunk(
    "weather/getDailyWeatherData",
    async (country) => {
        const response = await Axios.getDailyData(country);
        return response.data
    }
)