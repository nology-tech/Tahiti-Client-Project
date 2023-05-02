import ClientCard from "../../components/ClientCard/ClientCard";
import "./Home.scss";
import "../../assets/data/mockStaffData";
import "../../assets/data/mockClientData";
import Staff from "../../components/Staff/Staff";

const Home = (props) => {
  const [clientData, staffData] = props;
  return (
    <div className="layout">
      <h1>Piya made this change</h1>
      <h2>Section Heading</h2>
    </div>
  );
};

export default Home;
