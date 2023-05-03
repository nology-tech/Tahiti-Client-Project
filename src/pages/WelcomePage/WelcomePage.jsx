import React from "react";
import "./WelcomePage.scss";
import WelcomeImage from "../../assets/images/Background-img-welcome.svg";
import Logo from "../../assets/images/logo black.svg";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="picture-logo" />
      </div>
      <div className="welcome-container">
        <div className="header-container">
          <h1>Welcome Back </h1>
          <p>
            Welcome to New You clinic where we provide world class beauty
            treatments that will make you look like you are 18 again!
          </p>
          <LoginForm />
          <button>Log in</button>
        </div>
      </div>

      <img
        src={WelcomeImage}
        className="picture-main"
        alt="blurry image of a class"
      />
    </div>
  );
};
export default WelcomePage;
