import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getCurrentData,
    getWeatherError,
    getWeatherLoader,
    setWeatherError,
} from "../../../store/slices/weatherSlice/weatherSlice";
import useWeather from "../../../hooks/useWeather";
import useNotification from "../../../hooks/useNotification";
import SkeletonContent from "./SkeletonContent";
import styles from "./index.module.scss";

const TodayContent = () => {
    const { currentData, formatingTemp } = useWeather();
    const loader = useSelector(getWeatherLoader);
    const city = useSelector(getCurrentData);
    const error = useSelector(getWeatherError);
    const notification = useNotification();
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            notification(error, "error");
            dispatch(setWeatherError(null))
        }
    }, [error]);
    return (
        <>
            {!loader ? (
                <div className={styles.content}>
                    <h3>
                        {city?.name},{city?.country}
                    </h3>
                    <h1>
                        {currentData && formatingTemp(currentData?.main?.temp)}
                    </h1>
                    <div className={styles.imgContent}>
                        <img
                            src={`${process.env.REACT_APP_WEATHER_ICONS}${currentData?.weather?.icon}.png`}
                            alt="Weather"
                        />

                        <h2 className={styles.status}>
                            {currentData?.weather?.main}
                        </h2>
                    </div>
                </div>
            ) : (
                <SkeletonContent />
            )}
        </>
    );
};

export default TodayContent;
