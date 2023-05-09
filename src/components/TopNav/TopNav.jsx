import React from 'react'
import "./TopNav.scss"

const TopNav = ({heading, buttonTitle, showButton}) => {

  return (
    <div className='topnav'>
        <h1 className='topnav__heading'>{heading}</h1>
        {showButton && <button className='topnav__button'>{buttonTitle}</button>}
    </div>
  )
}

export default TopNav



