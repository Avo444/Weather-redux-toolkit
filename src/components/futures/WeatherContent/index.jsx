import NextDaysList from "../NextDaysList";
import TodayContent from "../TodayContent";
import TodayList from "../TodayList";

import styles from "./index.module.scss";
const WeatherContent = () => {
    return (
        <div className={styles.weather}>
            <div className={styles.container}>
                <div className={styles.today}>
                    <TodayContent />
                    <TodayList />
                </div>
                <NextDaysList />
            </div>
        </div>
    );
};

export default WeatherContent;
