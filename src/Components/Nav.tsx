import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import day from "../assets/images/day.svg";
import night from "../assets/images/night.svg";
import { useDispatch, useSelector } from "react-redux";
import { IState, changeCity, changeDay } from "../store/weather";
import { CiSettings } from "react-icons/ci";

function Nav() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const sun = useSelector((state: {
    weather: IState
  }

  ) => state.weather.sun);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(changeCity(e.target.children[0].value));
    e.target.children[0].value = "";
  }

  useEffect(() => {
    document.documentElement.dataset.theme = `${sun ? "light" : "dark"}`;
  }, [sun]);


  function toggleIsSettingsOpen() {
    setIsSettingsOpen(!isSettingsOpen)
  }

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__box">
          <a href="#!" className="nav__logo">
            <img src={logo} alt="" />
            Weather
          </a>
          <div className={`nav__right ${isSettingsOpen && 'active'}`}>
            <button className="nav__btn" onClick={() => dispatch(changeDay())}>
              {sun ? <img src={day} alt="" /> : <img src={night} alt="" />}
            </button>
            <form onSubmit={submit} >
              <input className="nav__input"
                type="text"
                placeholder="Выбрать город"
              />
            </form>
            <div className="settings" onClick={toggleIsSettingsOpen}> <CiSettings /> </div>
          </div>
          <div className="settings" onClick={toggleIsSettingsOpen}> <CiSettings /> </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;