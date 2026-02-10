import { useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { getDailyWeatherData } from "../../../store/slices/weatherSlice/api";
const SearchForm = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
      e.preventDefault();
      const value = e.target[0].value;
      if(!value) return;
      
      dispatch(getDailyWeatherData(value));
      e.target.reset();
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSearch}>
            <input type="text" placeholder="Write your country" />
            <input type="submit" value={"Search city"} />
        </form>
    );
};

export default SearchForm;
