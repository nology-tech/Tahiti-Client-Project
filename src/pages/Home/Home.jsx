import ClientCard from "../../components/ClientCard/ClientCard";
import "./Home.scss";
import staffData from"../../assets/data/mockStaffData";
import clientData from "../../assets/data/mockClientData";
import Staff from "../../components/Staff/Staff";

const Home = () => {
  console.log(staffData.staffImage)
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
      <Staff staffNumber={staffData.staffNumber} staffImage={staffData.staffImage} jobTitle={staffData.jobTitle} />
      <ClientCard name={clientData.name} clientImage={clientData.clientImage} />
    </div>
  );
};

export default Home;
