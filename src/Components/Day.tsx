import React, { FC } from "react";
import { getWeek, getMonth, getDay, getTemp } from '../helper/index';
import { useImage } from '../hooks/useImages'; import { IDay } from "../hooks/useData";

interface IProps {
  day: IDay
}

const Day: FC<IProps> = ({ day }) => {

  return (
    <div className="day">
      <h3 className="day__title">{getWeek(day.dt)}</h3>
      <p className="day__date">{getDay(day.dt)} {getMonth(day.dt)}</p>
      <img src={useImage(day.weather[0].description)} alt="" />
      <p className="day__max">{getTemp(day.temp.max)}°</p>
      <p className="day__min">{getTemp(day.temp.min)}°</p>
      <p className="day__state">{day.weather[0].description}</p>
    </div>
  );
}

export default Day;
