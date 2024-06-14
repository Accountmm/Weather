import React, { FC } from "react";
import Day from "./Day";
import { IDay } from "../hooks/useData";

interface IProps {
  daily: IDay[]
}

const Week: FC<IProps> = ({ daily }) => {
  return (
    <div className="week">
      <div className="container">
        <div className="week__box">
          <div className="week__box__grid_box">
            {daily.slice(0, 7).map((day) => (
              <Day key={day.dt} day={day} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week;
