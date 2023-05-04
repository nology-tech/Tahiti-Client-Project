import "./Home.scss";
import SideNav from "../../components/SideNav/SideNav";
import MobileNavPage from "../../components/MobileNavPage/MobileNavPage";
import HompageCard from "../../components/HomepageCard/HomepageCard";

const Home = () => {
  return (
    <div className="layout">
      <div className="desktopNav">
        <SideNav />
      </div>

      <div className="mockHeader">
        <h1>Home</h1>
      </div>
      <HompageCard title="New Appointment" link="/booking" />
      <HompageCard title="Staff Details" link="/staff" />
      <HompageCard title="Client Details" link="clients" />
      <HompageCard title="Resources" link="/resources" />
      <HompageCard title="Settings" link="/settings" />
      <MobileNavPage />
    </div>
  );
};

export default Home;
