import React from "react";
import "./WelcomePage.scss";
import WelcomeImage from "../../assets/images/Background-img-welcome.svg";
import Logo from "../../assets/images/logo black.svg";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

const WelcomePage = ({email, password, submitForm, emailInput, passwordInput, isValid, hideMessage}) => {
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
          <LoginForm password={password} email={email} emailInput={emailInput} passwordInput={passwordInput}/>
          <button onClick={submitForm}>Log in</button>
        </div>
      </div>

      <img
        src={WelcomeImage}
        className="picture-main"
        alt="blurry image of a class"
      />
      <div>
        {!isValid&&
        <div className="displayMessage">
          <h1 >
          Please enter a valid email and password!
          </h1>
          <button onClick={hideMessage}>Try again</button></div>}
      </div>
    </div>
  );
};
export default WelcomePage;
