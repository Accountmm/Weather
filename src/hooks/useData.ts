import axios from "axios";
import { QueryFunction, useQuery } from "react-query";
const url = import.meta.env.VITE_URL;
const key = import.meta.env.VITE_APIKEY;

export interface ICurrent {
  feels_like: number;
  pressure: number;
  temp: number;
  wind_speed: number;
  weather: [{ description: string }];
  humidity: number;
}
export interface IDay {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: [{ description: string }];
}
interface IData {
  current: ICurrent;
  name: string;
  timezone: string;
  daily: IDay[];
}

const getWeather: QueryFunction<IData, string[]> = async (queryKey) => {
  try {
    let city = queryKey.queryKey[1] || "Tashkent";
    const res = await axios.get(`${url}geo/1.0/direct?q=${city}&appid=${key}`);
    const { lat, lon, name } = res.data[0];
    const res2 = await axios.get(
      `${url}data/2.8/onecall?lat=${lat}&lon=${lon}&appid=${key}&exclude=minutely,hourly,alerts&lang=en&units=metric`
    );
    return { ...res2.data, name };
  } catch (error) {
    throw new Error(error.message);
  }
};
export const useWeather = (city) => useQuery(["weather", city], getWeather);
