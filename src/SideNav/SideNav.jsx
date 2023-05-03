import "./SideNav.scss";
import homeIcon from "../assets/images/home-icon.svg";
import bookIcon from "../assets/images/book-app-icon.svg";
import staffIcon from "../assets/images/staff-icon.svg";
import clientsIcon from "../assets/images/clients-icon.svg";
import resourcesIcon from "../assets/images/resources-icon.svg";
import settingsIcon from "../assets/images/settings-icon.svg";
import Components from "./Components/Components";
import navLine from "../assets/images/nav-line.svg";
import logoLeft from "../assets/images/logo-left-white.svg";
import logoRight from "../assets/images/logo-right-white.svg";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <section className="SideNav">
      <img className="white-logo-left" src={logoLeft} alt="logo-left" />
      <img className="white-logo-right" src={logoRight} alt="logo-right" />
      <Link className="component" to ="/home"><Components image={homeIcon} name="Home" /></Link>
      <Link className="component" to ="/booking"><Components image={bookIcon} name="Book Appointment" /></Link>
      <Link className="component" to="/staff"><Components image={staffIcon} name="Staff" /></Link>
      <Link className="component" to="/clients"><Components image={clientsIcon} name="Clients" /></Link>
      <Link className="component" to="/resources"><Components image={resourcesIcon} name="Resources" /></Link>
      <img className="SideNav--line" src={navLine} />
      <Link className="component" to="/settings"><Components image={settingsIcon} name="Settings" /></Link>
    </section>
  );
};

export default SideNav;
