import "./SideNav.scss";
import homeIcon from "../../assets/images/home-icon.svg";
import bookIcon from "../../assets/images/book-app-icon.svg";
import staffIcon from "../../assets/images/staff-icon.svg";
import clientsIcon from "../../assets/images/clients-icon.svg";
import resourcesIcon from "../../assets/images/resources-icon.svg";
import settingsIcon from "../../assets/images/settings-icon.svg";
import NavItem from "../NavItem/NavItem";
import navLine from "../../assets/images/nav-line.svg";
import whiteLogo from "../../assets/images/logo-white.svg";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <section className="SideNav">
        <div className="logo-container">
          <img className="white-logo" src={whiteLogo} alt="logo-left" />
        </div>
        <img className="SideNav--line" src={navLine} id="line1" />
        <div className="menu"></div>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/home"
          style={{ textDecoration: "none" }}
        >
          <NavItem image={homeIcon} name="Home" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/booking"
          style={{ textDecoration: "none" }}
        >
          <NavItem image={bookIcon} name="Book Appointment" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/staff"
          style={{ textDecoration: "none" }}
        >
          <NavItem image={staffIcon} name="Staff" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/clients"
          style={{ textDecoration: "none" }}
        >
          <NavItem image={clientsIcon} name="Clients" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/resources"
          style={{ textDecoration: "none" }}
        >
          <NavItem image={resourcesIcon} name="Resources" />
        </NavLink>

        <img className="SideNav--line" src={navLine} />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/settings"
          style={{ textDecoration: "none" }}
        >
          <NavItem image={settingsIcon} name="Settings" />
        </NavLink>
      </section>
    </>
  );
};

export default SideNav;
