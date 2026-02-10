import { useSelector } from "react-redux";
import {
    getCurrentData,
    getWeatherLoader,
} from "../../../store/slices/weatherSlice/weatherSlice";
import SkeletonContent from "./SkeletonContent";
import useWeather from "../../../hooks/useWeather";

import styles from "./index.module.scss";
const TodayContent = () => {
    const { currentData, formatingTemp } = useWeather();
    const loader = useSelector(getWeatherLoader);
    const city = useSelector(getCurrentData);
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
