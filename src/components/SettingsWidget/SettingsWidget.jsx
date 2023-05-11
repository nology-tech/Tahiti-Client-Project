import React from "react";
import "./SettingsWidget.scss";
import Sun from "../../assets/images/sun-toggle-dark.svg";
import Moon from "../../assets/images/moon-toggle-dark.svg";
import { useState } from "react";
import Button from "../Button/Button";

const SettingsWidget = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [textTheme, setTextTheme] = useState("Modern Mode");

  const changeColorTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const changeToModern = () => {
    setTextTheme("Modern Mode");
  };

  const changeToTech = () => {
    setTextTheme("Tech Mode");
  };

  const applyTheme = () => {
    console.log(textTheme);
  };

  return (
    <div className="widget">
      <div className="colorMode">
        <h1>Light/Dark Mode:</h1>
        <img src={Sun} alt="" />
        <label className="switch">
          <input type="checkbox" onClick={changeColorTheme} />
          <span className="slider round"></span>
        </label>
        <img src={Moon} alt="" />
      </div>
      <section className="textMode">
        <h1>Select Theme:</h1>
        <div className="theme">
          <div className="theme-modern">
            <p>Modern</p>
            <input name="select" type="radio" onClick={changeToModern} />
          </div>
          <div className="theme-tech">
            <p>Tech</p>
            <input
              name="select"
              className="selector"
              type="radio"
              onClick={changeToTech}
            />
          </div>
        </div>
      </section>
      <div className="applyTheme">
        <Button variant="yellowMid" onClick={applyTheme} name="Apply" />
      </div>
    </div>
  );
};

export default SettingsWidget;
