import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import ClientDelete from "./pages/ClientDelete/ClientDelete";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff-booking-active/:clientId" element={<StaffBookingActive />} />
        <Route path="/staff-edit-client/:clientId" element={<StaffEditClient />} />
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
    </Router>
  );
};

export default App;
