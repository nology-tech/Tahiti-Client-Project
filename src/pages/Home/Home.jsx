import "./Home.scss";
import SideNav from "../../components/SideNav/SideNav";
//import MobileNavPage from "../../components/MobileNavPage/MobileNavPage";

const Home = () => {
  return (
    <div className="layout">
      <h1>Piya made this change</h1>
      <h2>Section Heading</h2>
      <SideNav />
      {/* <MobileNavPage /> */}
    </div>
  );
};

export default Home;
