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

const App = () => {
  const [user, setUser] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage setUser={setUser} />} />
      </Routes>
      {user && (
        <Routes>
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
      )}
    </>
  );
};

export default App;
