import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import { setCurrentDay } from "./store/slices/weatherSlice/weatherSlice";
import { getDailyWeatherData } from "./store/slices/weatherSlice/api";

import Home from "./pages/Home";
import "./App.scss";
import { ToastContainer } from "react-toastify";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDailyWeatherData());
        dispatch(setCurrentDay(new Date().toISOString().slice(5, 10)));
    }, []);

    return (
        <SkeletonTheme baseColor="#d9d9d9" highlightColor="#f0f0f0">
            <Home />
            <ToastContainer />
        </SkeletonTheme>
    );
}

export default App;
