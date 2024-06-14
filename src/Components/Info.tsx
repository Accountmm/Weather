import React, { FC } from "react";
interface IProps {
  img:string
  title:string
  state:string
}
const Info:FC<IProps> = ({img,title,state}) =>  {
  return (
    <div className="current__right-item">
      <div className="current__right-img">
        <img src={img} alt="" />
      </div>
      <h3 className="current__right-title">{title}</h3>
      <p className="current__right-text">{state}</p>
    </div>
  );
}

export default Info;
