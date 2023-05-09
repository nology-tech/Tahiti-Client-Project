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
            <img src={Moon} alt="" />
        </div>
        <div className='textMode'>
            <h1>Select Theme:</h1>
            <p>Modern</p>
            <input type="radio"/>
            <p>Tech</p>
            <input type="radio"/>
        </div>
        <button>Apply</button>
        

    </div>
  )
}

export default SettingsWidget