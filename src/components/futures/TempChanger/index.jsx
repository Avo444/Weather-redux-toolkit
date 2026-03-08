import { useDispatch, useSelector } from "react-redux";
import { getCurrentTemp } from "../../../store/slices/weatherSlice/weatherSlice";
import { setCurrentTemp } from "../../../store/slices/weatherSlice/weatherSlice";
import styles from "./index.module.scss";

const TempChanger = () => {
    const dispatch = useDispatch();
    const currentTemp = useSelector(getCurrentTemp);
    return (
        <div className={styles.changerForm}>
            <label>
                <input type="radio" name="temp" checked={currentTemp==="F"} onChange={() => dispatch(setCurrentTemp())} />
                °F
            </label>
            <label>
                <input type="radio" name="temp" checked={currentTemp==="C"} onChange={() => dispatch(setCurrentTemp())}/>
                °C
            </label>
        </div>
    );
};

export default TempChanger;
