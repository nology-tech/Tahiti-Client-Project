import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import "./EditResources.scss";
import SideNav from "../../components/SideNav/SideNav";
import MobileHomeButton from "../../components/MobileHomeButton/MobileHomeButton";
import ResourceForm from "../../components/Forms/ResourceForm/ResourceForm";
import Button from "../../components/Button/Button";

const EditResources = () => {
  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => {
    setPopUp(!popUp);
  };
  return (
    <div className="edit-resources">
      <SideNav />
      <div className="edit-resources__container">
        <TopNav
          heading="Edit Resource"
          buttonTitle="+ Edit"
          showButton={false}
        />
        <ResourceForm className="edit-resources__container--form" />

        <MobileHomeButton />
      </div>
      <div className="display-pop-up">
        <h1>Edit Resource Complete</h1>
        <Link to="/home">
          <Button
            onClick={handlePopUp}
            name="Home"
            image={false}
            variant="yellowMid"
          />
        </Link>
      </div>
    </div>
  );
};

export default EditResources;
