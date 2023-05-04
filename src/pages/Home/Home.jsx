import "./Home.scss";
import SideNav from "../../components/SideNav/SideNav";
import MobileNavPage from "../../components/MobileNavPage/MobileNavPage";

const Home = () => {
  return (
    <div className="layout">
      <div className="desktopNav">
      <SideNav />  

      </div>
          
      <div className="mockHeader">
        <h>Header</h>
      </div>
      <MobileNavPage />
    </div>
  );
};

export default Home;
