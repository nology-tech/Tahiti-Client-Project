import React from "react";
import "./WelcomePage.scss";
import WelcomeImage from "../../assets/images/Background-img-welcome.svg";
import Form from "../../Components/Form/Form";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="header-container">
        <h1>Welcome Back </h1>
        <p>
          Welcome to New You clinic where we provide world class beauty
          treatments that will make you look like you are 18 again!
        </p>
        <Form />
        <button>Log in</button>
      </div>
      <img src={WelcomeImage} />
      {/* <div className="picture-container">
        <img src={WelcomeImage} />
      </div> */}
    </div>
  );
};
export default WelcomePage;
