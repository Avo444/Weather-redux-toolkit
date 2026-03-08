import { useSelector } from "react-redux";
import { getWeatherLoader } from "../../../store/slices/weatherSlice/weatherSlice";

import useWeather from "../../../hooks/useWeather";
import SkeletonContent from "./SkeletonContent";

import styles from "./index.module.scss";
import TodayListItem from "../../shared/TodayListItem";
const TodayList = () => {
    const { currentDay } = useWeather();
    const loader = useSelector(getWeatherLoader);

    return (
        <div className={styles.list}>
            {!loader ? (
                <div className={styles.list}>
                    {currentDay &&
                        currentDay.map((data, index) => (
                            <TodayListItem key={index} data={data} />
                        ))}
                </div>
            ) : (
                <SkeletonContent />
            )}
        </div>
    );
};

export default TodayList;
