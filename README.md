# Weather Forecast App (Redux Toolkit)

A simple weather forecast application built with **React** and **Redux Toolkit**.
The app displays weather information for the next **6 days** using the
**OpenWeatherMap API**.

---

## 🚀 Features

- 6-day weather forecast
- Data fetched from OpenWeatherMap API
- State management with Redux Toolkit
- API requests handled with Axios
- Loading states with skeleton loaders
- Responsive UI
- Modern React setup

---

## 🌤️ Weather API

This project uses the **OpenWeatherMap API** to retrieve weather forecast data.

- Website: https://openweathermap.org/
- Forecast type: Daily / multi-day forecast
- Data includes temperature, weather conditions, and icons

---

## 🛠️ Tech Stack

- React 19
- Redux Toolkit
- React Redux
- Axios
- Sass (SCSS)
- React Loading Skeleton
- Create React App

---

## 📦 Dependencies

Main libraries used in this project:

- @reduxjs/toolkit
- react-redux
- axios
- react
- react-dom
- sass
- react-loading-skeleton
- dotenv

---

## 📂 Project Structure (Example)

weather-redux-toolkit/
├── public/
├── src/
│ ├── api/
│ │ └── axios.js
│ ├── components/
│ │ ├── futures/
│ │ │ ├── Navbar/
│ │ │ ├── NextDaysList/
│ │ │ ├── SearchForm/
│ │ │ ├── TempChanger/
│ │ │ ├── TodayContent/
│ │ │ ├── TodayList/
│ │ │ └── WeatherContent/
│ │ └── shared/
│ │ ├── NextDaysListItem/
│ │ └── TodayListItem/
│ ├── helper/
│ │ └── weather.js
│ ├── hooks/
│ │ └── useWeather.jsx
│ ├── pages/
│ ├── store/
│ │ ├── slices/
│ │ │ └── weatherSlice/
│ │ │ ├── api.js
│ │ │ └── weatherSlice.js
│ │ └── store.js
│ ├── App.jsx
│ ├── App.scss
│ └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Avo444/Weather-redux-toolkit.git
```

2. Go to the project directory:

```bash
cd Weather-redux-toolkit
```

3. Install dependencies:

```bash
npm install
```

## 🔑 Environment Variables

Create a .env file in the root directory and add your OpenWeatherMap API key:

```env
REACT_APP_API_KEY=your_api_key_here
```

## ▶️ Running the App

Start the development server:

```bash
npm start
```

Open your browser:
[http://localhost:3000](http://localhost:3000)

## 📦 Build

```bash
npm run build
```

### 📌 Notes

- Ensure your OpenWeatherMap API plan supports multi-day forecasts.

- Redux Toolkit is used for scalable and clean state management.

- Custom hooks and helpers keep the codebase modular and readable.
