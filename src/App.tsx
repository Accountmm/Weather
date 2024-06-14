import React from "react";
import { useSelector } from "react-redux";
import Current from "./Components/Current";
import Loader from "./Components/Loader";
import Nav from "./Components/Nav";
import Week from "./Components/Week";
import { useWeather } from "./hooks/useData";
import { IState } from './store/weather';

function App() {
  const city = useSelector((state:{weather:IState}) => state.weather.city);
  const { data, isLoading, isFetching, isError } = useWeather(city);
  if (isLoading || isFetching) return <Loader />;
  if (isError) return <h1>Fetch Error</h1>
  if (data) {
    return (
      <>
        <Nav />
        <Current
          current={data.current}
          name={data.name}
          timezone={data.timezone}
        />
        <Week daily={data.daily} />
      </>
    );
  }else return <></>
}

export default App;
