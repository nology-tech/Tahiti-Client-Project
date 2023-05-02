import ClientCard from "../../components/ClientCard/ClientCard";
import "./Home.scss";
import "../../assets/data/mockStaffData";
import "../../assets/data/mockClientData";
import Staff from "../../components/Staff/Staff";

const Home = (props) => {
  const [clientData, staffData] = props;
  return (
    <div className="layout">
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
      <Staff staffNumber={staffNumber} image={image} jobTitle={jobTitle} />
      <ClientCard name={name} image={image} />
    </div>
  );
};

export default Home;
