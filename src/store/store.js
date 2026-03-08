import { weatherReducer } from "./slices/weatherSlice/weatherSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});

export default store;
