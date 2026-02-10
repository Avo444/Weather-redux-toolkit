export const sortWeatherList = (list) => {
    return list.reduce((acc, data) => {
        const dateSplit = data.dt_txt.split(" ");
        const [date, time] = dateSplit;
        const formatedDate = date.slice(5)
        if (!acc[formatedDate]) {
            acc[formatedDate] = [];
        }
        acc[formatedDate].push({
            main: data.main,
            weather: data.weather[0],
            time
        });
        return acc;
    }, {});
};