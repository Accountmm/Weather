import React from 'react'
import "../assets/sass/loading.scss";
import { useSelector } from 'react-redux';
import { IState } from '../store/weather';
function Loader() {
  const isDarkMode = useSelector((state: { weather: IState }) => state.weather.sun)

  return (
    <div className={`loading ${!isDarkMode && `dark`}`}>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader