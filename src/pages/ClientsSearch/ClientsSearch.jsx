import React from 'react'
import "./ClientsSearch.scss"
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav"

const ClientsSearch = () => {
  return (
    <div>
      <TopNav heading ="Clients" buttonTitle ="+ Create" showButton={true}/>
      <SideNav/> 
    </div>
  )
}

export default ClientsSearch