import { sortWeatherList } from "../../../helper/weather";
import { createSlice } from "@reduxjs/toolkit";
import { getDailyWeatherData } from "./api";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        currentData: {},
        currentTemp: "F",
        currentDay: null,
        dailyData: {},
        error: null,
        loader: false,
    },
    reducers: {
        setCurrentTemp: (state) => {
            state.currentTemp =
                state.currentTemp === "F"
                    ? (state.currentTemp = "C")
                    : (state.currentTemp = "F");
        },
        setCurrentDay: (state, data) => {
            state.currentDay = data.payload;
        },
        setWeatherError: (state, data) => {
            state.error = data.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDailyWeatherData.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(getDailyWeatherData.fulfilled, (state, action) => {
            state.error = null;
            state.loader = false;
            state.currentData = action.payload.city;
            state.dailyData = sortWeatherList(action.payload.list);
        });

        builder.addCase(getDailyWeatherData.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message;
        });
    },
    selectors: {
        getCurrentTemp: (state) => state.currentTemp,
        getCurrentData: (state) => state.currentData,
        getCurrentDay: (state) => state.currentDay,
        getDailyData: (state) => state.dailyData,
        getWeatherError: (state) => state.error,
        getWeatherLoader: (state) => state.loader,
    },
});

export const { setCurrentTemp, setCurrentDay, setWeatherError } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
export const {
    getCurrentData,
    getCurrentTemp,
    getCurrentDay,
    getDailyData,
    getWeatherError,
    getWeatherLoader,
} = weatherSlice.selectors;