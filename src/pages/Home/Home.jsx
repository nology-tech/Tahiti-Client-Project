import "./Home.scss";
import HompageCard from "../../components/HomepageCard/HomepageCard";
const Home = () => {
  return (
    <div className="layout">
      <h1>Home</h1>
      <HompageCard title="New Appointment" link="/booking"/>
      <HompageCard title="Staff Details" link ="/staff"/>
      <HompageCard title="Client Details" link = "clients"/>
      <HompageCard title="Resources" link = "/resources"/>
      <HompageCard title="Settings" link = "/settings"/>
    </div>
  );
};

export default Home;
