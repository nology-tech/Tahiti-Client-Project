import React from 'react'
import "./Staff.scss"
import SideNav from "../../components/SideNav/SideNav";
import TopNav from '../../components/TopNav/TopNav';

const Staff = () => {
  return (
    <div>
      <TopNav heading ="Staff" buttonTitle ="+ Edit" showButton={true}/>
      <SideNav/>
    </div>
  )
}

export default Staff