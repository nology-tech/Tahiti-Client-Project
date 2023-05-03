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
import iconHouse from "../assets/images/mobile-home-btn.svg";
import { NavLink, Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <section className="SideNav">
        <img className="white-logo-left" src={logoLeft} alt="logo-left" />
        <img className="white-logo-right" src={logoRight} alt="logo-right" />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/home"
          style={{ textDecoration: "none" }}
        >
          <Components image={homeIcon} name="Home" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/booking"
          style={{ textDecoration: "none" }}
        >
          <Components image={bookIcon} name="Book Appointment" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/staff"
          style={{ textDecoration: "none" }}
        >
          <Components image={staffIcon} name="Staff" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/clients"
          style={{ textDecoration: "none" }}
        >
          <Components image={clientsIcon} name="Clients" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/resources"
          style={{ textDecoration: "none" }}
        >
          <Components image={resourcesIcon} name="Resources" />
        </NavLink>

        <img className="SideNav--line" src={navLine} />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/settings"
          style={{ textDecoration: "none" }}
        >
          <Components image={settingsIcon} name="Settings" />
        </NavLink>
        <Link to="/home">
          <footer>
            {" "}
            <img className="home" src={iconHouse} alt="" />
          </footer>
        </Link>
      </section>
    </div>
  );
};

export default SideNav;
