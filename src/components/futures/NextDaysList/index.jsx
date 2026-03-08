import { useSelector } from "react-redux";
import { getDailyData, getWeatherLoader } from "../../../store/slices/weatherSlice/weatherSlice";

import NextDaysListItem from "../../shared/NextDaysListItem";
import SkeletonContent from "./SkeletonContent";

import styles from "./index.module.scss";
const NextDaysList = () => {
    const dailyData = useSelector(getDailyData);
    const loader = useSelector(getWeatherLoader);
    return (
        <div className={styles.list}>
            {!loader ? dailyData && Object.entries(dailyData).map((data) => <NextDaysListItem key={data[0]} data={data}/>) : <SkeletonContent />}
        </div>
    );
};

export default NextDaysList;
