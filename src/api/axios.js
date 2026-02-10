import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API,
});

export const Axios = {
    getDailyData: (country = "Yerevan") => {
        return instance.get(
            `forecast?q=${country}&appid=${process.env.REACT_APP_API_KEY}`,
        );
    },
};
