import React from 'react'
import "./SettingsWidget.scss"
import Sun from "../../assets/images/sun-toggle-icon.svg"
import Moon from "../../assets/images/moon-toggle-icon.svg"

const SettingsWidget = () => {
  return (
    <div className='widget'>
        <div className='colorMode'>
            <h1>Light/Dark Mode:</h1>
            <img src={Sun} alt="" />
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
            <img src={Moon} alt="" />
        </div>
        <div className='textMode'>
            <h1>Select Theme:</h1>
            <div className='theme'>
              <p>Modern</p>
              <input name="select" className="selector" type="radio"/>
            </div>
            <div className='theme'>
              <p>Tech</p>
              <input name="select" className="selector" type="radio"/>
            </div>
        </div>
        <button>Apply</button>
        

    </div>
  )
}

export default SettingsWidget