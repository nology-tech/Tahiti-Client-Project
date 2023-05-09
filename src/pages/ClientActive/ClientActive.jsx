import React from 'react'
import "./ClientActive.scss"
import SideNav from "../../components/SideNav/SideNav";
import TopNav from '../../components/TopNav/TopNav';


const ClientActive = () => {
  return (
    <div>
      <TopNav heading ="Clients" buttonTitle ="+ Edit" showButton={true}/>
      <SideNav/> 
    </div>
  )
}

export default ClientActive