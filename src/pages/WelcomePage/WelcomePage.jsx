import React from "react";
import "./WelcomePage.scss";
import WelcomeImage from "../../assets/images/Background-img-welcome.svg";
import Logo from "../../assets/images/logo black.svg";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const WelcomePage = (event) => {
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
          <LoginForm username={userName} password={password} />
          <Link to="/home" urlChange={urlChange}>
            <button>Log in</button>
          </Link>
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
