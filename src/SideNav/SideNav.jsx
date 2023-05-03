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

const SideNav = () => {
  console.log(homeIcon);
  return (
    <section className="SideNav">
      <img className="white-logo-left" src={logoLeft} alt="logo-left" />
      <img className="white-logo-right" src={logoRight} alt="logo-right" />
      <Components image={homeIcon} name="Home" />
      <Components image={bookIcon} name="Book Appointment" />
      <Components image={staffIcon} name="Staff" />
      <Components image={clientsIcon} name="Clients" />
      <Components image={resourcesIcon} name="Resources" />
      <img className="SideNav--line" src={navLine} />
      <Components image={settingsIcon} name="Settings" />
    </section>
  );
};

export default SideNav;
