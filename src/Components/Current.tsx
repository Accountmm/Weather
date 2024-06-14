import React, { FC } from "react";
import cloud from "../assets/images/cloud.png";
import temp from "../assets/images/temp.svg";
import davleniya from "../assets/images/davleniya.svg";
import yomgir from "../assets/images/yomgir.svg";
import wind from "../assets/images/wind.svg";
import Info from "./Info";
import { getTime } from "../helper";
import { useImage } from '../hooks/useImages';
import { ICurrent } from "../hooks/useData";
interface IProps {
  current: ICurrent
  name: string
  timezone: string
}
const Current: FC<IProps> = ({ current, name, timezone }) => {
  return (
    <div className="current">
      <div className="container">
        <div className="current__box">
          <div className="current__left">
            <div className="current__left-img">
              <img src={useImage(current.weather[0].description)} alt="" />
            </div>
            <h1 className="current__left-temp">{current.temp.toFixed()}°</h1>
            <div className="current__left__info">
              <h2 className="current__left__info-text">Today</h2>
              <p className="current__left__info-time"><span>Time:</span> {getTime(timezone)}</p>
              <p className="current__left__info-city"><span>City:</span> {name}</p>
            </div>
          </div>
          <div className="current__right">
            <img className="current__right-cloud" src={cloud} alt="" />
            <Info img={temp} title={"Temperature"} state={`${current.temp.toFixed()}° - feels like ${current.feels_like.toFixed()}°`} />
            <Info img={davleniya} title={"Pressure"} state={`${current.pressure} mm `} />
            <Info img={yomgir} title={"Humidity"} state={`${current.humidity} %`} />
            <Info img={wind} title={"Wind"} state={`${current.wind_speed} m/s south-west`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
