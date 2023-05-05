import { Route, Routes } from "react-router-dom";

import "./styles/main.scss";
import Booking from "../src/pages/Booking/Booking";
import ClientActive from "../src/pages/ClientActive/ClientActive";
import Clients from "../src/pages/Clients/Clients";
import EditClient from "../src/pages/EditClient/EditClient";
import EditResources from "../src/pages/EditResources/EditResources";
import Home from "../src/pages/Home/Home";
import NewClient from "../src/pages/NewClient/NewClient";
import RequestResources from "../src/pages/RequestResources/RequestResources";
import Resources from "../src/pages/Resources/Resources";
import Settings from "../src/pages/Settings/Settings";
import Staff from "../src/pages/Staff/Staff";
import StaffBookingActive from "../src/pages/StaffBookingActive/StaffBookingActive";
import StaffEditClient from "../src/pages/StaffEditClient/StaffEditClient";
import WelcomePage from "../src/pages/WelcomePage/WelcomePage";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./App.scss"




const App = () => {

  const [password, setPassword]=useState("")
  const [email, setEmail]=useState("")
  //const [isValid, setIsValid]=useState(true)


  //const navigate = useNavigate()

  //const submitForm = (event)=> {
    //if (user.email&&user.password) {
      
    //}
  //}

  //const hideMessage = ()=> {
    //setIsValid(!isValid)
    
  //}

console.log(userCredential)
  const passwordInput = (event)=> {
    setPassword(event.target.value)
  }

  const emailInput = (event)=> {
    setEmail(event.target.value)
  }

  return (
    <Routes>
      <Route path="/" element={<WelcomePage password={password} email={email} passwordInput={passwordInput} emailInput={emailInput} userCredential={userCredential}  />} />
      <Route path="/home" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/staff" element={<Staff />} />
      <Route
        path="/staff-booking-active/:clientId"
        element={<StaffBookingActive />}
      />
      <Route
        path="/staff-edit-client/:clientId"
        element={<StaffEditClient />}
      />
      <Route path="/clients" element={<Clients />} />
      <Route path="/client-active/:clientId" element={<ClientActive />} />
      <Route path="/client-new" element={<NewClient />} />
      <Route path="/client-edit/:clientId" element={<EditClient />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/edit-resources" element={<EditResources />} />
      <Route path="/request-resources" element={<RequestResources />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
