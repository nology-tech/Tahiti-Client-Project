import "./Home.scss";
import SideNav from "../../components/SideNav/SideNav";
import MobileNavPage from "../../components/MobileNavPage/MobileNavPage";
import HompageCard from "../../components/HomepageCard/HomepageCard";
import TopNav from "../../components/TopNav/TopNav";

const Home = () => {
  return (
    <div className="layout">
      <div className="desktopNav">
        <SideNav />
      </div>
      <div className="topnav-container"></div>

      <div className="cardContainer">
        <div className="mockHeader">
          <TopNav heading="Home" buttonTitle="+ Edit" showButton={false} />
        </div>

        <div className="rowContainer">
          <HompageCard title="New Appointment" link="/booking" />
          <HompageCard title="Staff Details" link="/staff" />
          <HompageCard title="Client Details" link="clients" />
          <HompageCard title="Resources" link="/resources" />
          <HompageCard title="Settings" link="/settings" />
        </div>
      </div>
      <MobileNavPage />
    </div>
  );
};

export default Home;
