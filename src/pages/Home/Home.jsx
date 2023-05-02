import ClientCard from "../../components/ClientCard/ClientCard";
import "./Home.scss";
import staffData from "../../assets/data/mockStaffData";
import clientData from "../../assets/data/mockClientData";
import Staff from "../../components/Staff/Staff";

const Home = () => {
  console.log(staffData.staffImage);
  return (
    <div className="layout">
      <h1>Piya made this change</h1>
      <h2>Section Heading</h2>
    </div>
  );
};

export default Home;
