import { useDispatch, useSelector } from "react-redux";
import useWeather from "../../../hooks/useWeather";
import styles from "./index.module.scss";
import {
    getCurrentDay,
    setCurrentDay,
} from "../../../store/slices/weatherSlice/weatherSlice";

const NextDaysListItem = ({ data }) => {
    const [day, list] = data;
    const { getDayHighTempData, formatingTemp } = useWeather();
    const currentDate = useSelector(getCurrentDay);
    const highTempData = getDayHighTempData(list);
    const dispatch = useDispatch();

    return (
        <div
            className={
                currentDate === day
                    ? `${styles.item} ${styles.active}`
                    : styles.item
            }
            onClick={() => dispatch(setCurrentDay(day))}
        >
            <p className={styles.date}>{day}</p>
            <div className={styles.row}>
                <p className={styles.temp}>
                    {formatingTemp(highTempData.main.temp)}
                </p>
                <img
                    src={`${process.env.REACT_APP_WEATHER_ICONS}${highTempData.weather.icon}.png`}
                    alt="Weather"
                />
            </div>
        </div>
    );
};

export default NextDaysListItem;
