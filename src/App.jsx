import { Route, Routes } from "react-router-dom";

import "./styles/main.scss";
import Booking from "../src/pages/Booking/Booking";
import ClientActive from "../src/pages/ClientActive/ClientActive";
import ClientDelete from "../src/pages/ClientDelete/ClientDelete";
import Clients from "../src/pages/Clients/Clients";
import ClientsSearch from "../src/pages/ClientsSearch/ClientsSearch";
import ClientsSorting from "../src/pages/ClientsSorting/ClientsSorting";
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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
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
      <Route path="/client-search" element={<ClientsSearch />} />
      <Route path="/client-active/:clientId" element={<ClientActive />} />
      <Route path="/client-new" element={<NewClient />} />
      <Route path="/client-edit/:clientId" element={<EditClient />} />
      <Route path="/client-sorting" element={<ClientsSorting />} />
      <Route path="/client-delete" element={<ClientDelete />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/edit-resources" element={<EditResources />} />
      <Route path="/request-resources" element={<RequestResources />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
