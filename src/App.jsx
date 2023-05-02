import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/booking-active" element={<StaffBookingActive />} />
        <Route path="/edit-client" element={<EditClient />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
};

export default App;
