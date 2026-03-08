import useWeather from "../../../hooks/useWeather";
import styles from "./index.module.scss";
const TodayListItem = ({data}) => {
    const {formatingTemp} = useWeather();
  return (
    <div className={styles.item}>
        <p>{data.time}</p>
        <p>{formatingTemp(data.main.temp)}</p>
        <img src={`${process.env.REACT_APP_WEATHER_ICONS}${data.weather?.icon}.png`} alt="Weather" />
    </div>
  )
}

export default TodayListItem
