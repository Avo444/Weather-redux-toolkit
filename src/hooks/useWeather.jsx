import { useSelector } from "react-redux";
import {
    getCurrentDay,
    getCurrentTemp,
    getDailyData,
} from "../store/slices/weatherSlice/weatherSlice";

const useWeather = () => {
    const weather = useSelector(getDailyData);
    const currentKey = useSelector(getCurrentDay);
    const currentTemp = useSelector(getCurrentTemp);
    const currentData = weather?.[currentKey]?.[0];
    const currentDay = weather?.[currentKey];

    const formatingTemp = (temp) => {
        const formatedTemp =
            currentTemp === "F" ? temp : Math.round(temp - 273.15);
        const symbol = currentTemp === "F" ? `°F` : `°C`;
        return `${formatedTemp}${symbol}`;
    };

    const getDayHighTempData = (list) => {
        const sortedList = [...list].sort((a, b) => a.main.temp - b.main.temp);

        return sortedList[sortedList.length - 1];
    };
    return { currentData, currentDay, formatingTemp, getDayHighTempData };
};

export default useWeather;
