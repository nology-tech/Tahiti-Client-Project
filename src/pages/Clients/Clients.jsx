import React from 'react'
import "./Clients.scss"
import SideNav from "../../components/SideNav/SideNav";
import TopNav from '../../components/TopNav/TopNav'

const Clients = () => {
  return (
    <div>
      <TopNav heading ="Clients" buttonTitle ="+ Create" showButton={true} />
      <SideNav/>
    </div>
  )
}

export default Clients